import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';

const App = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    document.title = `MARKDOWN | ${year}`;
  }, [year]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden text-base text-white font-default bg-back">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default App;
