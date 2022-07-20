import { FaReact, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiCss3, SiTailwindcss } from 'react-icons/si';
import { BsCodeSquare } from 'react-icons/bs';


export const feature = [
  {
    name: 'React',
    description:
      'The best JavaScript framework/library out there. It\'s a lot of fun to use.',
    icon: <FaReact />,
  },
  {
    name: 'JavaScript',
    description: 'The best programming language for web development.',
    icon: <IoLogoJavascript />,
  },
  {
    name: 'HTML',
    description: 'The best markup language for web development.',
    icon: <FaHtml5 />,
  },
  {
    name: 'CSS',
    description: 'The best styling language for web development.',
    icon: <SiCss3 />,
  },
  {
    name: 'Tailwind CSS',
    description: 'The best CSS Framework for Web Development.',
    icon: <SiTailwindcss />,
  },
  {
    name: 'Headless CMS',
    description: 'Best way to build user friendly content management.',
    icon: <BsCodeSquare />,
  },
];
