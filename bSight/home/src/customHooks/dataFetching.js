import { useState, useEffect, useRef } from "react";
import axios from "axios";

/**
 * @param {string} url - endpoint
 * @param {obj} params - request params
 * @returns {data, dataState, request}
 */
export const useDataFetching = (url = null, params = {}) => {
  //to avoid errors if the component no longer exists
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, dataState: "PENDING" });

  const request = (url) => {
    if (!url) return;
    axios
      .get(url, { params })
      .then((res) => {
        if (isCurrent.current) {
          setState({ data: res.data, dataState: "FULFILLED" });
        }
      })
      .catch((err) => {
        if (isCurrent.current) {
          console.log(err);
          setState({ data: null, dataState: "REJECTED" });
        }
      });
  };

  useEffect(() => {
    request(url, params);
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  return [
    state,
    (newUrl = url, newParams = params) => {
      setState(() => ({
        data: null,
        dataState: "PENDING",
      }));
      request(newUrl, newParams);
    },
  ];
};
