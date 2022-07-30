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
    <nav className='rounded-lg px-6  py-3'>
      <div className='container mx-auto flex-wrap items-center  justify-between lg:flex'>
        <Link href='/blog'>
          <a className='mt-4 mb-4 flex justify-center self-center whitespace-nowrap text-center text-3xl font-bold text-primary dark:text-gray-200 lg:text-4xl '>
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
            className='border-b-2 border-primary px-5 py-1 text-center font-semibold text-primary dark:border-gray-300 dark:text-gray-300'
          >
            Categories
          </button>
        </div>

        <div className={!menu ? 'hidden' : 'z-10 divide-y'}>
          <div className='text-md py-2'>
            <div onClick={closeMenu}>
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <div className='mt-2 cursor-pointer py-2 align-middle'>
                    <p className='text-center font-semibold text-primary dark:text-gray-300'>
                      {category.name}
                    </p>
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
