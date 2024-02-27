import DashboardLayout from "./layout";
import ContentCard from "./components/ContentCard";

const page = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-center text-white text-xl">Dashboard Page</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto mt-10">
        <ContentCard name="Blogs" link="blogs" />
        <ContentCard name="Project" link="projects" />
      </div>
    </DashboardLayout>
  );
};

export default page;
