import Link from 'next/link';
import { getSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
const Profile = () => {
  return (
    <section className='mx-auto h-screen bg-gray-100 text-white dark:bg-gray-900'>
      <div className='max-w-screen mx-auto px-4 pt-12 lg:flex lg:items-center lg:pt-32'>
        <div className='mx-auto max-w-3xl text-center'>
          <p
            key=''
            className='mx-auto mb-10 max-w-xl text-lg text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-relaxed'></p>
          <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
            <span className='block'>Welcome to </span>
            <span className='block'>your profile page.</span>
          </h1>
          <p className='mx-auto mt-8 max-w-xl text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-relaxed'>
            Navigate using the menu below.
          </p>
          <hr className='my-6 border-gray-200 sm:mx-auto lg:my-4' />
          <div className='mt-6 flex flex-wrap justify-center gap-4'>
            <Link
              href='/'
              className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'>
              
                Home
              
            </Link>
            <Link
              href='/about'
              className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'>
              
                About
              
            </Link>
            <Link
              href='/blog'
              className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'>
              
                Blog
              
            </Link>
          </div>
          {/* Section 2 */}
          <div className='mt-10'>
            {/* Put any form here */}
          </div>
        </div>
      </div>
    </section>
  );
};
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session)
    return {
      redirect: {
        destination: '/signin',
      },
    };
  return {
    props: { session },
  };
};
export default Profile;
