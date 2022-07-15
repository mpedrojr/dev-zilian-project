import React from 'react';
import { PostCardMain, Categories, PostWidget } from '../components/blog';
import { getPosts } from '../services/index';
import Header from '../components/blog/Header';

const BlogHome = ({ posts }) => {
	return (
		<div className='container mx-auto px-4 lg:px-10 mb-12'>
			<Header />

			<div className='lg:hidden grid grid-cols-1 lg:grid-cols-12 gap-12 mt-1'>
				<div className='lg:col-span-8 col-span-1'>
				{posts.map((post, index) => (
            <PostCardMain key={index} post={post.node} />
          ))}
				</div>
				<div className='lg:col-span-4 col-span-1'>
					<div className='lg:sticky relative top-8'>
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>

			<div className='hidden lg:grid lg:grid-cols-12 gap-8 mt-1'>
				<div className='lg:col-span-3 col-span-1'>
					<div className='lg:sticky relative top-8'>
						<PostWidget />
						<Categories />
					</div>
				</div>
				<div className='lg:col-span-9'>
					<div className='grid grid-cols-1 gap-6'>
						{posts.map((post, index) => (
							<PostCardMain key={index} post={post.node} />
						))}
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
