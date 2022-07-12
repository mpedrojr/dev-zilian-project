import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../../services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faX,
	faToggleOff,
	faToggleOn,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => {
			setCategories(newCategories);
		});
	}, []);

	const [nav, setNav] = useState(false);
	const handleCLick = () => setNav(!nav);
	const [menu, setMenu] = useState(false);
	const handleMenu = () => setMenu(!menu);

	const closeMenu = () => {
		setMenu(false);
		setNav(false);
	}

	return (
		<nav className='px-6 py-3 mt-2 bg-amber-700  rounded-lg'>
			<div className='container flex flex-wrap items-center justify-between mx-auto'>
				<Link href='/blog' className='flex items-center'>
					<button type='button' className='self-center justify-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Blog
					</button>
				</Link>
				<button
					onClick={handleCLick}
					data-collapse-toggle='mobile-menu'
					type='button'
					className='inline-flex items-center justify-center text-white rounded-lg md:hidden'
					aria-controls='mobile-menu-2'
					aria-expanded='false'>
					<span className='sr-only'>Open main menu</span>

					{!nav ? (
						<FontAwesomeIcon icon={faBars} />
					) : (
						<FontAwesomeIcon icon={faX} />
					)}
				</button>
				<div className={!nav ? 'hidden' : ' w-full  md:w-auto'}>
					<ul className='flex flex-col md:hidden lg:mr-24 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
						<li>
							<button
								onClick={handleMenu}
								id='dropdownNavbarLink'
								data-dropdown-toggle='dropdownNavbar'
								className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white border-b border-white  md:border-0 md:p-0 md:w-auto'>
								Categories
								<span>
									{!menu ? (
										<FontAwesomeIcon className='text-3xl' icon={faToggleOff} />
									) : (
										<FontAwesomeIcon className='text-3xl' icon={faToggleOn} />
									)}
								</span>
							</button>
							<div
								id='dropdownNavbar'
								className={
									!menu
										? 'hidden'
										: 'z-10 lg:absolute bg-amber-700 divide-y rounded   '
								}>
								<ul
									className='py-2 text-sm text-gray-700 dark:text-gray-400'
									aria-labelledby='dropdownLargeButton'>
									<li onClick={closeMenu}>
										{categories.map((category, index) => (
											<Link  key={index} href={`/category/${category.slug}`}>
												<div className='mt-2 py-2 align-middle text-white bg-white rounded-full font-semibold cursor-pointer'>
													<p className='text-center text-primary'>{category.name}</p>
													
												</div>
											</Link>
										))}
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;

// {categories.map((category, index) => (
//   <Link key={index} href={`/category/${category.slug}`}>
//     <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
//       {category.name}
//     </span>
//   </Link>
// ))}

{
	/* <button
data-collapse-toggle='mobile-menu'
type='button'
className='inline-flex items-center justify-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500'
aria-controls='mobile-menu-2'
aria-expanded='false'>
<span className='sr-only'>Open main menu</span>
<div className='mr-2 text-white'>Menu</div>
<svg
  className='w-6 h-6'
  fill='currentColor'
  viewBox='0 0 20 20'
  xmlns='http://www.w3.org/2000/svg'>
  <path
    fill-rule='evenodd'
    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
    clip-rule='evenodd'></path>
</svg>
<svg
  className='hidden w-6 h-6'
  fill='currentColor'
  viewBox='0 0 20 20'
  xmlns='http://www.w3.org/2000/svg'>
  <path
    fill-rule='evenodd'
    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
    clip-rule='evenodd'></path>
</svg>
</button> */
}
