/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import UserCard from "../../../components/AgentCard/AgentCard";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import AgentCard from "../../../components/AgentCard/AgentCard";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure/UseAxiosSecure";
import useScrollToTop from "../../../hooks/useScrollToTop/useScrollToTop";

const AllAgents = () => {
  useScrollToTop();
  const axiosSecure = UseAxiosSecure();
  // console.log(users);

  const { data: allAgents } = useQuery({
    queryKey: ["allAgents"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/users");
      return res.data;
    },
  });

  return (
    <div className="bg-C_LightGray/5 py-6 pt-25">
      <Helmet>
        <title>R & R | Agents</title>
      </Helmet>
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={"All Agents"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <h1 className="font-Nunito text-[34px] font-[700]">All Agents</h1>
            <p className="flex flex-col gap-4 text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] leading-6 pt-2">
              <span>
                We like to think of ourselves as a small but perfectly formed
                lettings & management agency. Working you get the exposure,
                knowledge and expertise you would expect from a large agent, but
                the service you will only receive from a smaller business built
                around 100% client and tenant focus.
              </span>
            </p>

            {/* All Agents  */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid lg:grid-cols-2 grid-cols-1 justify-start w-full gap-4 py-5"
            >
              {allAgents?.map((agent) => (
                <AgentCard key={agent._id} agent={agent} />
              ))}
            </motion.div>
          </div>

          {/* Sidebar  */}
          <div className="lg:col-span-4 col-span-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAgents;
