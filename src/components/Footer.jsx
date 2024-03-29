import Link from 'next/link';
import Logo from '../images/logodev-white.svg';
import { FaDiscord, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t bg-primary p-4 dark:border-t-gray-200 dark:bg-gray-900 sm:p-6'>
      <div className='md:flex md:justify-between'>
        <div className='-ml-8 mb-6 md:ml-2 md:mb-0'>
          <Link href='/' className='flex items-start' legacyBehavior>
            <button>
              <Logo />
            </button>
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:space-x-6 xl:grid-cols-6 xl:gap-6 xl:space-x-12'>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-200'>
              Resources
            </h2>
            <ul className='text-gray-400'>
              <li>
                <Link href='/blog' className='hover:underline'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-200'>
              CONNECT
            </h2>
            <ul className='text-gray-400'>
              <li className='mb-4'>
                <Link
                  href='https://github.com/mpedrojr/dev-zilian-project'
                  rel='noopener noreferrer'
                  className='hover:underline '
                  target='_blank'>
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/in/mpedrocjr/'
                  rel='noopener noreferrer'
                  className='hover:underline'
                  target='_blank'>
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-200'>
              Legal
            </h2>
            <ul className='text-gray-400'>
              <li className='mb-4'>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
              </li>

              <li className='mb-4'>
                <Link href='/about' className='hover:underline'>
                  About
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/contact' className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          © 2022 <span>devzilian™</span>. All Rights Reserved.
        </span>
        <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center md:mr-12'>
          <Link
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            legacyBehavior>
            <button className='text-2xl text-zinc-400'>
              <FaDiscord />
            </button>
          </Link>
          <Link
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            legacyBehavior>
            <button className='text-2xl text-zinc-400'>
              <FaFacebook />
            </button>
          </Link>
          <Link
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            legacyBehavior>
            <button className='text-2xl text-zinc-400'>
              <FaInstagram />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
