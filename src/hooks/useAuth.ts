import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { axiosInstance } from "@/lib/axios";

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const loginUser = async (credentials: LoginCredentials) => {
    const response = await axiosInstance.post<User>(`/api/auth`, credentials);
    console.log(response.data);
    return response.data;
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      window.location.href = "/dashboard";
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

  return { user, mutate, logout, isPending, isError, error };
};
