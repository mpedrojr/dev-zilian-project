import { FaReact, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { SiCss3, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { BsCodeSquare } from 'react-icons/bs';
import { SiJavascript } from 'react-icons/si';

import styles from '../styles/About.module.css';

export const front = [
  {
    icon: <FaReact className={styles.react} />,
    title: 'React',
    description:
      'React is the most popular library/Framework for Web Development.',
  },
  {
    icon: <FaReact className={styles.reactnative} />,
    title: 'React Native',
    description:
      'React Native is becoming popular mobile phone applications since you can use the same language for IOS and Android.',
  },
  {
    icon: <SiJavascript className={styles.javascript} />,
    title: 'JavaScript',
    description:
      'JavaScript is an object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it\'s used in many non-browser environments as well.',
  },
  {
    icon: <FaHtml5 className={styles.html} />,
    title: 'HTML',
    description:
      'HyperText Markup Language (HTML) is the basic scripting language used by web browsers to render pages on the world wide web.',
  },
  {
    icon: <SiCss3 className={styles.css} />,
    title: 'CSS',
    description:
      'CSS (Cascading Style Sheets) is used to style and layout web pages.',
  },
  {
    icon: <SiTailwindcss className={styles.tailwind} />,
    title: 'CSS Frameworks',
    description:
      'Bootstrap and all other CSS frameworks like Tailwind CSS and Material UI.',
  },
];

export const back = [
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
    icon: <BsCodeSquare />,
    title: 'Mongoose',
    description:
      'Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js.',
  },
];
