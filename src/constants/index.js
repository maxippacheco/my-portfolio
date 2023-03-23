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
  nextjs
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Self-made Student",
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
    name: "Redux Toolkit",
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "HTML, CSS, JS",
    company_name: "My begginings",
    icon: html,
    iconBg: "#383E56",
    date: "March 2020 - September 2020",
    points: [
      "Start developing basic websites with HTML and CSS.",
      "Start researching for new sources.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Trying to give my websites interactivity with Javascript.",
    ],
  },
  {
    title: "MERN Stack",
    company_name: "Front-end specialization",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - September 2021",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Learning how to connect my web applications with servers and creating fullstack applications.",
      "Implementing responsive design and learning design patterns to improve my skills to another level.",
      "Trying to help others like me in discord communities and participating actively in the community.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Shopify",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing e-commerce apps and different types of navigations on my personal projects.",
      "Implementing different packages to have more functionalities.",
      "Improving my React.js knowledge as well.",
    ],
  },
  {
    title: "Next.js SSR",
    company_name: "Meta",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Using differents rendering methods in order to get the best performance in the pages.",
      "Applying SEO and metadata to put the page on the top of the browsers.",
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
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Teslo Shop",
    description:
      "Web application that enables users to buy clothes using different forms to provide the content, with user authentication and payment methods.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "React Maps",
    description:
      "A ReactJS app that allows the user to see maps and directions between two points, using Mapbox API and Context API to develop it in majority.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "context-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/maxippacheco/react-maps",
  },
  {
    name: "NPM Package",
    description:
      "A Reactjs NPM package that allows the user to create product cards with multiple options, and implementing design patterns such as state initializer and function child.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "design-patterns",
        color: "pink-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/maxippacheco/mp-product-card",
  },
];

export { services, technologies, experiences, testimonials, projects };
