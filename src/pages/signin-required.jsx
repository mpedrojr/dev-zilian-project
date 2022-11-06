import Image from 'next/image';
import Link from 'next/link';
import Lock from '../images/lock.png';

const SignInRequired = () => {
  return (
    <section className='w-xl mx-auto my-auto bg-white dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center space-y-4 pt-32 pb-28 md:pb-72 md:pt-72 lg:pb-60 lg:pt-32'>
        <div>
          <Image src={Lock} alt='dog' />
        </div>
        <h1 className='text-4xl font-bold text-amber-500 lg:text-5xl'>
          Please sign in
        </h1>
        <h3 className='text-3xl font-semibold text-primary dark:text-gray-300 lg:text-4xl'>
          to access this page.
        </h3>

        <div className='flex space-x-4'>
          <Link
            href='/signin'
            className='mt-4 flex h-10 w-24 items-center justify-center rounded-full bg-primary text-base font-medium text-white dark:bg-amber-700 md:text-lg'>
            
              Login
            
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignInRequired;
