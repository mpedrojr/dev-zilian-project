import ContactForm from '../components/forms/ContactForm';

const Contact = () => {
  return (
    <section className='mx-auto bg-slate-100'>
      <div className='w-full pt-8 px-6'>
        <div className='container relative mx-auto  flex flex-col items-center rounded-lg bg-primary pt-12 pb-24 sm:pt-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64'>
         
          
          <div className='mb-5 w-11/12 sm:mb-10 sm:w-2/3'>
            <h1 className='text-center text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
              Contact Me.
            </h1>
          </div>
          <div className='mb-10 flex items-center justify-center sm:mb-20'>
            <h1 className='text-white text-2xl'>I will Reach out to you ASAP.</h1>
           
          </div>
        </div>
        <div className='container mx-auto -mt-20 flex justify-center sm:-mt-40 md:-mt-56'>
          <div className='relative mb-24 w-11/12 rounded-xl bg-slate-300 sm:w-2/3'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
