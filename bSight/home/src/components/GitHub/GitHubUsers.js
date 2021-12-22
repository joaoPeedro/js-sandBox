import React from "react";
import { useDataFetching } from "../../customHooks/dataFetching";
import { LoadingContainer, TableContainer } from "../common/common";
import Followers from "./Followers";

const GitHubUsers = ({ endPoint }) => {
  const [{ data, dataState }, request] = useDataFetching(
    `${endPoint}search/users`,
    {
      q: "created:>2020-10-24",
      sort: "followers",
      per_page: 5,
      order: "desc",
      type: "Users",
    }
  );

  // console.log("USERS", { data, dataState });

  return (
    <article>
      <h1>GitHubUsers</h1>
      <TableContainer>
        <div className="table-header">
          <span>id</span>
          <span>login</span>
          <span>avatar image </span>
          <span>number of followers</span>
        </div>
        {dataState === "FULFILLED" ? (
          data.items.map((item, idx) => {
            return (
              <div key={`GitHubUsers-row-${idx}`}>
                <span>{item.id}</span>
                <span>{item.login}</span>
                <span>
                  <img
                    src={item.avatar_url}
                    width="45"
                    alt={`${item.login}-avatar`}
                  />
                </span>
                <span>
                  <Followers endPoint={item.url} />
                </span>
              </div>
            );
          })
        ) : dataState === "PENDING" ? (
          <LoadingContainer />
        ) : (
          "ERROR"
        )}
      </TableContainer>
      <button onClick={() => request()} id="prolific_users">
        refresh users
      </button>
    </article>
  );
};

export default GitHubUsers;
