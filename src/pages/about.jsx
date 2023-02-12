import { useState } from 'react';
import Image from 'next/image';
import MyPhoto from '../images/devzilian_me.png';
import NucampLogo from '../images/nucamplogo.png';
import { front, back } from '../data/about-data';
import { getSession } from 'next-auth/react';

const About = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };

  return (
    <section className='bg-slate-100 dark:bg-gray-900'>
      <div className='container mx-auto'>
        <div className='px-4 pt-8 text-center lg:px-6 lg:pt-16'>
          <div className='mx-auto p-4 text-center md:px-10 lg:px-32 xl:max-w-5xl'>
            <h2 className='text-2xl  font-bold leading-none sm:text-4xl'>
              Hi There!
            </h2>
            <p className='my-2 mb-4 px-1 text-lg'>
              Welcome to my about page. Here you will get to know a little more
              about me.
            </p>
          </div>

          <div>
            <div className='text-center text-gray-900 dark:text-gray-200'>
              <div className='mx-auto mb-4 h-32 w-32'>
                <Image
                  className='mx-auto  rounded-full'
                  src={MyPhoto}
                  alt='Pedro Avatar'
                />
              </div>

              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200'>
                <a href='#'>Pedro da C Jr.</a>
              </h3>
              <p>Web Developer</p>
              <ul className='mt-4 flex justify-center space-x-4'>
                <li>
                  <a
                    href='#'
                    className='text-[#39569c] hover:text-gray-900 dark:hover:text-white'></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Bootcamp */}

      <div className='py-2 pb-16 text-gray-900 dark:text-gray-200'>
        <div className='container mx-auto'>
          <div className='mx-auto p-4 px-1 text-center md:px-10 lg:px-32 xl:max-w-5xl'>
            <h2 className='mb-4 text-2xl font-bold leading-none sm:text-4xl'>
              About Me
            </h2>
            <p className='my-2 mb-4 px-8  text-lg'>
              Welcome to my portfolio website! I&apos;m a beginner web developer
              with a passion for coding and creating beautiful and functional
              websites. I have a strong foundation in various programming
              languages and technologies, including React Js, JavaScript,
              MongoDB, CSS, Prisma, Next.js and Headless CMS.
            </p>
            <p className='my-2 mb-4 px-8 text-lg'>
              My journey in web development started a little over a year ago,
              and since then, I have been continuously learning and perfecting
              my skills. I believe that the world of technology is constantly
              evolving, and I want to be at the forefront of these advancements.
              That&apos;s why I am always seeking new opportunities to challenge
              myself and expand my knowledge.
            </p>
            <p className='my-2 mb-4 px-8 text-lg'>
              I am confident in my ability to create dynamic and engaging
              websites that will help businesses and individuals reach their
              online goals. I have experience working with a variety of
              projects, ranging from simple personal blogs to complex e-commerce
              sites.
            </p>
            <p className='my-2 mb-4 px-8 text-lg'>
              As a beginner, I am always open to constructive feedback and new
              opportunities to grow. I am eager to work with like-minded
              individuals who share my passion for web development and
              technology. If you are interested in working with me, please
              don&apos;t hesitate to reach out.
            </p>

            <h2 className='text-2xl font-bold leading-none sm:text-4xl'>
              Experience
            </h2>
            <p className='my-4 px-8 text-lg'>
              I graduated in Full Stack Web Development at Nucamp. This Bootcamp
              was very important to learn to code and to become a web developer.
              See below al the technologies that I leaned during the Bootcamp.
            </p>
            <div className='h-18 mx-auto mt-8 w-40'>
              <Image
                className='mx-auto rounded-lg'
                src={NucampLogo}
                alt='Pedro Avatar'
              />
            </div>
          </div>
          <div className='grid grid-cols-5 p-4 md:p-8'>
            <div className='col-span-full mb-8 flex justify-center px-4 text-lg font-semibold md:col-span-1 md:flex-col md:items-start md:justify-start'>
              <button
                onClick={handleTab1}
                className={
                  activeTab === 'tab1'
                    ? 'border-b-2 border-gray-300 p-2 text-gray-500 md:border-l-2 md:border-b-0 md:py-3'
                    : 'border-b-2 border-violet-500 px-2 py-1 text-gray-900 dark:text-gray-200 md:border-l-2 md:border-b-0 md:py-3'
                }>
                Front-End
              </button>
              <button
                onClick={handleTab2}
                className={
                  activeTab === 'tab2'
                    ? 'border-b-2 border-gray-300 p-2 text-gray-500 md:border-l-2 md:border-b-0 md:py-3'
                    : 'border-b-2 border-violet-500 px-2 py-1 text-gray-900 dark:text-gray-200 md:border-l-2 md:border-b-0 md:py-3'
                }>
                Back-End
              </button>
            </div>
            <div className='col-span-full grid gap-12 py-4 px-12 text-center sm:grid-cols-2 md:col-span-4 md:text-left'>
              {front.map((list) => (
                <div
                  key={list.title}
                  className={
                    activeTab === 'tab1'
                      ? 'flex flex-col items-center justify-center space-y-3 md:items-start md:justify-start'
                      : 'hidden'
                  }>
                  <p className='text-5xl'>{list.icon}</p>

                  <h5 className='text-xl font-semibold lg:text-2xl'>
                    {list.title}
                  </h5>
                  <p className='lg:pr-32'>{list.description}</p>
                </div>
              ))}

              {back.map((list) => (
                <div
                  key={list.title}
                  className={
                    activeTab === 'tab2'
                      ? 'flex flex-col items-center justify-center space-y-3 md:items-start md:justify-start'
                      : 'hidden'
                  }>
                  <p className='text-5xl'>{list.icon}</p>
                  <h5 className='text-xl font-semibold lg:text-2xl'>
                    {list.title}
                  </h5>
                  <p className='lg:pr-32'>{list.description}</p>
                </div>
              ))}
            </div>
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
        destination: '/signin-required',
      },
    };
  return {
    props: { session },
  };
};

export default About;
