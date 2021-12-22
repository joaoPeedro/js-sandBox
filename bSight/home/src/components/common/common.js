import React from "react";

const TableContainer = (props) => {
  return <div className="table">{props.children}</div>;
};

const LoadingContainer = () => {
  return <span className="loading-container">LOADING...</span>;
};

export { TableContainer, LoadingContainer };
