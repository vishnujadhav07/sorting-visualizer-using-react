import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built by{' '}
        <span className="Footer__Heart">&hearts;</span> {' '}
        <a
          href="https://www.linkedin.com/in/vishnu-jadhav-363ba0239"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Vishnu Jadhav
        </a>
      </section>

      <section className="Footer__Items">
        {/* <a
          href="https://youtu.be/JFjvVmvC3pQ"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Demo
        </a> */}
        <a
          href="https://github.com/vishnujadhav07/sorting-visualizer-using-react"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
