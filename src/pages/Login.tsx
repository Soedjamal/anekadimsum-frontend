import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import { CircleAlert, Eye, EyeClosed } from "lucide-react";

const Login = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [errorClient, setErrorClient] = useState<string>("");
  const { mutate, isPending, isError, error } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.email.length < 1 || formData.password.length < 1) {
      return setErrorClient("field wajib di isi");
    }

    mutate(formData);
  };

  return (
    <div className="flex min-h-screen items-center pt-28 flex-col bg-neutral-50">
      <div className="h-[50px] overflow-hidden flex items-center">
        <img src="/images/anekadimsum-logo.png" alt="" className="w-[100px]" />
      </div>
      <div className="w-[90%] md:w-3/4 lg:w-1/3 max-w-md rounded-lg pt-2 p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-14">
          Masuk Sebagai Admin
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-2 pr-10 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {showPass ? (
                <Eye
                  size="1.3rem"
                  className="absolute top-[0.6rem] right-3  text-input"
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <EyeClosed
                  size="1.3rem"
                  className="absolute top-[0.6rem] right-3  text-input"
                  onClick={() => setShowPass(!showPass)}
                />
              )}
            </div>
          </div>

          <p className="text-primary text-sm">Lupa password?</p>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary text-white py-2 rounded-sm hover:bg-background transition disabled:bg-gray-400"
          >
            {isPending ? "Logging in..." : "Login"}
          </Button>
          {isError ? (
            <p className="text-red-500 text-sm flex items-center gap-2 mb-4 p-2 w-full bg-red-50 rounded-sm">
              <CircleAlert size="1rem" />
              {(error as any)?.response?.data?.message || "Login failed"}
            </p>
          ) : errorClient ? (
            <p className="text-red-500 text-sm flex items-center gap-2 mb-4 p-2 w-full bg-red-50 rounded-sm">
              <CircleAlert size="1rem" />
              {errorClient}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
