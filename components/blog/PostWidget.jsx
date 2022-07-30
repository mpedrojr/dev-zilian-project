import { useState, useEffect } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import { getSimilarPosts, getFeaturedPosts } from '../../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getFeaturedPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <>
      <div className=' mb-8 rounded-lg p-8 pb-12 shadow-lg lg:mt-0'>
        <h3 className='mb-8 border-b pb-4 text-xl font-semibold text-primary dark:text-gray-200'>
          {slug ? 'Related Posts' : 'Featured Posts'}
        </h3>
        {relatedPosts.map((post, index) => (
          <div key={index} className='mb-4 flex w-full items-center'>
            <div className='w-16 flex-none'>
              <img
                alt={post.title}
                height='60px'
                width='60px'
                className='rounded-lg align-middle'
                src={post.featuredImage.url}
              />
            </div>
            <div className='ml-4 flex-grow text-gray-800 dark:text-gray-200'>
              <p className='font-xs'>
                {format(new Date(post.createdAt), 'MM/dd/yyyy')}
              </p>
              <Link href={`/post/${post.slug}`} className='text-md' key={index}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostWidget;
