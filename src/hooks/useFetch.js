import { useEffect, useState } from "react";
import api from "../api/api";

const useFetch = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    handleSearchResult("Pasta");
  }, []);

  const handleSearchResult = async (searchVal) => {
    try {
      console.log("fetching");
      const res = await api.get("/search", {
        params: {
          limit: 50,
          term: searchVal,
          location: "san jose",
        },
      });
      setResults(res.data.businesses);
      console.log("done");
    } catch (err) {
      setErrorMessage("Something went wrong..");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return [handleSearchResult, results, errorMessage];
};

export default useFetch;
