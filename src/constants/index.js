import web from "../assets/web.png";
import backend from "../assets/backend.png";
import mobile from "../assets/mobile.png";
import creator from "../assets/creator.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export const projects = [
  {
    image: project1,
    live: "https://www.viabells.com/portfolio/job3",
    source: "https://www.viabells.com/portfolio/job3",
    title: "Job Portal",
    description:
      "Robust platform with AI-driven career support, streamlined job search and application processes, interview organization, and profile management tools.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    image: project2,
    live: "https://play.google.com/store/apps/details?id=com.quibit.android&hl=en&gl=US",
    source:
      "https://play.google.com/store/apps/details?id=com.quibit.android&hl=en&gl=US",
    title:
      "Engage with friends and new connections through personalized news feeds",
    description:
      "Social platform where connections, conversations, and opportunities seamlessly intertwine, Search Engine: Easily find content, users, and more with our powerful search functionality, Ask Q&A Feature: Pose questions, seek answers, and engage with the community, similar to Stack Overflow, Service Directory: Discover a wide range of services and providers to meet your needs",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "nextJs",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Portfolio Landing Page",
    image: project3,
    live: "https://soesandarwin2201.github.io/portfolio-website-soesandarwin2201.github.io/",
    source: "https://github.com/soesandarwin2201/Portfolio_website",
    name: "Portfolio Landing Page",
    description:
      "A comprehensive landing page for developers to showcase their skills that allows users to view projects, learn about the author, explore their experience, and contact the author for hiring.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "group project",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
  },
];
export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Quibit Co., Ltd",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developedinnovative features like a Search Engine, yielding a 20% increase in investment and asignificant boost in daily 1000+ active users .",
      "Managedmultipleprojects concurrently with React Native and nest.js, ensuring efficient delivery of robust solutions, resulting in a 20% increase in user engagement and retention",
    ],
  },
  {
    title: " Front-EndDeveloper(Freelance)",
    company_name: "People Ventures Co., Ltd (Korean)",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "nnovatively implemented new app features, achieving a remarkable 50% surge in reservation and task completion rates, while optimizing app functionality for seamless user experience",
      "Collaborated effectively with Korean team members to leverage diverse perspectives and achieve superior results in project development and execution, fostering a culture of cross-cultural cooperation and excellence",
    ],
  },
  {
    title: "Javascript FullStack Developer",
    company_name: " Viabells Singapore",
    icon: creator,
    iconBg: "#E6DEDD",
    date: " Sep 2023 – Dec2023",
    points: [
      "Conceptualized, developed, deployed, and published An Advanced AI driven Job-searching Platform from scratch using Next.js, Mui , Node.js and Aws.",
      "Generatedaprofit of over $2000 even in the first month of launching",
      "Increaseddaily active users of the site by around 1k.",
    ],
  },
  {
    title: "Student Mentor",
    company_name: "Microverse",
    icon: backend,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      "Assisted 10+ junior developers weekly to ensure their mastery of web development, agile methodologies, and professional work behavior",
      "Assisted junior developers with debugging, educating them in coding best practices and providing them with technical support",
      "Built group project with junior developers to help them improve their skills",
      "Giving time to listen to their stories and experiences to give emotional support",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Guide with Mahuyar",
    icon: mobile,
    iconBg: "#383E56",
    date: "March 2020 - August 2020",
    points: [
      "Work on a scholarship Program with a big team of youths who belong to different culture and backgrounds",
      "Worked as the facilitator for the Myanmar youth people in the 2019 Youth developing camp",
    ],
  },
];

export const techs = [
  "HTML5",
  "CSS3",
  "React",
  "Rails",
  "Ruby",
  "JavaScript",
  "SQL",
  "PostgreSQL",
  "jQuery",
  "Next.js",
  "UI",
  "UX",
  "Graphic",
  "Content",
  "Remote",
  "GitHub",
  "Git",
  "React Native",
  "Nest.js",
  "AWS",
  "Flutter",
];
