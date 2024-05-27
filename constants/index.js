import {
    mobile,
    software,
    frontend,
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
    python,
    nextjs,
    nextJs,
    django,
    express,
    imagnify,
    promtopia,
    assessAI,
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
      title: "Software Engineer",
      icon: software,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "NextJS",
      icon: nextJs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "ExpressJS",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "ZySoftec",
      icon: '/assets/company/zysoftec.webp',
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications on NextJs",
        "Developing React components and pages for frontend",
        "Developing APIs and services on NodeJs",
        "Developing and maintaining databases on MongoDB and Firebase",
        "Integrating front-end and back-end services with react-query and axios",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Imagnify",
      description:
        "An AI image SaaS platform excelling in image processing with secure payment integration, advanced search, and multiple AI features: image restoration, recoloring, object removal, generative filling, and background removal for enhanced user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
      ],
      image: imagnify,
      source_code_link: "https://github.com/umerahmed4121/imaginify",
      demo_link: "https://imaginify-uas.vercel.app",
    },
    {
      name: "Promtopia",
      description:
        "Promtopia is a Next.js application showcasing Next.js features with a robust CRUD AI prompt sharing system. It utilizes a MongoDB database for data management and implements NextAuth for secure authentication, enhancing user interaction and security.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
      ],
      image: promtopia,
      source_code_link: "https://github.com/umerahmed4121/promtopia",
      demo_link: "https://promtopia-uas.vercel.app"
    },
    {
      name: "AssessAI",
      description:
        "AssessAI is an automated answer script assessment system designed to enhance efficiency, accuracy, and scalability in educational assessments using NLP and machine learning. It provides timely feedback and actionable insights into student performance.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
      ],
      image: assessAI,
      source_code_link: "https://github.com/umerahmed4121/AssessAI",
      demo_link: "https://assessai.vercel.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };