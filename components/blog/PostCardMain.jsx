import React from 'react';
import Link from 'next/link';
import { FaRegCalendar } from 'react-icons/fa';
import { format } from 'date-fns';
import Image from 'next/image';

const PostCardMain = ({ post }) => {
  return (
    <>
      <div className='container mt-10 lg:mt-0'>
        <div className='mx-auto grid-cols-12 lg:grid '>
          <div className='order-first col-span-full row-span-full mb-4 flex  justify-center rounded-lg lg:order-last lg:col-span-3 lg:mb-0 lg:block lg:h-auto lg:w-auto lg:pt-14'>
          <Link href={`/post/${post.slug}`}>
            <a>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={350}
              width={700}
              className='rounded-lg'
            />
            </a>
            </Link>
          </div>
          <div className='order-last col-span-full row-span-full flex flex-col p-1 lg:order-first lg:col-span-9 lg:p-10'>
            <div className='flex justify-start'>
              <span className='mb-2 rounded-full px-3 py-1 text-xs bg-primary dark:bg-gray-300'>
                {post.categories.map((category, i) => (
                  <h1 className='text-white dark:text-primary' key={i}>
                    {category.name}
                  </h1>
                ))}
              </span>
            </div>
            <h1 className='text-md font-semibold text-black dark:text-gray-200 lg:text-xl'>
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            <p className='flex-1 pt-2 text-black dark:text-gray-200 sm:flex'>{post.excerpt}</p>
            <Link href={`/post/${post.slug}`}>
              <a
                rel='noopener noreferrer'
                href='#'
                className='inline-flex items-center space-x-2 pt-2 pb-6 text-sm text-black dark:text-gray-200'
              >
                <span>Read more</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </Link>
            <div className='flex items-center space-x-4 pt-2'>
              <div className='flex space-x-2'>
                <img
                  alt={post.author.name}
                  height='30px'
                  width='30px'
                  className='justify-center rounded-full align-middle'
                  src={post.author.photo.url}
                />
                <span className='self-center text-sm text-black dark:text-gray-200'>
                  {post.author.name}
                </span>
              </div>
              <div className='flex items-center text-xs'>
                <span className='mr-1 inline align-middle text-black dark:text-gray-200'>
                  <FaRegCalendar />
                </span>
                <span className='inline align-middle text-black dark:text-gray-200'>
                  {format(new Date(post.createdAt), 'MM/dd/yyyy')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10  border-b border-gray-300 lg:mt-0'></div>
    </>
  );
};

export default PostCardMain;
