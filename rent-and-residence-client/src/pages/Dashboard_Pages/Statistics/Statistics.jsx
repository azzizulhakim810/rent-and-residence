import AdminDashboard from "../../../components/AdminDashboard/AdminDashboard";
import AgentDashboard from "../../../components/AgentDashboard/AgentDashboard";
import useScrollToTop from "../../../hooks/useScrollToTop/useScrollToTop";
import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const Statistics = () => {
  useScrollToTop();
  const [{ role }] = useSignedInUser();

  console.log(role);
  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">Dashboard - Main</h1>

      {role?.toLowerCase() === "admin" && <AdminDashboard />}
      {role?.toLowerCase() === "agent" && <AgentDashboard />}
    </div>
  );
};

export default Statistics;
