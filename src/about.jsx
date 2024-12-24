import React from 'react';
import "./styles/about.css";

const About = ({ isDarkMode }) => {
  return (
    <div className={`about-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1>About MyEditor</h1>
      <p>
        MyEditor is a simple yet powerful text editor designed to help users
        improve their writing. It calculates readability scores and grade levels
        using algorithms like Flesch-Kincaid. The editor offers real-time
        statistics such as word count, sentence count, and syllable count. It
        also features a dark mode for a better writing experience.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Real-time readability analysis</li>
        <li>Word, sentence, and syllable counts</li>
        <li>Dark mode toggle</li>
        <li>Text editor with grade-level calculations</li>
      </ul>
      <p>
        Whether you're writing essays, reports, or casual content, MyEditor
        helps ensure that your writing is clear and easy to read.
      </p>
    </div>
  );
};

export default About;
