import { useState } from 'react';
const defaultFormFields = {
  name: '',
  email: '',
  message: '',
};
const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, message } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const create = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, message };
      await fetch('/api/create', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  const onSubmit = async (data) => {
    try {
      create(data);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <section className='mx-auto'>
      <div className='py-12'>
        <div className='mx-auto max-w-lg px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <p className='success font-medium text-amber-800 dark:text-gray-200'></p>
          </div>
          <form onSubmit={onSubmit}>
            <div className='mb-6'>
              <label className='mb-2 block text-base font-medium text-primary dark:text-gray-200'>
                Name*
              </label>
              <input
                type='name'
                id='name'
                name='name'
                value={name}
                onChange={handleChange}
                className='block w-full rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-base text-primary placeholder-primary dark:border-amber-700'
                placeholder='Enter your name here'
                required
              />
            </div>
            <div className='mb-6'>
              <label className='mb-2 block text-base font-medium text-primary dark:text-gray-200'>
                Email*
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleChange}
                className='block w-full  rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-base text-primary placeholder-primary  dark:border-amber-700'
                placeholder='Enter your email here'
                required
              />
            </div>
            <div className='mb-6'>
              <label className='mb-2 block text-base font-medium text-primary dark:text-gray-200'>
                Message*
              </label>
              <textarea
                type='message'
                id='message'
                name='message'
                value={message}
                onChange={handleChange}
                className='block h-44 w-full  rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-base text-primary placeholder-primary  dark:border-amber-700 '
                placeholder='Leave your message'
                required
              />
            </div>
            <div className='mb-6 flex items-center justify-center'>
              <div className='mt-6 flex h-5 items-center justify-center'>
                <button
                  type='submit'
                  className='w-full rounded-lg bg-primary px-5 py-2.5 text-center text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-200 dark:text-primary sm:w-auto'>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;