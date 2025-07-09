import React from "react";

const projects = [
  {
    title: "FableForge",
    tech: ["Python", "SQLite", "Rich CLI"],
    description: "A D&D-style text quest engine with database integration and console UI.",
    link: "https://github.com/Nullgrimoire/FableForge",
  },
  {
    title: "DirSleuth",
    tech: ["Go", "CLI", "File System"],
    description: "A terminal-based directory analysis tool to uncover anomalies in file structures.",
    link: "https://github.com/Nullgrimoire/DirSleuth",
  },
  {
  title: "Pokedex Lookup",
  tech: ["Python", "CLI", "Rich"],
  description: "A command-line Pokédex viewer with evolution chains, type data, and styled output using Rich.",
  link: "https://github.com/Nullgrimoire/Pokedex-lookup",
  },
  {
  title: "Dark Market",
  tech: ["Python", "Pygame", "JSON", "Modular Architecture"],
  description: "A fantasy stock trading simulator with dynamic pricing, inventory management, and procedural shop events.",
  link: "https://github.com/Nullgrimoire/Dark-Market",
  }
];

export default function Projects() {
  return (
    <div className="section-container" id="projects">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-purple-300 mb-12 border-b-2 border-purple-500 inline-block pb-2">
          🛠️ Scroll of Works
        </h2>
        <div className="grid gap-8 md:grid-cols-2 mt-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-800 border border-purple-600 rounded-lg p-4 hover:scale-105 transition-transform"
            >
              <h3 className="text-lg text-purple-400">{proj.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{proj.description}</p>
              <p className="text-xs text-gray-400 mt-2 italic">
                {proj.tech.join(" • ")}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
