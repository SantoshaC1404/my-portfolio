import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import angularLogo from "./assets/tech_logo/angular.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import fastAPILogoLogo from "./assets/tech_logo/FastAPI.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import postmanLogo from "./assets/tech_logo/Postman.png";
import dockerLogo from "./assets/tech_logo/docker.png";

// Experience Section Logo's
import belLogo from "./assets/company_logo/bel_logo.png";

// Education Section Logo's
import ubdtLogo from "./assets/education_logo/ubdt_logo.jpg";
import jainLogo from "./assets/education_logo/jain_logo.jpeg";

// Project Section Logo's
import chatImage from "./assets/work_logo/chatapp_reference.jpg";
import scmLogo from "./assets/work_logo/scm_logo.png";
import authAppImage from "./assets/work_logo/auth_app.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Angular", logo: angularLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Springboot", logo: springbootLogo },
      { name: "Python", logo: pythonLogo },
      { name: "FastAPI", logo: fastAPILogoLogo },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Docker", logo: dockerLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: belLogo,
    role: "Trainee Engineer",
    company: "Bharat Electronics Limited",
    date: "July 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the Python, handling both frontend and backend development. Implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "Python",
      "FastAPI",
      "Angular",
      "TypeScript",
      "Node JS",
      "PostgreSQL",
      "Git",
      "Postman",
    ],
  },

];

export const education = [
  {
    id: 0,
    img: ubdtLogo,
    school: "UBDTCE, Davanagere",
    date: "Aujust 2019 - May 2023",
    grade: "7.5 CGPA",
    desc: "I have completed my Bachelor's degree (B.E) in Computer Science from UBDTCE, Davanagere. During my time at UBDT, I gained a strong foundation in programming, software development, and computer science principles. My experience at UBDTCE has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Engineering - CSE",
  },
  {
    id: 1,
    img: jainLogo,
    school: "Jain P U College, Moodbidri",
    date: "Apr 2017 - March 2019",
    grade: "77%",
    desc: "I completed my class 12 education from Jain P U College, Moodbidri, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
    degree: "XII - PCM with Biology",
  },
];

export const projects = [

  {
    id: 0,
    title: "Real Time Chat Application",
    description:
      "A real-time chat application that allows users to communicate instantly. It features user authentication, multiple chat rooms, and a responsive design for seamless interaction across devices. Built with React.js for the frontend and Spring Boot with Socket.io for real-time communication on the backend.",
    image: chatImage,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Spring Boot"],
    github: "https://github.com/SantoshaC1404/chat_app",
  },

  {
    id: 1,
    title: "Auth App",
    description:
      "A full-stack authentication application featuring secure user registration and login with JWT-based authentication, password hashing, and protected routes. Built with React.js on the frontend and a Spring Boot backend with MySQL for user data storage.",
    image: authAppImage,
    tags: ["Spring Boot", "React JS", "MYSQL", "JWT",],
    github: "https://github.com/SantoshaC1404/auth-app/tree/main",
    webapp: "",
  },

  {
    id: 2,
    title: "Smart Contact Manager",
    description:
      "A web-based contact management application that allows users to store, manage, and organize their contacts efficiently. It features user authentication, CRUD operations for contacts, and a responsive design for seamless interaction across devices. Built with React.js for the frontend and Spring Boot with MySQL for the backend.",
    image: scmLogo,
    tags: ["React JS", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/SantoshaC1404/scm/tree/main",
    webapp: "",
  },
];