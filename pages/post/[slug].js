import { useRouter } from "next/router";
import Header from "../../components/blog/Header";
import { getPosts, getPostDetails } from "../../services";
import {
	PostDetail,
	Categories,
	PostWidget,
	Comments,
	CommentsForm,
	Loader,
} from "../../components/blog";

const PostDetails = ({ post }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader />;
	}

	return (
		
			<div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-44 mb-8">
				<Header />
				
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					<div className="col-span-1 lg:col-span-8">
						<PostDetail post={post} />
						<CommentsForm slug={post.slug} />
						<Comments slug={post.slug} />
					</div>
					<div className="col-span-1 lg:col-span-4">
						<div className="relative lg:sticky top-8">
							<PostWidget
								slug={post.slug}
								categories={post.categories.map((category) => category.slug)}
							/>
							<Categories />
						</div>
					</div>
				</div>
			</div>
		
	);
};

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
	const data = await getPostDetails(params.slug);
	return {
		props: { post: data },
	};
}

export async function getStaticPaths() {
	const posts = await getPosts();

	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: true,
	};
}
