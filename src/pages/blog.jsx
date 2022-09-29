import React from 'react';
import { PostCardMain, Categories, PostWidget } from '../components/blog';
import { getPosts } from '../services/index';
import Header from '../components/blog/Header';

const BlogHome = ({ posts }) => {
  return (
    <section className=' mx-auto bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4 xl:px-28'>
        <Header />

        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
          <div className='col-span-1 lg:col-span-8'>
            {posts.map((post, index) => (
              <PostCardMain key={index} post={post.node} />
            ))}
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative top-8 lg:sticky'>
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default BlogHome;
