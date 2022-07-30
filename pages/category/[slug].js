import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/blog/Header';

import { getCategories, getCategoryPost } from '../../services';
import { PostCardMain, Categories, Loader } from '../../components/blog';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='bg-slate-100 dark:bg-gray-900 mx-auto pb-12 px-4 xl:px-24'>
      <Header />

      <div className='mt-1 grid grid-cols-1 gap-8 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-9'>
          {posts.map((post, index) => (
            <PostCardMain key={index} post={post.node} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-3'>
          <div className='relative top-8 lg:sticky'>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();

  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
