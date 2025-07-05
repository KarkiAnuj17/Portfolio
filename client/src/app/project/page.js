'use client'
import { useEffect, useState } from "react";
import { GitFork, Github, Star } from "lucide-react";

const Index = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.github.com/users/Karkianuj17/repos", {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();

        const selectedRepos = data.filter(repo =>
          [
            "Advanced-Calculator",
            "ecommerce-website",
            "Tic-tac-toe",
            "minesweeper",
            "slot_game",
            "lottery-game",
            "jobListing"
          ].includes(repo.name)
        );

        const projectDescriptions = {
          "Advanced-Calculator":
            "A responsive React-based calculator built with NextUI, featuring dynamic input handling and support for arithmetic operations.",
          "ecommerce-website":
            "A full-stack eCommerce app with product listings, authentication, and cart features built using modern web tools.",
          "Tic-tac-toe":
            "An interactive two-player Tic Tac Toe game with clean UI and smart logic.",
          "minesweeper":
            "A browser-based Minesweeper game with React, featuring a responsive grid and real-time interaction.",
          "slot_game":
            "A slot machine game with dynamic UI, animations, betting logic, and condition-based gameplay.",
          "lottery-game":
            "A lottery game with animated feedback, real-time logic, and reusable components using React.",
          "jobListing":
            "A job listing platform with pagination, favorites, and an application form built in Next.js."
        };

        const enrichedRepos = await Promise.all(
          selectedRepos.map(async (repo) => {
            try {
              const langResponse = await fetch(repo.languages_url);
              const langData = await langResponse.json();
              const languages = Object.keys(langData);

              return {
                ...repo,
                customDescription: projectDescriptions[repo.name] || repo.description,
                languages,
              };
            } catch (langError) {
              return {
                ...repo,
                customDescription: projectDescriptions[repo.name] || repo.description,
                languages: [],
              };
            }
          })
        );

        setRepos(enrichedRepos);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching repos:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-400">Error Loading Repositories</h1>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 min-h-screen  border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and open-source contributions
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="relative group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                    {repo.name}
                  </h3>
                  <div className="flex space-x-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Star size={14} className="mr-1" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <GitFork size={14} className="mr-1" />
                      {repo.forks_count}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{repo.customDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 z-10 relative">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Index;