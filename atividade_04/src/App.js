import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Repositories></Repositories>
      </header>
    </div>
  );
}

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  const repoList = repos.map((repo) => (
    <div>
      <div>
        <div style={{ fontSize: 22, color: "red" }}> {repo.name}</div>
        <div style={{ fontSize: 20 }}>{repo.description}</div>
        <a style={{ fontSize: 20 }} href={repo.html_url}>
          Código Fonte
        </a>
      </div>
      <br />
    </div>
  ));
  const gatherApiData = async () => {
    const response = await fetch(
      "https://api.github.com/orgs/rocketseat/repos"
    );
    const data = await response.json();

    setRepos(data);
  };

  useEffect(() => {
    gatherApiData();
  }, []);

  return (
    <div
      style={{
        textAlign: "left",
        fontSize: 20,
        color: "black",
      }}
    >
      <h1>Lista de Repositorios</h1>
      {repoList}
    </div>
  );
};

export default App;
