import Link from 'next/link';
import React from 'react';
import { BsNewspaper } from 'react-icons/bs';

const BlogCta = () => {
  return (
    <section className='mx-auto'>
      <div className='container mx-auto px-2 xl:px-44'>
        <div className='rounded-md bg-amber-600 p-6 py-4 dark:bg-gray-200'>
          <div className='flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-24'>
            <h1 className='text-center text-2xl font-semibold leading-tight tracking-tighter dark:text-primary lg:text-3xl'>
              <span className='inline'>Visit my</span>
              <span className='inline'> Blog</span>
            </h1>
            <div className='space-x-2 py-2 text-center dark:text-primary lg:py-0'>
              <span className='text-md block font-normal lg:text-xl'>
                New posts about
              </span>
              <span className='text-md block font-bold lg:text-xl'>
                Web Development
              </span>
              <span className='mt-2 flex justify-center'>
                <Link
                  href='/blog'
                  alt='Link to the blog home page'
                  className='inline-flex items-center rounded-lg bg-primary px-6 py-3 text-white'>

                  <BsNewspaper className='mr-4 h-6 w-6' />Click here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCta;
