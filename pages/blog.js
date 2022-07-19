import React from 'react';
import { PostCardMain, Categories, PostWidget } from '../components/blog';
import { getPosts } from '../services/index';
import Header from '../components/blog/Header';

const BlogHome = ({ posts }) => {
  return (
    <div className='container mx-auto mb-12 px-4 lg:px-4 xl:px-28'>
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
