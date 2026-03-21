import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 pb-6 px-[1vw] md:px-[5vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="w-full sm:w-[48%] mb-10 bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] overflow-hidden"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-5">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={25}
                  tiltMaxAngleY={25}
                  perspective={500}
                  scale={1.15}
                  transitionSpeed={400}
                  gyroscope={false}
                >
                  <div className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-700 bg-gray-800 hover:border-purple-500 hover:shadow-[0_0_12px_rgba(130,69,236,0.6)] transition-all duration-300">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
                    />
                    {/* Tooltip on hover */}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;