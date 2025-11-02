import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10 mt-auto">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/start-learning" className="link link-hover">Start Learning</Link>
        <Link to="/tutorial" className="link link-hover">Tutorial</Link>
        <Link to="/about" className="link link-hover">About</Link>
      </nav>
      <aside>
        <p className="text-lg font-semibold">TangoTime</p>
        <p className="text-sm">Master Japanese vocabulary</p>
        <p className="text-xs mt-2">© 2024 TangoTime. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;

