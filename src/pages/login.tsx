import LoginForm from 'components/atoms/forms/loginForm';
import Link from 'next/link';
const LoginPage: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center bg-gray-200'>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='text-center mt-24'>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Log in
          </h2>
          <p className='mt-2 text-center text-md text-gray-600'>
            {"Don't have an account? "}
            <Link href='/signup'>
              <a href='#' className='text-blue-500'>
                Sign Up
              </a>
            </Link>
          </p>
        </div>
        <div className='mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <LoginForm />
          <div className='mt-4 flex items-end'>
            <div className='text-sm leading-5'>
              <Link href='/reset-password'>
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
                >
                  Forgot your password?
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
