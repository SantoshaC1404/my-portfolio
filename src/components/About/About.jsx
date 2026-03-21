import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile_logo/Profile_image.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[5vw] md:px-[4vw] lg:px-[12vw] font-sans mt-1 md:mt-6 lg:mt-1"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-16">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Hi, I'm <span className="text-purple-500">Santosha C</span>
          </h1>

          {/* Typewriter */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 leading-tight">
            <span className="text-gray-300">I'm a </span>
            <span className="text-purple-400">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Java Developer",
                  "Backend Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-1 bg-purple-500 mb-5 mx-auto md:mx-0 rounded-full"></div>

          {/* About Paragraphs */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-3">
            I'm a passionate Fullstack Developer with{" "}
            <span className="text-white font-semibold">
              1.6+ years of experience
            </span>{" "}
            building scalable, performant web applications from the ground up.
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-7">
            Currently working as a{" "}
            <span className="text-white font-semibold">
              Trainee Engineer at Bharat Electronics Limited (BEL)
            </span>
          </p>

          {/* Stats Row */}
          <div className="flex justify-center md:justify-start gap-8 mb-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">1.6+</p>
              <p className="text-gray-500 text-xs mt-1">Years Exp.</p>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">3+</p>
              <p className="text-gray-500 text-xs mt-1">Projects</p>
            </div>
            <div className="w-px bg-gray-700"></div>
            {/* <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">10+</p>
              <p className="text-gray-500 text-xs mt-1">Technologies</p>
            </div> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1tiy124-q86R3XlGAjKvGlUfBLqlP1S31/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-base font-bold transition duration-300 transform hover:scale-105 text-center"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-block border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white py-3 px-8 rounded-full text-base font-bold transition duration-300 transform hover:scale-105 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={true}
            className="relative flex items-center justify-center"
          >
            {/* Outer glow */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "-20%",
                background:
                  "radial-gradient(circle, rgba(130,69,236,0.3) 0%, transparent 70%)",
                zIndex: 0,
              }}
            ></div>

            {/* Profile image */}
            <div
              className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full border-4 border-purple-600 overflow-hidden"
              style={{
                boxShadow:
                  "0 0 25px rgba(130,69,236,0.55), 0 0 60px rgba(130,69,236,0.2)",
              }}
            >
              <img
                src={profileImage}
                alt="Santosha C"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
