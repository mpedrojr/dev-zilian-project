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
    <nav className='mt-2 rounded-lg px-6  py-3'>
      <div className='container mx-auto flex-wrap items-center  justify-between lg:flex'>
        <Link href='/blog' className=' text-primary'>
          <a className='mt-4 mb-4 flex justify-center self-center whitespace-nowrap text-center text-3xl font-bold text-primary lg:text-4xl '>
            Blog
          </a>
        </Link>
      </div>

      <div className=' items-center justify-center text-center dark:text-primary lg:hidden'>
        <div>
          <button
            onClick={handleMenu}
            id='dropdownNavbarLink'
            data-dropdown-toggle='dropdownNavbar'
            rel='noopener noreferrer'
            href='#'
            className='border-b-2 px-5 py-1 text-center dark:border-primary dark:text-primary'
          >
            Categories
          </button>
        </div>

        <div className={!menu ? 'hidden' : 'z-10 divide-y'}>
          <div className='text-md py-2 text-gray-700 dark:text-gray-400'>
            <div onClick={closeMenu}>
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <div className='mt-2 cursor-pointer py-2 align-middle'>
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
