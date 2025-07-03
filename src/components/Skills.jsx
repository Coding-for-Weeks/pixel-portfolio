import React from "react";

const categories = [
  {
    title: "💻 Languages",
    skills: ["Python", "Go", "Bash", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "🧰 Tools & Frameworks",
    skills: ["React", "Tailwind", "Flask", "SQLite", "Git", "GitHub Actions"],
  },
  {
    title: "🛡️ Cyber & CLI",
    skills: ["Kali Linux", "Burp Suite", "Nmap", "OSINT", "Custom Bash Scripts"],
  },
  {
    title: "⚙️ DevOps & Productivity",
    skills: ["VS Code", "Oh My Posh", "Venv", "DB Browser", "Linux CLI"],
  },
];

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-6 font-pixel" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-purple-300 mb-12 border-b-2 border-purple-500 inline-block pb-2">
          🧠 Arcane Disciplines Mastered
        </h2>
        <div className="grid gap-10 md:grid-cols-2 mt-10 text-left">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-gray-800 border border-purple-600 rounded-lg p-6">
              <h3 className="text-lg text-purple-400 mb-3">{cat.title}</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {cat.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
