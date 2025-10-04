import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useSearchResults = () => {
  // const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // const [searchedProp, setSearchedProp] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    bedroom: "",
    room: "",
  });

  // const { data, isPending, refetch } = useQuery({
  //   queryKey: ["searchResults"],
  //   queryFn: async () => {
  //     const result = await axiosPublic.get(
  //       `/api/search?city=${filters.city}&bedroom=${filters.bedroom}&room=${filters.room}`
  //     );
  //     return result;
  //   },
  // });

  const handleSearch = async () => {
    // const result = await axiosPublic.get(
    //   `/api/search?city=${filters.city}&bedroom=${filters.bedroom}&room=${filters.room}`
    // );

    // setSearchedProp(result.data);
    // setFilters({
    //   city: "",
    //   bedroom: "",
    //   room: "",
    // });

    navigate(
      `/search?city=${filters.city}&bedroom=${filters.bedroom}&room=${filters.room}`
    );
  };

  // return [handleSearch, searchedProp, filters, setFilters];
};

// export default useSearchResults;
