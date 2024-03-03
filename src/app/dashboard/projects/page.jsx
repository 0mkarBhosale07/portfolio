import DashboardPage from "../components/DashboardPage";

const DashboardProject = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div>
      <DashboardPage />
    </div>
  );
};

export default DashboardProject;
