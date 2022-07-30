import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, message } = formFields;
  const [confirmation, setConfirmation] = useState('');

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const docRef = await addDoc(collection(db, 'contact'), {
      displayName: displayName,
      email: email,
      message: message,
    });
    resetFormFields();
    setConfirmation('Form submitted successfully.');
    console.log('Document written with ID: ', docRef.id);
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
            {confirmation && (
              <p className='success font-medium text-red-800'>{confirmation}</p>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label className='mb-2 block text-base font-medium text-primary dark:text-gray-200'>
                Name*
              </label>
              <input
                type='name'
                id='name'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                className='block w-full rounded-lg border border-gray-600 dark:border-amber-700 bg-gray-50 p-2.5 text-base text-primary placeholder-primary'
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
                className='block w-full  rounded-lg border border-gray-600 dark:border-amber-700 bg-gray-50 p-2.5 text-base text-primary  placeholder-primary'
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
                className='block h-44 w-full  rounded-lg border border-gray-600 dark:border-amber-700 bg-gray-50 p-2.5 text-base text-primary  placeholder-primary '
                placeholder='Leave your message'
                required
              />
            </div>
            <div className='mb-6 flex items-center justify-center'>
              <div className='mt-6 flex h-5 items-center justify-center'>
                <button
                  type='submit'
                  className='w-full rounded-lg bg-primary dark:bg-gray-200 px-5 py-2.5 text-center text-base font-medium text-white dark:text-primary hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto'
                >
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
