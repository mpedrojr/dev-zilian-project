import Image from 'next/image';
import Banner from '../../images/bannervector.png';

const HeroHome = () => {
  return (
    <section className='mx-auto'>
      <div className='relative overflow-hidden dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl lg:ml-20 xl:ml-48'>
          <div className='relative z-10 pb-8  sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:rounded-lg lg:pb-28 xl:pb-32'>
            <main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='text-center lg:text-left xl:ml-12 2xl:ml-28'>
                <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl'>
                  <span className='block'>Devzilian</span>
                  <span className='block text-primary dark:text-gray-100'>
                    Web Dev
                  </span>
                </h1>
                <p className='mt-3 text-base text-gray-900 dark:text-gray-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
                  Welcome to my portfolio and blog.
                </p>
                <p className='mt-2 text-base text-gray-500 dark:text-gray-200 sm:mx-auto sm:mt-2 sm:max-w-xl sm:text-lg md:mt-2 md:text-xl lg:mx-0'>
                  Let&apos;s talk about Web Development.
                </p>
                <div className='mt-5 flex justify-center sm:mt-8 lg:justify-start'>
                  <div className='rounded-md shadow'>
                    {/*  <a
                      href='#'
                      className='flex w-fit items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-amber-700 md:py-4 md:px-10 md:text-lg'
                    >
                      Leave a message
                    </a> */}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className='-mt-16 -mb-12 md:-mt-44 md:-mb-24 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:mb-0 lg:w-1/2'>
          <Image src={Banner} alt='banner' />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
