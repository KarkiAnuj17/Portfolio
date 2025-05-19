'use client'
import { useEffect, useState } from "react";
import { ArrowUp, Github, Link } from "lucide-react";

const Index = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.github.com/users/Karkianuj17/repos");

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();

        const selectedRepos = data.filter(repo =>
          ["Advanced-Calculator", "ecommerce-website", "Tic-tac-toe"].includes(repo.name)
        );

        const projectDescriptions = {
          "Advanced-Calculator": "A powerful A responsive React-based calculator built with NextUI, featuring dynamic input handling, custom-styled buttons, and support for basic arithmetic operations including percentage, clear, and backspace functionalities.",
          "ecommerce-website": "A full-stack web application for online shopping. Features include product listings, user authentication, a shopping cart, order management, and a responsive design. Built using modern web technologies for a seamless user experience.",
          "Tic-tac-toe": "An interactive Tic Tac Toe game featuring a sleek UI and smart game logic to compete with another player.",
        };

        const enrichedRepos = await Promise.all(
          selectedRepos.map(async (repo) => {
            const langResponse = await fetch(repo.languages_url);
            const langData = await langResponse.json();
            const languages = Object.keys(langData);

            return {
              ...repo,
              customDescription: projectDescriptions[repo.name] || repo.description,
              languages,
            };
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

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="project" className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
            My GitHub Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            A showcase of my selected open-source projects from GitHub.
            Each card displays key project information and links.
          </p>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-600 font-medium text-lg">{error}</p>
            <p className="text-gray-600 mt-2">Please try again later or check your network connection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {repo.name.replace(/-/g, " ")}
                  </h3>

                  <p className="text-white mb-4  h-30">
                    {repo.customDescription || "A personal project showcasing my coding skills and interests."}
                  </p>

                  <div className="flex items-center text-sm text-white mb-4">
                    <span className="flex items-center mr-4">
                      <span className="mr-1">⭐</span>
                      {repo.stargazers_count || 0} stars
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">🍴</span>
                      {repo.forks_count || 0} forks
                    </span>
                  </div>

                  {repo.languages?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.languages.map((lang) => (
                        <span
                          key={lang}
                          className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex mt-4 pt-4 border-t border-gray-100 gap-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                      aria-label={`GitHub repository for ${repo.name}`}
                    >
                      <Github size={16} className="mr-2" />
                      GitHub Repo
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                        aria-label={`Live demo for ${repo.name}`}
                      >
                        <Link size={16} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scroll to top button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
