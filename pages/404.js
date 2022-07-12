import Link from "next/link";

const PageNotFound = () => {
	return (
		<div className="flex flex-col w-xl h-screen justify-center items-center space-y-5 bg-white">
			<h1 className="text-9xl text-amber-500">404</h1>
			<h3 className="text-3xl">Page not found</h3>
			<p>Please use click below to navigate back to the home page.</p>
			<Link
				href="/"
				className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-amber-700 md:py-3 md:text-lg md:px-8">
				Home
			</Link>
		</div>
	);
};

export default PageNotFound;
