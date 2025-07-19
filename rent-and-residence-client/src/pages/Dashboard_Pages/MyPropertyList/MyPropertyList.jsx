import { useEffect, useState } from "react";
import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const MyPropertyList = () => {
  const [currentUserFromDB] = useSignedInUser();
  const { _id } = currentUserFromDB;
  const [agentOwnedProperty, setAgentOwnedProperty] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5123/api/agentOwnedProperty/${_id}`)
      .then((res) => res.json())
      .then((data) => setAgentOwnedProperty(data[0]));
  }, [_id]);

  console.log(agentOwnedProperty);

  return (
    <div>
      <h1>MyPropertyList</h1>
    </div>
  );
};

export default MyPropertyList;
