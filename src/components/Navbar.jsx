import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../images/logodev-white.svg';
import { BsMoonStars } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
//# Auth configuration //
import { useSession, signOut } from 'next-auth/react';
//# Auth configuration //
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  //# Auth configuration //
  const { data: session } = useSession();
  //# Auth configuration //

  //# Theme Dark Mode #//
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <button
          className='h-6 w-6 text-white'
          onClick={() => setTheme('light')}>
          <FiSun />
        </button>
      );
    } else {
      return (
        <button className='h-6 w-6 text-white' onClick={() => setTheme('dark')}>
          <BsMoonStars />
        </button>
      );
    }
  };
  //# Theme Dark #//

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
    <nav className='w-xl mx-auto bg-primary p-3 dark:border-b dark:bg-gray-900'>
      <div className='flex items-center justify-around '>
        <div className='-ml-4 text-white md:hidden' onClick={handleCLick}>
          {!nav ? (
            <button className='px-6 py-2'>
              <FaBars />
            </button>
          ) : (
            <button className='px-6 py-2'>
              <FaTimes />
            </button>
          )}
        </div>
        <div onClick={() => setNav(false)}>
          <button className='-ml-6'>
            <Link href='/' legacyBehavior>
              <Logo />
            </Link>
          </button>
        </div>
        <div className='hidden space-x-10 font-secondary font-semibold text-white  md:flex lg:mr-2'>
          <Link href='/'>
            HOME
          </Link>
          <Link href='/about'>
            ABOUT
          </Link>
          <Link href='/contact'>
            CONTACT
          </Link>
          <Link href='/blog'>
            BLOG
          </Link>
        </div>
        <div className='flex md:hidden'>{renderThemeChanger()}</div>
        <div className='hidden items-center md:flex'>
          <div className='mr-6 md:flex lg:mr-12'>{renderThemeChanger()}</div>
          {session ? (
            <button
              type='button'
              onClick={() => signOut()}
              className='flex items-center font-bold text-gray-100'>
              <span className='mr-4 hidden lg:inline'>LOGOUT</span>
              <span className='inline'>
                <FiLogOut />
              </span>
            </button>
          ) : (
            <div>
              <Link href='/signin' legacyBehavior>
                <button className=' flex items-center font-bold text-white'>
                  <span className='mr-4 hidden lg:inline'>LOGIN</span>
                  <span className='inline'>
                    <FiLogIn />
                  </span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className='md:hidden'>
        <div
          className={
            !nav
              ? 'hidden'
              : 'absolute left-0 right-0 z-40 mt-4 flex flex-col items-center space-y-6 border-b bg-white py-8 pb-20 font-secondary font-bold text-primary drop-shadow-md dark:border-b-gray-200 dark:bg-gray-900 dark:text-gray-200 sm:w-auto sm:self-center'
          }>
          <div className='mb-4 ml-6'>
            {session ? (
              <button
                type='button'
                onClick={() => signOut()}
                className='flex items-center font-bold text-gray-900 dark:text-gray-100'>
                <span className='mr-4 inline'>LOGOUT</span>
                <span className='inline'>
                  <FiLogOut />
                </span>
              </button>
            ) : (
              <div>
                <Link href='/signin' legacyBehavior>
                  <button
                    onClick={() => setNav(false)}
                    className=' flex items-center font-bold text-gray-900 dark:text-gray-100'>
                    <span className='mr-4 inline'>LOGIN</span>
                    <span className='inline'>
                      <FiLogIn />
                    </span>
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className='w-80 border-b-2 border-b-primary text-center leading-10 dark:border-b-gray-200'>
            <Link href='/' legacyBehavior>
              <button onClick={handleClick} className='w-full'>
                HOME
              </button>
            </Link>
          </div>
          <div className='w-80 border-b-2 border-b-primary text-center leading-10 dark:border-b-gray-200'>
            <Link href='/about' legacyBehavior>
              <button onClick={handleClick} className='w-full'>
                ABOUT
              </button>
            </Link>
          </div>
          <div className='w-80 border-b-2 border-b-primary text-center leading-10 dark:border-b-gray-200'>
            <Link href='/contact' legacyBehavior>
              <button onClick={handleClick} className='w-full'>
                CONTACT
              </button>
            </Link>
          </div>
          <div className='w-80 border-b-2 border-b-primary text-center leading-10 dark:border-b-gray-200'>
            <Link href='/blog' legacyBehavior>
              <button onClick={handleClick} className='w-full'>
                BLOG
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
