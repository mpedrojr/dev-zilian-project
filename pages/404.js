import Image from 'next/image';
import Link from 'next/link';
import Dog from '../images/dog_404.png';

const PageNotFound = () => {
  return (
    <section className='w-xl mx-auto my-auto bg-white dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center space-y-5 py-28 lg:py-44'>
        <div className='h-48 w-48'>
          <Image src={Dog} alt='dog' />
        </div>
        <h1 className='text-4xl font-bold text-amber-500 lg:text-6xl'>
          Woof woof!
        </h1>
        <h3 className='text-3xl font-semibold text-primary dark:text-gray-300'>
          Page not found.
        </h3>
        <p className='text-center text-primary dark:text-gray-300'>
          Click below to navigate to the home page.
        </p>
        <div className='flex space-x-4'>
          <Link href='/'>
            <a className='flex h-10 w-24 items-center justify-center rounded-full bg-primary text-base font-medium text-white dark:bg-amber-700 md:text-lg'>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className='flex h-10 w-24 items-center justify-center rounded-full bg-primary text-base font-medium text-white dark:bg-amber-700  md:text-lg'>
              Blog
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
