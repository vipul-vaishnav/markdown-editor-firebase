import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-6 py-9 lg:px-12">
      <Link to="/">
        <span className="font-mono text-3xl font-extrabold uppercase">Markdown</span>
      </Link>
      <nav className="flex gap-6 sm:gap-8">
        <a
          href="https://github.com/vipul-vaishnav"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline"
        >
          Github
        </a>
        <a
          href="https://twitter.com/__stfuvipul"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com/__stfuvipul"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline"
        >
          Instagram
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
