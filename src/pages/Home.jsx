import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './../images/markdown.png';
import ReactIcon from './../images/react-js-icon.svg';
import TailwindIcon from './../images/tailwind-css-icon.svg';
import ReduxIcon from './../images/redux-icon.svg';
import FirebaseIcon from './../images/google-firebase-icon.svg';
import Footer from './../components/Footer';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {/* SECTION MAIN */}
      <div className="px-4 py-6 sm:px-6 lg:px-12 lg:flex lg:items-center lg:gap-2 xl:gap-0">
        <div className="w-full">
          <h1 className="mb-5 font-mono text-4xl font-extrabold leading-snug sm:text-6xl xl:text-7xl sm:mb-6">
            Hi! <span className="text-cyan-400">Welcome</span> To{' '}
            <span className="text-green-400 uppercase">Markdown</span> Editor{' '}
            <span className="text-yellow-400">Tool</span>
          </h1>
          <h2 className="mb-6 font-mono text-xl sm:mb-8 sm:text-2xl xl:text-3xl">
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
          <p className="mb-8 text-lg leading-normal font-regular opacity-80 sm:mb-10 lg:mr-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magni fuga quisquam ipsum culpa maiores
            odit voluptatem dicta repudiandae, ipsam vero provident nisi sunt illo tempora. Asperiores doloremque
            facilis blanditiis.
          </p>
          <button
            onClick={() => navigate(`/user/${user?.uid}/editor`)}
            className="w-full text-lg font-bold tracking-wider uppercase bg-blue-500 rounded h-14 hover:opacity-80 lg:max-w-xs"
          >
            Get Started
          </button>
        </div>
        <div className="hidden w-full overflow-hidden rounded-3xl lg:block">
          <img src={Image} alt="markdown-icon" className="block ml-auto" />
        </div>
      </div>
      {/* SECTION - 2 */}
      <div className="py-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,192C96,192,192,192,288,202.7C384,213,480,235,576,234.7C672,235,768,213,864,181.3C960,149,1056,107,1152,80C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="w-full px-4 py-12 bg-white sm:px-6 md:py-8 lg:py-4 lg:px-12 text-back">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-center sm:text-5xl lg:text-6xl">Built Using</h2>
          <p className="max-w-4xl mx-auto mb-12 text-xl leading-normal md:text-2xl md:text-center font-regular opacity-80 sm:mb-10">
            We have used cutting edge, industry loved and the most popular{' '}
            <span className="font-bold text-purple-600">frameworks</span> along with the most popular{' '}
            <span className="font-bold text-red-500">state management</span> solution and the most popular{' '}
            <span className="font-bold text-yellow-500">Backend-as-a-service (BaaS) Platform</span> to build{' '}
            <span className="font-mono font-extrabold">MARKDOWN</span>{' '}
          </p>
          <div className="flex flex-col max-w-5xl gap-12 mx-auto sm:flex-row sm:items-center">
            <div className="w-full">
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <img src={ReactIcon} alt="reactjs-icon" className="w-24 h-auto mx-auto sm:w-32" />
              </a>
            </div>
            <div className="w-full">
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                <img src={TailwindIcon} alt="tailwindcss-icon" className="w-24 h-auto mx-auto sm:w-32" />
              </a>
            </div>
            <div className="w-full">
              <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
                <img src={ReduxIcon} alt="redux-icon" className="w-24 h-auto mx-auto sm:w-32" />
              </a>
            </div>
            <div className="w-full">
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                <img src={FirebaseIcon} alt="firebase-icon" className="w-24 h-auto mx-auto sm:w-32" />
              </a>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,192C96,192,192,192,288,202.7C384,213,480,235,576,234.7C672,235,768,213,864,181.3C960,149,1056,107,1152,80C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/* SECTION - 3 */}
      <div className="px-4 py-6 pb-12 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-5xl font-bold leading-snug sm:text-6xl xl:text-7xl sm:mb-6 lg:leading-normal">
            That's probably enough for now. What are you waiting for?
          </h2>
          <button
            onClick={() => navigate(`/user/${user?.uid}/editor`)}
            className="w-full text-lg font-bold tracking-wider uppercase bg-blue-500 rounded h-14 hover:opacity-80 lg:max-w-xs"
          >
            Go To Editor
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
