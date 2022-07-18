import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../images/logodev-white.svg';
//! Auth configuration !//
// import { UserContext } from "../contexts/user.context";
// import { signOutUser } from "../utils/firebase.utils";
//! Auth configuration !//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	//! Auth configuration !//
	// const { currentUser, setCurrentUser } = useContext(UserContext);
	// // console.log(currentUser);

	// const signOutHandler = async () => {
	// 	await signOutUser();
	// 	setCurrentUser(null);
	// };
	//! Auth configuration !//

	const [nav, setNav] = useState(false);
	const handleCLick = () => setNav(!nav);

	const handleClick = () => {
		setNav(false);
	};

	function handleResize() {
		if (window.innerWidth > 768) {
			setNav(false);
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<nav className='w-xl mx-auto p-3 bg-primary'>
			<div className='flex items-center justify-between ml-4 md:ml-6 md:mr-6'>
				<div className='md:hidden text-white' onClick={handleCLick}>
					{!nav ? (
						<FontAwesomeIcon icon={faBars} />
					) : (
						<FontAwesomeIcon icon={faX} />
					)}
				</div>
				<div className='' onClick={() => setNav(false)}>
					<button>
						<Link href='/'>
							<Logo />
						</Link>
					</button>
				</div>
				<div className='hidden md:mr-28 lg:mr-40 space-x-10 md:flex text-white'>
					<Link href='/'>
						<a>HOME</a>
					</Link>
					{/* <Link href='#'>
						<a>PRODUCTS</a>
					</Link>
					<Link href='#'>
						<a>ABOUT</a>
					</Link>
					<Link href='#'>
						<a>CONTACT</a>
					</Link> */}
					<Link href='/blog'>
						<a>BLOG</a>
					</Link>
				</div>
				{/* {currentUser ? (
					<button
						type="button"
						onClick={signOutHandler}
						className=" p-3 px-6 pt-2 text-white bg-amber-800 rounded-full baseline md:block">
						Sign out
					</button>
				) : (
					<Link onClick={() => setNav(false)} href="/signin">
						<button className="p-3 px-6 pt-2 text-white bg-amber-800 rounded-full baseline md:block">
							Login
						</button>
					</Link>
				)} */}
			</div>
			<div className='md:hidden'>
				<div
					className={
						!nav
							? 'hidden'
							: 'absolute z-40 flex flex-col items-center py-8 mt-4 pb-20 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-0 right-0 drop-shadow-md'
					}>
					<div
						onClick={handleClick}
						className='border-b-2 border-b-primary leading-10 w-80 text-center'>
						<Link href='/'>
							<a>HOME</a>
						</Link>
					</div>
					{/* <div
						onClick={handleClick}
						className='border-b-2 border-b-primary leading-10 w-80 text-center	'>
						<Link href='/'>
							<a>PRODUCTS</a>
						</Link>
					</div>
					<div
						onClick={handleClick}
						className='border-b-2 border-b-primary leading-10 w-80 text-center'>
						<Link href='/'>
							<a>ABOUT</a>
						</Link>
					</div>
					<div
						onClick={handleClick}
						className='border-b-2 border-b-primary leading-10 w-80 text-center'>
						<Link href='/'>
							<a>CONTACT</a>
						</Link>
					</div> */}
					<div
						onClick={handleClick}
						className='border-b-2 border-b-primary leading-10 w-80 text-center'>
						<Link href='/blog'>
							<a>BLOG</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
