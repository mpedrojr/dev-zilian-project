import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiCss3, SiTailwindcss, SiMongodb, SiPrisma } from 'react-icons/si';
import { SiJavascript, SiTypescript, SiGraphql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import styles from '../styles/About.module.css';

export const frontHome = [
  {
    icon: <FaReact className={styles.react} />,
    title: 'React',
    description:
      'React is the most popular javascript library/Framework for Web Development.',
  },
  {
    icon: <TbBrandNextjs className={styles.nextjs} />,
    title: 'Next Js',
    description:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
  },
  {
    icon: <SiJavascript className={styles.javascript} />,
    title: 'JavaScript',
    description:
      "JavaScript is an object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.",
  },
  {
    icon: <SiTypescript className={styles.typescript} />,
    title: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
  },
  {
    icon: <SiCss3 className={styles.css} />,
    title: 'CSS',
    description:
      'CSS (Cascading Style Sheets) is used to style and layout web pages.',
  },
  {
    icon: <SiTailwindcss className={styles.tailwind} />,
    title: 'Tailwind CSS',
    description:
      'Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.',
  },
];

export const backHome = [
  {
    icon: <FaNodeJs className={styles.node} />,
    title: 'Node Js',
    description:
      'Node. js (Node) is an open source development platform for executing JavaScript code server-side.',
  },
  {
    icon: <SiMongodb className={styles.mongo} />,
    title: 'Mongo DB',
    description: 'MongoDB is an open source NoSQL database management program.',
  },
  {
    icon: <SiPrisma />,
    title: 'Prisma',
    description:
      'Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.',
  },
  {
    icon: <SiGraphql className={styles.graphql} />,
    title: 'GraphQL',
    description:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. ',
  },
];
