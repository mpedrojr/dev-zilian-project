import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../images/logodev-white.svg';
import { BsMoonStars } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
//! Auth configuration !//
// import { UserContext } from "../contexts/user.context";
// import { signOutUser } from "../utils/firebase.utils";
//! Auth configuration !//
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
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
          onClick={() => setTheme('light')}
        >
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
    <nav className='w-xl mx-auto bg-primary p-3 dark:border-b dark:bg-gray-900'>
      <div className='flex items-center justify-around '>
        <div className='text-white md:hidden' onClick={handleCLick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <div className='' onClick={() => setNav(false)}>
          <button className=''>
            <Link href='/'>
              <Logo />
            </Link>
          </button>
        </div>
        <div className='hidden space-x-10 font-secondary font-semibold text-white  md:flex lg:mr-2'>
          <Link href='/'>
            <a>HOME</a>
          </Link>
          {/* <Link href='#'>
						<a>PRODUCTS</a>
					</Link> */}
          <Link href='/about'>
            <a>ABOUT</a>
          </Link>
          <Link href='/contact'>
            <a>CONTACT</a>
          </Link>
          <Link href='/blog'>
            <a>BLOG</a>
          </Link>
        </div>
        <div className='md:flex'>{renderThemeChanger()}</div>
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
              : 'absolute left-0 right-0 z-40 mt-4 flex flex-col items-center space-y-6 border-b bg-white py-8 pb-20 font-secondary font-bold text-primary drop-shadow-md dark:border-b-gray-200 dark:bg-gray-900 dark:text-gray-200 sm:w-auto sm:self-center'
          }
        >
          <div
            onClick={handleClick}
            className='w-80 border-b-2 border-b-primary text-center leading-10 dark:border-b-gray-200'
          >
            <Link href='/'>
              <button className='w-full'>HOME</button>
            </Link>
          </div>
          <div
            onClick={handleClick}
            className='w-80 border-b-2 border-b-primary text-center leading-10 dark:border-b-gray-200'
          >
            <Link href='/about'>
              <button className='w-full'>ABOUT</button>
            </Link>
          </div>
          <div
            onClick={handleClick}
            className='w-80 border-b-2 border-b-primary text-center leading-10 dark:border-b-gray-200'
          >
            <Link href='/contact'>
              <button className='w-full'>CONTACT</button>
            </Link>
          </div>
          <div
            onClick={handleClick}
            className='w-80 border-b-2 border-b-primary text-center leading-10 dark:border-b-gray-200'
          >
            <Link href='/blog'>
              <button className='w-full'>BLOG</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
