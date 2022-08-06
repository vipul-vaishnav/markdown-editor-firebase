import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './../images/markdown.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 pt-6 lg:px-12 lg:flex lg:items-center lg:gap-2 xl:gap-0">
      <div className="w-full">
        <h1 className="font-mono text-4xl sm:text-6xl xl:text-7xl sm:mb-6 font-extrabold mb-5 leading-snug">
          Hi! <span className="text-cyan-400">Welcome</span> To <span className="text-green-400">Markdown</span> Editor{' '}
          <span className="text-yellow-400">Tool</span>
        </h1>
        <h2 className="font-mono sm:mb-8 mb-6 text-xl sm:text-2xl xl:text-3xl">
          Hello!, <span className="font-extrabold">Everyone</span> from{' '}
          <a
            href="http://github.com/vipul-vaishnav/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold hover:underline hover:italic opacity-80"
          >
            Vipul Vaishnav
          </a>
        </h2>
        <p className="font-regular leading-normal opacity-80 text-lg mb-8 sm:mb-10 lg:mr-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magni fuga quisquam ipsum culpa maiores odit
          voluptatem dicta repudiandae, ipsam vero provident nisi sunt illo tempora. Asperiores doloremque facilis
          blanditiis.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="uppercase font-bold w-full rounded bg-blue-500 h-14 text-lg tracking-wider hover:opacity-80 lg:max-w-xs"
        >
          Get Started
        </button>
      </div>
      <div className="w-full rounded-3xl overflow-hidden hidden lg:block">
        <img src={Image} alt="markdown-icon" className="block ml-auto" />
      </div>
    </div>
  );
};

export default Home;
