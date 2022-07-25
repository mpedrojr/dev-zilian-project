import { useState } from 'react';
import Link from 'next/link';
import { forgotPasswordFeature } from '../../utils/firebase.utils';

const defaultFormFields = {
  email: '',
};

const PasswordRecovery = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email } = formFields;

  const [errorMessage, setErrorMessage] = useState('');
  // const [message, setMessage] = useState("");

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // forgotPasswordFeature(email);

    try {
      await forgotPasswordFeature(email);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          setErrorMessage('No user associated with this email');
          break;
        default:
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='mb-28 w-full max-w-md space-y-8'>
      <div className='mb-12 text-center'>
        <p className='mt-2 text-2xl font-extrabold leading-8 tracking-tight text-primary sm:text-3xl'>
          Forgot Password
        </p>
        <Link href='/signin'>
          <button className='text-md mt-4 max-w-2xl font-medium text-blue-800 lg:mx-auto'>
            Sign In?
          </button>
        </Link>
      </div>

      <div className='text-center'>
        {errorMessage && (
          <p className='error font-medium text-red-800'>{errorMessage}</p>
        )}
      </div>
      {/* <div className="text-center">
				{message && (
					<p className="success text-red-800 font-medium">{message}</p>
				)}
			</div> */}

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='mb-1 block text-sm font-medium text-primary'>
            Your email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
            className='block w-full  rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary  placeholder-primary'
            placeholder='Your email'
            required
          />
        </div>
        <div className='mt-6'>
          <button
            type='submit'
            className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordRecovery;
