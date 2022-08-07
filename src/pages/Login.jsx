import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Google from './../images/google.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const newFormData = {
      [e.target.name]: e.target.value,
    };
    setFormData((prev) => {
      return { ...prev, ...newFormData };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.trim().length === 0) {
      toast.error('Please enter a valid email');
      return;
    }

    if (!password || password.trim().length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    console.log(formData);
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="max-w-xl px-6 py-8 mx-auto lg:px-12">
      <div className="px-4 py-6 bg-white rounded-xl text-back sm:p-8">
        <h1 className="mb-3 text-3xl font-bold">Login</h1>
        <p className="mb-6">Login to access the editor</p>
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="email" className="block text-lg font-medium w-max ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={handleChange}
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
              value={password}
              onChange={handleChange}
              className="block w-full pb-2 mt-2 text-lg border-b border-b-back outline-0 text-back"
            />
          </div>
          <button
            type="submit"
            className="w-full text-lg font-bold tracking-widest text-white uppercase transition-all duration-150 ease-linear border-2 rounded h-14 border-back bg-back hover:text-back hover:bg-white"
          >
            Login
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

export default Login;
