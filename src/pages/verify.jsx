const Verify = () => {
  return (
    <>
    <section className='bg-gray-100 dark:bg-gray-900 dark:text-gray-100'>
      <div className='container mx-auto flex flex-col items-center px-4 py-44 text-center md:py-96 xl:py-72 md:px-10 lg:px-32 xl:max-w-3xl'>
        <h1 className='mb-8 text-4xl font-bold leading-none sm:text-5xl'>
          Awaiting Confirmation
        </h1>
        <h2 className='text-xl font-bold'>
          Do not close this window until opening the email link.
        </h2>
        <p className='mt-8 font-semibold mb-12 rounded-md bg-gray-400 px-8 py-2 text-lg dark:bg-gray-700'>
          Please also check your spam box
        </p>
      </div>
    </section>
    </>
  );
};

export default Verify;
