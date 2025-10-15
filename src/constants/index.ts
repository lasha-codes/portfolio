import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mobile,
  nodejs,
  mongodb,
  git,
  docker,
  express,
  nextjs_black,
  prisma,
  movix,
  tapinfy,
  safekit,
  movixPreview,
  tapinfyPreview,
  safekitPreview,
  redis,
  stripe,
} from '../../public/assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Next.js Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  { name: 'Next JS', icon: nextjs_black },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express JS',
    icon: express,
  },
  {
    name: 'prisma',
    icon: prisma,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },

  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'stripe',
    icon: stripe,
  },
]

const experiences = [
  {
    title: 'Next.js Developer',
    company_name: 'Safekit',
    icon: safekit,
    iconBg: 'white',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Built responsive, high-performance websites using Next.js and TypeScript.',
      'Integrated secure authentication and authorization features using JWT and middleware.',
      'Worked closely with the backend team to develop and optimize RESTful APIs.',
      'Improved build times and SEO performance through advanced Next.js optimization techniques.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Movix.ge',
    icon: movix,
    iconBg: '#383E56',
    date: 'March 2022 - April 2023',
    points: [
      'Developed a dynamic movie platform using React.js and Node.js.',
      'Optimized video streaming performance and reduced API response time by 30%.',
      'Collaborated with UI/UX designers to improve the site’s usability and accessibility.',
      'Maintained database systems using MongoDB and implemented efficient data caching strategies.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Tapinfy',
    icon: tapinfy,
    iconBg: '#050816',
    date: 'Jan 2024 - July 2024',
    points: [
      'Developed SaaS dashboards and real-time analytics tools using Next.js and Tailwind CSS.',
      'Implemented CI/CD pipelines with GitHub Actions for seamless deployments.',
      'Integrated third-party APIs and payment gateways to extend product functionality.',
      'Led performance audits, improving page load speed and Core Web Vitals scores.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Movix.ge',
    link: 'https://movix.ge',
    description:
      'Web-based platform that allows users to browse, stream, and manage movies and TV shows from various providers, providing a convenient and efficient solution for entertainment needs.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
        icon: typescript,
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
        icon: reactjs,
      },
      {
        name: 'express',
        color: 'green-text-gradient',
        icon: express,
      },
      {
        name: 'redis',
        color: 'pink-text-gradient',
        icon: redis,
      },
      {
        name: 'prisma',
        color: 'green-text-gradient',
        icon: prisma,
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
        icon: tailwind,
      },
    ],
    image: movixPreview,
  },
  {
    name: 'Tapinfy',
    link: 'https://tapinfy.io',
    description:
      'Web application that enables users to manage invoices, track vehicle sales, and organize dealership operations efficiently for all types of automotive businesses.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
        icon: typescript,
      },
      {
        name: 'next.js',
        color: 'blue-text-gradient',
        icon: nextjs_black,
      },
      {
        name: 'express',
        color: 'green-text-gradient',
        icon: express,
      },
      { name: 'redis', color: 'pink-text-gradient', icon: redis },
      { name: 'prisma', color: 'blue-text-gradient', icon: prisma },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
        icon: tailwind,
      },
      {
        name: 'stripe',
        color: 'pink-text-gradient',
        icon: stripe,
      },
    ],
    image: tapinfyPreview,
  },
  {
    name: 'Safekit',
    link: 'https://safekit.nl',
    description:
      'Web application that enables users to browse medical supplies, purchase bandages and first-aid items, and manage orders conveniently for all health and safety needs.',
    tags: [
      {
        name: 'typescript',
        color: 'green-text-gradient',
        icon: typescript,
      },
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
        icon: nextjs_black,
      },
      {
        name: 'redis',
        color: 'green-text-gradient',
        icon: redis,
      },
      {
        name: 'prisma',
        color: 'blue-text-gradient',
        icon: prisma,
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
        icon: tailwind,
      },
      {
        name: 'stripe',
        color: 'pink-text-gradient',
        icon: stripe,
      },
    ],
    image: safekitPreview,
  },
]

export { services, technologies, experiences, testimonials, projects }
