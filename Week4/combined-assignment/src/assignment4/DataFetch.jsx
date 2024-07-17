import React, { useState, useEffect } from "react";
import DataList from "./DataList";

const DataFetch = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        if (isInitialLoad) {
          setRepos(data);
          setIsInitialLoad(false);
        } else {
          setRepos((prevRepo) => [...prevRepo, ...data]);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="moreButtonDiv">
      <DataList repo={repos} />
      <button onClick={loadMore} className="moreButton">
        More
      </button>
    </div>
  );
};

export default DataFetch;
