'use client'
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Karkianuj17/repos")
      .then((res) => res.json())
      .then((data) => {
        const selectedRepos = data.filter(repo =>
          ["Advanced-Calculator", "ecommerce-website","Tic-tac-toe"].includes(repo.name)
        );
        setRepos(selectedRepos);
      });
  }, []);

  return (
    <div id ='project' className="p-6">
      <h2 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500">
          Projects
        </h2>
        <Divider className="w-24 h-1 mb-12 mx-auto rounded-lg bg-gradient-to-r from-purple-600 to-orange-600" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <a href={repo.html_url} target="_blank" className="text-blue-500 mt-2 block">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
