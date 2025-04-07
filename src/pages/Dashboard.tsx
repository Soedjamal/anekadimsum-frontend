import DashboardCards from "@/components/custom/admin/DashboardCard";

const Dashboard = () => {
  return (
    <>
      <div className="md:flex">
        <div className="flex-shrink-0">
          <DashboardCards />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
