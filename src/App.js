import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Editor from './pages/Editor';
import Details from './pages/Details';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import PrivateComponent from './components/PrivateComponent';

const App = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    document.title = `MARKDOWN | ${year}`;
  }, [year]);

  return (
    <Provider store={store}>
      <div className="w-full min-h-screen overflow-x-hidden text-base text-white  font-default bg-back">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user/:id" element={<PrivateComponent />}>
            <Route index exact element={<Details />} />
            <Route path="details" element={<Details />} />
            <Route path="editor" element={<Editor />} />
          </Route>
        </Routes>
        <ToastContainer theme="colored" />
      </div>
    </Provider>
  );
};

export default App;
