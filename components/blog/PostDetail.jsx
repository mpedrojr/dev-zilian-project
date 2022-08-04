import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { format } from 'date-fns';
import Link from 'next/link';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';

const PostDetail = ({ post }) => {
  return (
    <>
      <div className='mb-8 mt-0 rounded-lg bg-white pb-12 shadow-lg dark:bg-gray-900 lg:p-8'>
        <div className='mb-0 flex w-full justify-start rounded-lg px-2 md:py-2'>
          <span className='mb-1 mt-6 rounded-full bg-primary px-3 py-1 text-sm dark:bg-gray-300 lg:mt-0'>
            {post.categories.map((category, i) => (
              <h1 className='text-white dark:text-primary' key={i}>
                {category.name}
              </h1>
            ))}
          </span>
        </div>
        <h1 className='mb-4 px-2 pt-1 text-lg font-bold text-gray-900 dark:text-gray-200 lg:text-3xl'>
          {post.title}
        </h1>
        <div className='mb-6 overflow-hidden'>
          <Image
            src={post.featuredImage.url}
            alt=''
            height={410}
            width={800}
            className='h-full w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg'
          />
        </div>
        <div className='mt-4 px-4 lg:px-0'>
          <div className='mb-10'>
            {/* Rich Text Begin */}

            <RichText
              content={post.content.raw.children}
              renderers={{
                img: ({ src, altText, height, width }) => (
                  <div className='mt-10 mb-10 flex justify-center'>
                    <img
                      src={src}
                      alt={altText}
                      height={height}
                      width={width}
                    />
                  </div>
                ),
                blockquote: ({ children }) => (
                  <blockquote>{children}</blockquote>
                ),
                ul: ({ children }) => <ul>{children}</ul>,
                ol: ({ children }) => <ol>{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                p: ({ children }) => (
                  <p className='mb-4 text-base leading-relaxed text-gray-900 dark:text-gray-400'>
                    {children}
                  </p>
                ),
                h1: ({ children }) => (
                  <h1 className='mb-4 text-xl text-gray-900 dark:text-gray-300'>
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className='mb-4 text-lg text-gray-900 dark:text-gray-300'>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className='mb-4 text-base text-gray-900 dark:text-gray-300'>
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className='mb-4 text-sm text-gray-900 dark:text-gray-300'>
                    {children}
                  </h4>
                ),
                h5: ({ children }) => (
                  <h5 className='mb-4 text-gray-900 dark:text-gray-300'>
                    {children}
                  </h5>
                ),
                h6: ({ children }) => (
                  <h6 className='mb-4 text-gray-900 dark:text-gray-300'>
                    {children}
                  </h6>
                ),
                table: ({ children }) => <table>{children}</table>,
                table_head: ({ children }) => <thead>{children}</thead>,
                table_body: ({ children }) => <tbody>{children}</tbody>,
                table_row: ({ children }) => <tr>{children}</tr>,
                table_cell: ({ children }) => <td>{children}</td>,
                table_header_cell: ({ children }) => <th>{children}</th>,
                bold: ({ children }) => <b>{children}</b>,
                italic: ({ children }) => <i>{children}</i>,
                underline: ({ children }) => <u>{children}</u>,
                code: ({ children }) => <code>{children}</code>,
                code_block: ({ children }) => (
                  <pre className='mb-4 overflow-x-auto whitespace-pre bg-black px-2 py-6 font-code text-white  '>
                    {children}
                  </pre>
                ),

                a: ({ children, openInNewTab, href, ...rest }) => {
                  if (href.match(/^https?:\/\/|^\/\//i)) {
                    return (
                      <a
                        className='text-blue-800 dark:text-blue-500'
                        href={href}
                        target={openInNewTab ? '_blank' : '_self'}
                        rel={'noopener noreferrer'}
                        {...rest}>
                        {children}
                      </a>
                    );
                  }
                  return (
                    <Link href={href}>
                      <a {...rest}>{children}</a>
                    </Link>
                  );
                },
              }}
            />

            {/* Rich Text End */}
          </div>
          <div className='mb-2 flex w-full items-center justify-center border-t border-gray-200 pt-10'>
            <div className='mr-8 flex items-center justify-center'>
              <img
                alt={post.author.name}
                height='30px'
                width='30px'
                className='justify-center rounded-full align-middle'
                src={post.author.photo.url}
              />
              <p className='ml-2 inline align-middle text-lg font-medium text-gray-700 dark:text-gray-400'>
                {post.author.name}
              </p>
            </div>
            <div className='flex items-center font-medium text-gray-700 dark:text-gray-400'>
              <span className='mr-2 inline align-middle'>
                <FaRegCalendar />
              </span>
              <span className='inline align-middle'>
                {format(new Date(post.createdAt), 'MM/dd/yyyy')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
