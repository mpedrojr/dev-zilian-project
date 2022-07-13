import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../../services';

const Header = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => {
			setCategories(newCategories);
		});
	}, []);

	// const [nav, setNav] = useState(false);
	// const handleCLick = () => setNav(!nav);
	const [menu, setMenu] = useState(false);
	const handleMenu = () => setMenu(!menu);

	const closeMenu = () => {
		setMenu(false);
		// setNav(false);
	};

	return (
		<nav className='px-6 py-3 mt-2  rounded-lg'>
			<div className='container lg:flex flex-wrap items-center  justify-between mx-auto'>
				<Link href='/blog' className=' text-primary'>
					<a className='flex self-center text-center justify-center mt-4 mb-4 text-2xl text-primary font-semibold whitespace-nowrap '>
						Blog
					</a>
				</Link>
			</div>

			<div className=' items-center justify-center text-center lg:hidden dark:text-primary'>
				<div>
					<button
						onClick={handleMenu}
						id='dropdownNavbarLink'
						data-dropdown-toggle='dropdownNavbar'
						rel='noopener noreferrer'
						href='#'
						className='px-5 py-1 border-b-2 text-center dark:border-primary dark:text-primary'>
						Categories
					</button>
				</div>

				<div className={!menu ? 'hidden' : 'z-10 divide-y'}>
					<div className='py-2 text-md text-gray-700 dark:text-gray-400'>
						<div onClick={closeMenu}>
							{categories.map((category, index) => (
								<Link key={index} href={`/category/${category.slug}`}>
									<div className='mt-2 py-2 align-middle cursor-pointer'>
										<p className='text-center text-primary'>{category.name}</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
