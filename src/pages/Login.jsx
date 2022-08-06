import React from 'react';
import Google from './../images/google.png';

const Login = () => {
  return (
    <div className="px-6 pt-6 lg:px-12 mx-auto max-w-xl">
      <div className="bg-white rounded-xl text-back px-4 py-6 sm:p-8">
        <h1 className="font-bold text-3xl mb-3">Login</h1>
        <p className="mb-6">Login to access the editor</p>
        <form className="mb-6">
          <div className="mb-8">
            <label htmlFor="email" className="block w-max font-medium text-lg ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              className="border-b-back text-lg border-b block w-full mt-2 outline-0 text-back pb-2"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block w-max font-medium text-lg ">
              Password <span className="text-sm">(Minium 8 characters)</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              className="border-b-back text-lg border-b block w-full mt-2 outline-0 text-back pb-2"
            />
          </div>
          <button
            type="submit"
            className="w-full uppercase tracking-widest font-bold rounded text-lg h-14 border-back border-2 text-white bg-back hover:text-back hover:bg-white transition-all duration-150 ease-linear"
          >
            Login
          </button>
        </form>
        <p className="text-center opacity-80">OR</p>
        <button className="mt-6 w-full uppercase tracking-widest font-bold rounded sm:text-lg h-14 border-back border-2 text-back hover bg-white transition-all duration-150 ease-linear flex items-center justify-center sm:gap-4 text-sm gap-3">
          <img src={Google} alt="google-icon" className="sm:w-6 w-4" />
          <span>Continue with google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
