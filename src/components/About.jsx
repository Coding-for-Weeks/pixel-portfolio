import React from "react";

const About = () => {
  return (
    <div className="section-container bg-gray-950 md:px-12" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-purple-300 mb-8 border-b-2 border-purple-500 inline-block pb-2">
          📖 Tome of Self
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6">
          Greetings, traveler. I am <span className="text-purple-400">Noah Weeks</span>, a 25-year-old software developer,
          cybersecurity enthusiast, and arcane architect of code. From launching my first IT business at 19 to 
          conjuring CLI quests and SQLite spellbooks, I walk the line between hacker and storyteller.
        </p>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed mt-4">
          My craft: turning commands into rituals, scripts into scrolls, and projects into enchanted relics.
          I’m currently mastering the black arts of ethical hacking while building tools to protect and empower.
        </p>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed mt-4 italic">
          “Build with intention. Break with purpose. Learn from the echoes.”
        </p>
      </div>
    </div>
  );
};

export default About;
