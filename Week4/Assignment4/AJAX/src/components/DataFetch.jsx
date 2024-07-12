import React, { useState, useEffect } from "react";
import DataList from "./DataList";

const DataFetch = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(5); // 初始化 page 為 1

  useEffect(() => {
    fetch(`https://api.github.com/orgs/facebook/repos?per_page=${page}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 5);
  };

  return (
    <div>
      <DataList repo={repos} />
      <button onClick={loadMore} className="moreButton">
        More
      </button>
    </div>
  );
};

export default DataFetch;
