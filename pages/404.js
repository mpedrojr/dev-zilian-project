import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div className='w-xl flex h-screen flex-col items-center justify-center space-y-5 bg-white'>
      <h1 className='text-9xl text-amber-500'>404</h1>
      <h3 className='text-3xl'>Page not found</h3>
      <p>Please use click below to navigate back to the home page.</p>
      <Link
        href='/'
        className='flex items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-amber-700 md:py-3 md:px-8 md:text-lg'
      >
        Home
      </Link>
    </div>
  );
};

export default PageNotFound;
