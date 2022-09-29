import Head from 'next/head';
import HeroHome from '../components/home/HeroHome';
import Features from '../components/home/Features';
import BlogCta from '../components/home/Blog-cta';
import ContactForm from '../components/forms/ContactForm';
import RepoCta from '../components/home/Github-cta';

export default function Home() {
  return (
    <section className='mx-auto bg-slate-100 dark:bg-gray-900'>
      <Head>
        <title>DevZilian</title>
      </Head>

      <HeroHome />
      <Features />
      <BlogCta />
      <RepoCta />
      <section className='mx-auto'>
        <div className='mt-16 justify-center text-center'>
          <p className='mt-2 text-2xl font-extrabold leading-8 tracking-tight text-primary dark:text-gray-200 sm:text-3xl'>
            Get in touch
          </p>
          <p className='mt-4 text-center  text-xl text-gray-500 dark:text-gray-300 lg:mx-auto'>
            I will reach out to you soon.
          </p>
        </div>
      </section>
      <ContactForm />
    </section>
  );
}
