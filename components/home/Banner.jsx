import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <section className='mx-auto'>
      <div className='container mx-auto px-2 xl:px-44'>
        <div className='rounded-md p-6 py-12 dark:bg-amber-600 xl:px-8'>
          <div className='flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-44'>
            <h2 className='text-center text-5xl font-bold tracking-tighter'>
              <span className='block md:inline'>Visit my </span>
              <span className='block md:inline'> Blog</span>
            </h2>
            <div className='space-x-2 py-2 text-center lg:py-0'>
              <span className='text-xl font-normal'>New posts about </span>
              <span className='text-xl font-bold'>Web Development</span>

              <span className='mt-2 flex justify-center'>
                <Link href='/blog' alt='Link to the blog home page'>
                  <a className='mt-4 block w-fit justify-center rounded-md border border-gray-400 bg-primary px-5 py-3 align-middle text-lg font-semibold text-white lg:mt-0'>
                    Click here
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
