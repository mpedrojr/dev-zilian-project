import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const RepoCta = () => {
  return (
    <section className='mx-auto py-6 text-gray-50'>
      <div className='container mx-auto px-2 xl:px-44'>
        <div className='flex flex-col justify-around rounded-lg bg-primary p-4 py-8 text-center dark:bg-gray-800 md:p-10 lg:flex-row'>
          <div className='flex flex-col justify-center lg:text-left'>
            <p className='mb-1 text-xs font-medium uppercase tracking-widest text-gray-200 lg:text-sm'>
              You&apos;re welcome to check my code
            </p>
            <h1 className='py-2 text-xl font-medium leading-tight lg:text-3xl'>
              Visit my GitHub repository
            </h1>
          </div>
          <div className='mt-6 flex flex-shrink-0 flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end'>
            <Link
              href='https://github.com/mpedrojr/dev-zilian-project'
              rel='noopener noreferrer'
              alt='Link to the GitHub repository'>
              <a
                target='_blank'
                className='inline-flex items-center rounded-lg bg-gray-200 px-6 py-3 text-gray-900'>
                <FaGithub className='h-6 w-6' />
                <span className='ml-4 flex flex-col items-start leading-none'>
                  {/* <span className='mb-1 text-xs'>GET IT ON</span> */}
                  <span className='title-font font-semibold'>Click Here</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepoCta;
