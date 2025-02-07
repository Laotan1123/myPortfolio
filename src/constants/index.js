import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Photographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "vite",
    icon: figma,
  },
  {
    name: "MySQL",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Huawei Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - October 2023",
    points: [
      "Gained hands-on experience in server maintenance and setup within Huawei's software department, ensuring optimal configuration conditions for server operations.",
      "Developed skills in cybersecurity, data center management, and Linux, enhancing overall security and efficiency for Huawei’s infrastructure.",
      "Applied database management and SQL query optimization skills, contributing to effective data handling and streamlined system performance.",
      "Acquired telecommunications insights and gained experience in infrastructure setup, supporting Huawei’s technical operations and deployment.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Currently Working as a Freelancer",
    points: [
      "Developed a custom architecture portfolio website using Next.js, showcasing design projects with optimized image handling and smooth navigation for enhanced user experience.",
      "Built a church website using Next.js, integrating interactive features and responsive design to support community engagement and information sharing.",
      "Created an e-commerce website with Next.js, implementing user-friendly product browsing, secure payment options, and an efficient checkout process to boost customer satisfaction.",
    ],
  },
];

const testimonials = [
  /*{
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects = [
  {
    name: "E-commerce Website",
    description:
      "A web-based platform that enables users to buy, sell, repair, and trade in smartphones, offering a seamless and efficient solution for mobile device needs. The platform provides a user-friendly interface for browsing products, booking repair services, and facilitating secure trade-ins, enhancing convenience for both buyers and sellers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Church Website",
    description:
      "A web-based platform that enables church members and visitors to access sermons, and engage with the community, offering a seamless and efficient solution for spiritual and administrative needs. The platform provides a user-friendly interface for exploring church resources, connecting with leaders, and supporting the ministry, enhancing accessibility for all users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  /*{
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },*/
];

export { services, technologies, experiences, testimonials, projects };
