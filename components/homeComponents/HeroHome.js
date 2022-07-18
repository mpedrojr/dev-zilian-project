import Image from "next/image";
import Banner from '../../images/bannerHome.jpg';

const HeroHome = () => {
	return (
		<div className='relative bg-white overflow-hidden'>
			<div className='max-w-7xl mx-auto lg:ml-10 xl:ml-20'>
				<div className='relative z-10 pb-8 bg-white lg:rounded-lg sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
					<main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
						<div className='sm:text-center lg:text-left xl:ml-2 2xl:ml-20'>
							<h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
								<span className='block xl:inline'>The devzilian</span>{' '}
								<span className='block text-primary xl:inline'>Project</span>
							</h1>
							<p className='mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
								Welcome to my portfolio and blog.
							</p>
							<p className='mt-2 text-base text-gray-500 sm:mt-2 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-2 md:text-xl lg:mx-0'>
								Let&apos;s talk about Web Development.
							</p>
							<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
								<div className='rounded-md shadow'>
									<a
										href='#'
										className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-amber-700 md:py-4 md:text-lg md:px-10'>
										Leave a message
									</a>
								</div>
								{/* <div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
										Live demo
									</a>
								</div> */}
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
				<Image src={Banner} alt='banner' />
			</div>
		</div>
	);
};

export default HeroHome;
