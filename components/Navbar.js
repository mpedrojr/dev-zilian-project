import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../images/logodev-white.svg';
//! Auth configuration !//
// import { UserContext } from "../contexts/user.context";
// import { signOutUser } from "../utils/firebase.utils";
//! Auth configuration !//
import { FaBars, FaTimes } from 'react-icons/fa';

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
    <nav className='w-xl mx-auto bg-primary p-3'>
      <div className='ml-4 flex items-center justify-between md:ml-6 md:mr-6'>
        <div className='text-white md:hidden' onClick={handleCLick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <div className='' onClick={() => setNav(false)}>
          <button className='ml-28'>
            <Link href='/'>
              <Logo />
            </Link>
          </button>
        </div>
        <div className='hidden space-x-10 text-white md:mr-28 md:flex lg:mr-40'>
          <Link href='/'>
            <a>HOME</a>
          </Link>
          {/* <Link href='#'>
						<a>PRODUCTS</a>
					</Link> */}
          <Link href='about'>
            <a>ABOUT</a>
          </Link>
          <Link href='contact'>
            <a>CONTACT</a>
          </Link>
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
              : 'absolute left-0 right-0 z-40 mt-4 flex flex-col items-center space-y-6 bg-white py-8 pb-20 font-bold drop-shadow-md sm:w-auto sm:self-center'
          }
        >
          <div
            onClick={handleClick}
            className='w-80 border-b-2 border-b-primary text-center leading-10'
          >
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
					</div> */}
          <div
            onClick={handleClick}
            className='w-80 border-b-2 border-b-primary text-center leading-10'
          >
            <Link href='/about'>
              <a>ABOUT</a>
            </Link>
          </div>
          <div
            onClick={handleClick}
            className='w-80 border-b-2 border-b-primary text-center leading-10'
          >
            <Link href='/contact'>
              <a>CONTACT</a>
            </Link>
          </div>
          <div
            onClick={handleClick}
            className='w-80 border-b-2 border-b-primary text-center leading-10'
          >
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
