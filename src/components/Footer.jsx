import React from 'react';
import { Link } from 'react-router-dom';
import Github from './../images/icons8-github.svg';
import Twitter from './../images/icons8-twitter.svg';
import Instagram from './../images/icons8-instagram.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="flex items-center justify-between gap-6 px-4 sm:px-6 py-9 lg:px-12">
        <Link to="/">
          <span className="font-mono text-3xl font-extrabold uppercase">Markdown</span>
        </Link>
        <nav className="flex gap-4 sm:gap-8">
          <a
            href="https://github.com/vipul-vaishnav"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline"
          >
            <img src={Github} alt="github icon" className="w-12" />
          </a>
          <a
            href="https://twitter.com/__stfuvipul"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline"
          >
            <img src={Twitter} alt="Twitter icon" className="w-12" />
          </a>
          <a
            href="https://instagram.com/__stfuvipul"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline"
          >
            <img src={Instagram} alt="Instagram icon" className="w-12" />
          </a>
        </nav>
      </footer>
      <hr />
      <p className="my-4 text-center">&copy; {year} All rights reversed. | MARKDOWN</p>
    </>
  );
};

export default Footer;
