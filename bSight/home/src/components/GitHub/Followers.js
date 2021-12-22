import React, { useEffect, useRef } from "react";
import { useDataFetching } from "../../customHooks/dataFetching";

const Followers = ({ endPoint }) => {
  const [{ data, dataState }, request] = useDataFetching(`${endPoint}`);

  //   console.log("Followers", { data, dataState });

  const timer = useRef();

  useEffect(() => {
    // to refresh the number of followers
    timer.current = setInterval(() => {
      request && request();
    }, 120000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <p>
      {dataState === "FULFILLED"
        ? data.followers && data.followers
        : dataState === "PENDING"
        ? "..."
        : "ERROR"}
    </p>
  );
};

export default Followers;
