import Link from 'next/link';

const ProtectedContent = () => {
  return (
    <section className='flex h-[800px] items-center p-16 bg-gray-100 dark:bg-gray-900 dark:text-gray-100'>
      <div className='container mx-auto my-8 flex flex-col items-center justify-center px-5'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 text-6xl font-extrabold text-gray-400 dark:text-gray-600'>
            Access restricted
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            Please sign in to access the content of this page.
          </p>
          <p className='mt-4 mb-8 dark:text-gray-400'>
            You will be redirected to the sign in page.
          </p>
          <Link href='/signin'>
            <a className='rounded bg-primary px-8 py-3 text-white font-semibold dark:bg-white dark:text-gray-900'>
              Sign in
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProtectedContent;
