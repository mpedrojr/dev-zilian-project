import Head from 'next/head';
import HeroHome from '../components/home/HeroHome';
import Features from '../components/home/Features';
import Banner from '../components/home/Banner';
import ContactForm from '../components/forms/ContactForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevZilian</title>
      </Head>

      <HeroHome />
      <Features />
      <Banner />
      <div className='mt-16 lg:text-center'>
        <p className='mt-2 text-2xl font-extrabold leading-8 tracking-tight text-primary sm:text-3xl'>
          Get in touch
        </p>
        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
          I will reach out to you soon.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
