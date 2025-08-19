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
  vue,
  nestjs,
  nextjs,
  ror,
  python,
  postgresSQL,
  aws,
  moka,
  iifa,
  calabs,
  cm,
  fac1,
  fac2,
  fac3,
  fac4,
  fac5,
  fac6,
  km1,
  km2,
  km3,
  km4,
  km5,
  km6,
  km7,
  km8,
  hired1,
  hired2,
  fq1,
  fq2,
  fq3,
  ac1,
  ac2,
  ac3,
  ac4,
  ps1,
  ps2,
  ps3,
  ps4,
  ps5,
  tm1,
  tm2,
  tm3,
  tm4,
  tm5
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
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
  {
    title: "AI Agents Specialist",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Database Expert",
    icon: mobile,
  },
  {
    title: "Automation Engineer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Next JS",
    icon: nextjs, // Using React icon as placeholder
  },
  {
    name: "Vue JS",
    icon: vue, // Using React icon as placeholder
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs, // Using Node icon as placeholder
  },
  {
    name: "Ruby on Rails",
    icon: ror, // Using Node icon as placeholder
  },
  {
    name: "Python/Django",
    icon: python, // Using Node icon as placeholder
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresSQL, // Using MongoDB icon as placeholder
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws, // Using Docker icon as placeholder
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "IIFA TECH",
    icon: iifa,
    iconBg: "#383E56",
    date: "January 2021 - May 2023",
    points: [
      "Backend Development in Ruby on Rails and Node JS with Shopify App development.",
      "Experienced in both Rails API-based and view-based development with MVC structures.",
      "Web Designing using HTML, CSS, MUI, and Tailwind CSS with React JS and Next JS.",
      "API Integrations in React with state management using Redux and Redux-Thunk.",
      "Third party APIs Integrations in Rails including social media APIs, Shopify, and Stripe.",
      "Web Servers deployment using Puma, Nginx and Passenger on Heroku, Digital Ocean with Capistrano.",
    ],
  },
  {
    title: "Software Engineer (Team Lead)",
    company_name: "Educators Toolbox",
    icon: moka,
    iconBg: "#E6DEDD",
    date: "December 2022 - January 2024",
    points: [
      "Worked as core developer in their main app (Hired RCI) for a Canada-based education company.",
      "Built complete resume generation app with AI features from scratch using NEXT JS, NEST JS, and MSSQL.",
      "Deployed applications on AZURE using Docker containerization.",
      "Managed and reviewed code and PRs (Git) of development team members.",
      "Built roadmap for new features and provided customer support.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "CA LABS",
    icon: calabs,
    iconBg: "#383E56",
    date: "May 2023 - April 2025",
    points: [
      "Front end and Backend web development using Next.js, Node.js, and Firebase.",
      "Third party API integrations and Python script development.",
      "Code management and review of developers' Pull Requests using Git.",
      "Building roadmap for new features and customer support.",
      "Leading development team and ensuring code quality standards.",
    ],
  },
  {
    title: "AI Developer",
    company_name: "Cherrington Media",
    icon: cm,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Worked with US-based company on AI-based projects.",
      "Created AI chatbot agents for client solutions.",
      "Developed custom AI integrations for media applications.",
      "Collaborated with international teams on cutting-edge AI technologies.",
    ],
  },
  {
    title: "CTO",
    company_name: "Linnove OU",
    icon: cm,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Backend Development in Ruby on Rails and Node JS with Shopify App development.",
      "Created AI chatbot agents for client solutions.",
      "Developed custom AI integrations for media applications.",
      "Collaborated with international teams on cutting-edge AI technologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Our web application has evolved significantly under his guidance. Tayyab consistently demonstrates reliability and technical skill, frequently exceeding our expectations with his contributions. I would highly recommend him to any team and am excited about continuing our collaboration on future projects.",
    name: "Rhen Kong",
    designation: "Product Manager",
    company: "CA Labs",
    screenshot: tm1,
  },
  {
    testimonial:
      "Tayyab is firstly someone great to work with. Despite our demanding requirements and the complexity of our tasks, he kept his determination and creativity as a strength to make things happen. Apart of this mission, this is again an amazing journey to live together, and so surely this is not the end. Tayyab may fail but never give up, he is team !",
    name: "Vincent",
    designation: "CTO",
    company: "Stream Matrix",
    screenshot: tm2,
  },
  {
    testimonial:
      "I hired Muhammad to update and enhance a full-stack solution, and couldn't be happier with the results. He is reliable and his technical expertise is impressive.",
    name: "Adam S.",
    designation: "Director of IT.",
    company: "Educators Toolbox",
    screenshot: tm4,
  },
  {
    testimonial:
      "M.Tayyab had excellent communication from start to finish. Solved the problem I was having in a quick timeframe and also worked closely with myself to explore other avenues and was extremely knowledgeable. Highly recommended.",
    name: "Kingston",
    designation: "Pesonal",
    company: "US Based",
    screenshot: tm5,
  },
  {
    testimonial:
      "Came through for me in a pinch and got the job done with urgency. I really appreciate his willingness to take initiative and delivered a great product and exceptional professionalism and expertise in Python.",
    name: "Logans",
    designation: "CTO",
    company: "US Based",
    screenshot: tm3,
  },
];

const projects = [
  {
    name: "HIREDRCI",
    description:
      "An AI-powered platform for resume and cover letter creation. Users sign up, input their details, and generate tailored resumes, cover letters, and interview questions based on target jobs. Includes role-based dashboards for Admin, Sponsors, and Sponsor Staff.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "mssql",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
    ],
    image: hired1,
    gallery: [hired1, hired2], // Multiple images for gallery
    source_code_link: "https://hiredrci.com",
  },
  {
    name: "Komcrest",
    description:
      "A B2B platform where company admins can sign up, purchase a plan, and upload documents, knowledge bases, or target website links for data scraping. The backend processes and vectorizes this data using trained LLM models to generate customized questionnaires for each company using AI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "llm",
        color: "pink-text-gradient",
      },
      {
        name: "vectorization",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: km3,
    gallery: [km2, km3, km4, km5, km6], // Multiple images for gallery
    source_code_link: "https://komcrest.com",
  },
  {
    name: "FreeAdCopy",
    description:
      "AI-based web app that generates ads through AI depending on user's given prompts using different templates. Provides different modules of AI to generate Ads, Learning modules for users, Compliance check and AI-based image generation features.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "image-generation",
        color: "green-text-gradient",
      },
      {
        name: "templates",
        color: "pink-text-gradient",
      },
      {
        name: "compliance",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: fac2,
    gallery: [fac1, fac2, fac3, fac4, fac5, fac6],
    source_code_link: "https://freeadcopy.com",
  },
  {
    name: "Frequest AI",
    description:
      "Frequest AI is a platform that lets you create AI agents for your business. Simply create an account, add your details once, and we’ll store them securely to generate profiles on 50+ job platforms—making it easy to apply anywhere with one click.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "NoVnc",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
      {
        name: "Browser use agent",
        color: "blue-text-gradient",
      },
    ],
    image: fq1,
    gallery: [fq1, fq2, fq3], // Multiple images for gallery
    source_code_link: "https://github.com/TayyabArif",
  },
  {
    name: "Ask Chirp",
    description:
      "Ask Chirp connects Canadian schools and colleges with the Educators Toolbox team. Schools can sign up, add their details and website URL, and Ask Chirp will set up their account, provide a chatbot integration code, and enable an AI-powered chatbot on their site to answer student queries.",
    tags: [
      {
        name: "finction apps",
        color: "blue-text-gradient",
      },
      {
        name: "nextts",
        color: "green-text-gradient",
      },
      {
        name: "azure",
        color: "pink-text-gradient",
      },
      {
        name: "github actions",
        color: "blue-text-gradient",
      },
      {
        name: "azure",
        color: "green-text-gradient",
      },
    ],
    image: ac1,
    gallery: [ac1, ac2, ac3, ac4],
    source_code_link: "https://www.askchirp.com",
  },
  {
    name: "Prosafe CMS",
    description:
      "Prosafe is a First Aid course–focused college management system. It’s a web application that helps colleges manage students, courses, and related data, with a built-in CMS for handling frontend content and design. I provide support for their two main college websites: LIT and Prosafe.",
    tags: [
      {
        name: "rails",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "digital ocean",
        color: "red-text-gradient",
      },
    ],
    image: ps1,
    gallery: [ps1, ps2, ps3, ps4, ps5],
    source_code_link: "https://prosafe.techahead.ca",
  },
];

export { services, technologies, experiences, testimonials, projects };
