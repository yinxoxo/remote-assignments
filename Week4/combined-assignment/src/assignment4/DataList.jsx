const DataList = ({ repo }) => {
  console.log(repo);

  return (
    <div className="dataList">
      <ul>
        {repo.map((r) => (
          <li key={r.id}>
            <div className="itemFirst">
              <h2 className="name">{r.name}</h2>
              <div className="visibility">{r.visibility}</div>
            </div>
            <p className="description">{r.description}</p>
            <div className="topicContainer">
              {r.topics.map((topic, index) => (
                <div key={index} className="topicItem">
                  {topic}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
