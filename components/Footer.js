import Link from "next/link";
import Logo from '../images/logodev-white.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faFacebook,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="p-4 bg-primary sm:p-6">
			<div className="md:flex md:justify-between">
				<div className="-ml-8 md:ml-2 mb-6 md:mb-0">
					<Link href="/" className="flex items-start">
						<button>
							<Logo />
						</button>
					</Link>
				</div>
				<div className="grid grid-cols-2 gap-8 sm:gap-6 xl:gap-6 lg:space-x-6 xl:space-x-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
							Resources
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-4">
								<Link href="" className="hover:underline">
								<a className="hover:underline">Technologies</a>	
								</Link>
							</li>
							<li>
								<Link href="/blog" className="hover:underline">
									<a className="hover:underline">Blog</a>
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
							Follow us
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-4">
								<Link href="" className="hover:underline ">
									<a className="hover:underline">Github</a>
								</Link>
							</li>
							<li>
								<Link href="" className="hover:underline">
									<a className="hover:underline">Discord</a>
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
							Legal
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-4">
								<Link href="/" className="hover:underline">
									<a className="hover:underline">Home</a>
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#" >
									<a className="hover:underline">Technologies</a>
								</Link>
							</li>
							<li className="mb-4">
								<Link href="/" className="hover:underline">
									<a className="hover:underline">About</a>
								</Link>
							</li>
							<li className="mb-4">
								<Link href="/" className="hover:underline">
									<a className="hover:underline">Contact</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<div className="sm:flex sm:items-center sm:justify-between">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2022{" "}
					<span>
						devzilian™
					</span>
					. All Rights Reserved.
				</span>
				<div className="flex md:mr-12 mt-4 space-x-6 sm:justify-center sm:mt-0">
					<Link
						href="#"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
						<button className="text-zinc-400 text-2xl">
							<FontAwesomeIcon icon={faDiscord} />
						</button>
					</Link>
					<Link
						href="#"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
						<button className="text-zinc-400 text-2xl">
							<FontAwesomeIcon icon={faFacebook} />
						</button>
					</Link>
					<Link
						href="#"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
						<button className="text-zinc-400 text-2xl">
							<FontAwesomeIcon icon={faInstagram} />
						</button>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
