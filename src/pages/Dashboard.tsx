import Sidebar from "@/components/custom/header/Sidebar";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const userId = userData ? JSON.parse(userData) : null;
    console.log(userId);
    if (id !== userId._id) {
      navigate("/auth/admin/login");
    }
  }, []);

  return (
    <>
      <Sidebar />
    </>
  );
};

export default Dashboard;
