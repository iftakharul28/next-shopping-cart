import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a href="https://github.com/iftakharul28" target="_blank">
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:iftakharul28@gmail.com" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://www.linkedin.com/in/iftakharul-alam" target="_blank">
          Say Hi on Linkedin
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Food</strong> - Organic Green Store
      </p>
    </footer>
  );
};

export default Footer;
