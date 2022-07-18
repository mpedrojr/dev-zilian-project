
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJsSquare, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import TailwindLogo from '../images/tailwind-logo-white.svg'

export const feature = [
	{
		name: 'React',
		description:
			"The best JavaScript framework/library out there. It's a lot of fun to use.",
		icon: <FontAwesomeIcon icon={faReact} />,
	},
	{
		name: 'JavaScript',
		description: 'The best programming language for web development.',
		icon: <FontAwesomeIcon icon={faJsSquare} />,
	},
	{
		name: 'HTML',
		description: 'The best markup language for web development.',
		icon: <FontAwesomeIcon icon={faHtml5} />,
	},
	{
		name: 'CSS',
		description: 'The best styling language for web development.',
		icon: <FontAwesomeIcon icon={faCss3} />,
	},
	{
		name: 'Tailwind CSS',
		description: 'The best CSS Framework for Web Development.',
		icon: <TailwindLogo />,
	},
	{
		name: 'Headless CMS',
		description:
			'Best way to build user friendly content management.',
		icon: <FontAwesomeIcon icon={faFileCode} />,
	},
];
