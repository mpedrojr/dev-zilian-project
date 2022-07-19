import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3,
  faNode,
} from '@fortawesome/free-brands-svg-icons';
import Tailwind from '../images/wind-solid.svg';
import Mongo from '../images/mongodb.svg';
import styles from '../styles/About.module.css';

export const front = [
  {
    icon: <FontAwesomeIcon icon={faReact} className={styles.react} />,
    title: 'React',
    description:
      'React is the most popular library/Framework for Web Development.',
  },
  {
    icon: <FontAwesomeIcon icon={faReact} className={styles.reactnative} />,
    title: 'React Native',
    description:
      'React Native is becoming popular mobile phone applications since you can use the same language for IOS and Android.',
  },
  {
    icon: <FontAwesomeIcon icon={faJsSquare} className={styles.javascript} />,
    title: 'JavaScript',
    description:
      "JavaScript is an object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.",
  },
  {
    icon: <FontAwesomeIcon icon={faHtml5} className={styles.html} />,
    title: 'HTML',
    description:
      'HyperText Markup Language (HTML) is the basic scripting language used by web browsers to render pages on the world wide web.',
  },
  {
    icon: <FontAwesomeIcon icon={faCss3} className={styles.css} />,
    title: 'CSS',
    description:
      'CSS (Cascading Style Sheets) is used to style and layout web pages.',
  },
  {
    icon: <Tailwind />,
    title: 'CSS Frameworks',
    description:
      'Bootstrap and all other CSS frameworks like Tailwind CSS and Material UI.',
  },
];

export const back = [
  {
    icon: <FontAwesomeIcon icon={faNode} />,
    title: 'Node Js',
    description:
      'Node. js (Node) is an open source development platform for executing JavaScript code server-side.',
  },
  {
    icon: <Mongo />,
    title: 'Mongo DB',
    description: 'MongoDB is an open source NoSQL database management program.',
  },
  {
    icon: <FontAwesomeIcon icon={faFileCode} />,
    title: 'Mongoose',
    description:
      'Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js.',
  },
];
