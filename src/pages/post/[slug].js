import { useRouter } from 'next/router';
import Header from '../../components/blog/Header';
import { getPosts, getPostDetails } from '../../services';
import {
  PostDetail,
  Categories,
  PostWidget,
  Comments,
  CommentsForm,
  Loader,
} from '../../components/blog';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <section className='mx-auto bg-slate-100 dark:bg-gray-900 '>
      <div className='container mx-auto bg-slate-100 px-4 pb-8 dark:bg-gray-900 md:px-6 lg:px-10 xl:px-28'>
        <Header />

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetail post={post} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative top-8 lg:sticky'>
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
