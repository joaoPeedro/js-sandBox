import React from "react";
import { useDataFetching } from "../../customHooks/dataFetching";
import { LoadingContainer, TableContainer } from "../common/common";

const GitHubRepos = ({ endPoint }) => {
  const [{ data, dataState }, request] = useDataFetching(
    `${endPoint}search/repositories`,
    {
      q: "created:>2021-01-01",
      sort: "stars",
      per_page: 5,
      order: "desc",
      type: "Repositories",
    }
  );

  // console.log("REPO", { data, dataState });

  return (
    <article>
      <h1>GitHubRepos</h1>
      <TableContainer>
        <div className="table-header">
          <span>id</span>
          <span>name</span>
          <span> description </span>
          <span>number of stars</span>
        </div>

        {dataState === "FULFILLED" ? (
          data.items.map((item, idx) => {
            return (
              <div key={`GitHubRepos-row-${idx}`}>
                <span>{item.id && item.id}</span>
                <span>{item.name && item.name}</span>
                <span>{item.description && item.description}</span>
                <span>{item.stargazers_count && item.stargazers_count}</span>
              </div>
            );
          })
        ) : dataState === "PENDING" ? (
          <LoadingContainer />
        ) : (
          "ERROR"
        )}
      </TableContainer>
      <button onClick={() => request()} id="hot_repo">
        refresh repo
      </button>
    </article>
  );
};

export default GitHubRepos;
