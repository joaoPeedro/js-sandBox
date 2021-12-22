import React from "react";
import GitHubRepos from "./GitHubRepos";
import GitHubUsers from "./GitHubUsers";

const GitHub = () => {
  const GITHUB_API = "https://api.github.com/";
  return (
    <div>
      <GitHubRepos endPoint={GITHUB_API} />
      <GitHubUsers endPoint={GITHUB_API} />
    </div>
  );
};

export default GitHub;
