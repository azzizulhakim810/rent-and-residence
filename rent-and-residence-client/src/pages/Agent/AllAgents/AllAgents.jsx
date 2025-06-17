import { useLoaderData } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import UserCard from "../../../components/UserCard/UserCard";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const AllAgents = () => {
  const users = useLoaderData([]);
  // console.log(users);

  return (
    <div className="bg-C_LightGray/5 py-6">
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

              <span>
                Whether you’re looking for property for sale in New York area or
                property for rent, WP Residence makes searching easy. Use our
                unique geolocation mapping feature to root-out your ideal villa,
                townhouse or apartment and contact the owners direct. We will
                help you find your dream house in just a few seconds.
              </span>
            </p>

            {/* All Agents  */}
            {/* First Row  */}
            <div className="grid grid-cols-2 justify-start w-full gap-6 py-5">
              {users?.map((user) => (
                <UserCard key={user._id} user={user} />
              ))}
            </div>
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
