import React from 'react';
import Google from './../images/google.png';

const Register = () => {
  return (
    <div className="max-w-xl px-6 py-8 mx-auto lg:px-12">
      <div className="px-4 py-6 bg-white rounded-xl text-back sm:p-8">
        <h1 className="mb-3 text-3xl font-bold">Register</h1>
        <p className="mb-6">Create an account to access the editor</p>
        <form className="mb-6">
          <div className="mb-8">
            <label htmlFor="name" className="block text-lg font-medium w-max ">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              className="block w-full pb-2 mt-2 text-lg border-b border-b-back outline-0 text-back"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block text-lg font-medium w-max ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              className="block w-full pb-2 mt-2 text-lg border-b border-b-back outline-0 text-back"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-lg font-medium w-max ">
              Password <span className="text-sm">(Minium 8 characters)</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              className="block w-full pb-2 mt-2 text-lg border-b border-b-back outline-0 text-back"
            />
          </div>
          <button
            type="submit"
            className="w-full text-lg font-bold tracking-widest text-white uppercase transition-all duration-150 ease-linear border-2 rounded h-14 border-back bg-back hover:text-back hover:bg-white"
          >
            Register
          </button>
        </form>
        <p className="text-center opacity-80">OR</p>
        <button className="flex items-center justify-center w-full gap-3 mt-6 text-sm font-bold tracking-widest uppercase transition-all duration-150 ease-linear bg-white border-2 rounded sm:text-lg h-14 border-back text-back hover sm:gap-4">
          <img src={Google} alt="google-icon" className="w-4 sm:w-6" />
          <span>Continue with google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
