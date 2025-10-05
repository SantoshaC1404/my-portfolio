// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import postmanLogo from "./assets/tech_logo/postman.png";

// Experience Section Logo's
import belLogo from "./assets/company_logo/bel_logo.png";
// import agcLogo from "./assets/company_logo/agc_logo.png";
// import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import ubdtLogo from "./assets/education_logo/ubdt_logo.jpg";
import jainLogo from "./assets/education_logo/jain_logo.jpeg";

// Project Section Logo's
import chatImage from "./assets/work_logo/chatapp_reference.jpg";
import scmLogo from "./assets/work_logo/scm_logo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Python", logo: pythonLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
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
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "TypeScript",
      "Node JS",
      "PostgreSQL",
      "Python",
    ],
  },
  /*
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
  */
];

export const education = [
  {
    id: 0,
    img: ubdtLogo,
    school: "UBDTCE, Davanagere",
    date: "Aujust 2019 - May 2023",
    grade: "7.5 CGPA",
    desc: "I have completed my Bachelor's degree (B.E) in Computer Science from UBDTCE, Davanagere. During my time at UBDT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. My experience at UBDTCE has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Engineering - CSE",
  },
  {
    id: 1,
    img: jainLogo,
    school: "Jain P U College, Moodbidri",
    date: "Apr 2017 - March 2019",
    grade: "67%",
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
    github: "https://github.com/SantoshaC1404/chat-app",
    webapp: "https://santosh-chat-app.netlify.app/",
  },

  {
    id: 1,
    title: "Smart Contact Manager",
    description:
      "A web-based contact management application that allows users to store, manage, and organize their contacts efficiently. It features user authentication, CRUD operations for contacts, and a responsive design for seamless interaction across devices. Built with React.js for the frontend and Spring Boot with MySQL for the backend.",
    image: scmLogo,
    tags: ["React JS", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "",
    webapp: "",
  },
];
