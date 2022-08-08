import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { createNewUser, clearState, googleAuthFunc } from './../features/auth/authSlice';
import Loader from './../components/Loader';
import Google from './../images/google.png';

const Register = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    const newFormData = {
      [e.target.name]: e.target.value,
    };
    setFormData((prev) => {
      return { ...prev, ...newFormData };
    });
  };

  const handleGoogleAuth = () => {
    dispatch(googleAuthFunc());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || name.trim().length === 0) {
      toast.error('Please enter a valid name');
      return;
    }

    if (!email || email.trim().length === 0) {
      toast.error('Please enter a valid email');
      return;
    }

    if (!password || password.trim().length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    dispatch(createNewUser(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      navigate(`/user/${user.uid}/profile`);
    }

    if (isError) {
      let new_message = '';
      if (message.includes('Error')) {
        new_message =
          message.split(' ')[1] +
          ': ' +
          message
            .split(' ')[2]
            .slice(0, -2)
            .slice(1)
            .split('/')[1]
            .split('-')
            .map((e) => e[0].toUpperCase() + e.slice(1))
            .join(' ');
      } else {
        new_message = message.split(':')[1].slice(1).split('(')[0].slice(0, -1);
      }
      toast.error(new_message);
    }

    dispatch(clearState());
  }, [isSuccess, isError, message, dispatch, navigate, user]);

  return (
    <div className="max-w-xl px-4 py-8 mx-auto sm:px-6 lg:px-12">
      <div className="px-4 py-6 bg-white rounded-xl text-back sm:p-8">
        <h1 className="mb-3 text-3xl font-bold">Register</h1>
        <p className="mb-6">Create an account to access the editor</p>
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="name" className="block text-lg font-medium w-max ">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={name}
              onChange={handleChange}
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
            className="flex items-center justify-center w-full gap-5 text-lg font-bold tracking-widest text-white uppercase transition-all duration-150 ease-linear border-2 rounded h-14 border-back bg-back hover:text-back hover:bg-white"
          >
            {isLoading && <Loader />}
            Register
          </button>
        </form>
        <p className="text-center opacity-80">OR</p>
        <button
          onClick={handleGoogleAuth}
          className="flex items-center justify-center w-full gap-3 mt-6 text-sm font-bold tracking-widest uppercase transition-all duration-150 ease-linear bg-white border-2 rounded sm:text-lg h-14 border-back text-back hover sm:gap-4"
        >
          {isLoading && <Loader />}
          {!isLoading && <img src={Google} alt="google-icon" className="w-4 sm:w-6" />}
          <span>Continue with google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
