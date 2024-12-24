/* 
Author: Adeel Ahmed Qureshi
Date: 12/12/2024
Project Intro: Text Editor that help you out to analyse your text.
*/
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Features from "./Features";
import About from "./about"; // Import the About component
import Contact from "./contact"; // Import the Contact component

import { syllable } from "syllable";
import "./styles/global.css";

function App() {
  const [text, setText] = useState(""); // Persist text state across pages
  const [gradeLevel, setGradeLevel] = useState(null); // Persist grade level
  const [isDarkMode, setIsDarkMode] = useState(false); // Persist theme state
  const contentRef = useRef(null); // Ref for contentEditable div

  // Utility functions
  const countWords = (input) => (input.trim().length === 0 ? 0 : input.trim().split(/\s+/).length);
  const countSentences = (input) => {
    const sentenceRegex = /[^.!?]+[.!?]*\s*/g;
    const sentences = input.match(sentenceRegex);
    return sentences ? sentences.length : 0;
  };
  const countTotalSyllables = (input) => {
    const words = input.trim().split(/\s+/);
    return words.reduce((total, word) => total + syllable(word), 0);
  };
  const calculateGradeLevel = (input) => {
    const words = countWords(input);
    const sentences = countSentences(input);
    const syllables = countTotalSyllables(input);

    if (words === 0 || sentences === 0) return "N/A";

    let grade = 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59;
    if (grade < 1) return 0;
    if (grade >= 13 && grade <= 15) return "Undergraduate";
    if (grade >= 16 && grade <= 18) return "Postgraduate";
    if (grade > 18) return "Advanced/Postdoctoral";
    return Math.max(0, Math.floor(grade));
  };

  // Handlers
  const handleTextChange = (e) => {
    const inputText = e.target.innerText;
    setText(inputText);
    setGradeLevel(calculateGradeLevel(inputText));
  };

  const handleReset = () => {
    setText("");
    setGradeLevel(null);
    if (contentRef.current) {
      contentRef.current.innerText = "";
    }
  };

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <Router>
      <div
        className={isDarkMode ? "dark-mode" : "light-mode"}
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        {/* Navbar */}
        <Navbar isDarkMode={isDarkMode} />

        {/* Main Content Area */}
        <div style={{ display: "flex", flex: 1, marginTop: "80px" }}>
          {/* Sidebar */}
          <div className="sidebar">
            <h2>Readability Stats</h2>
            <p>Words: {countWords(text)}</p>
            <p>Characters: {text.replace(/\s+/g, "").length}</p>
            <p>Sentences: {countSentences(text)}</p>
            <p>Grade Level: {gradeLevel || "N/A"}</p>
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
            <button className="btn" onClick={toggleTheme}>
              Toggle {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Editor or Features */}
          <div className="editor">
            <Routes>
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} /> {/* Add About route */}
              <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />

              <Route
                path="/"
                element={
                  <div
                    className="content-editable"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={handleTextChange}
                    ref={contentRef}
                  >
                    {/* Keep editor empty on reset or app launch */}
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

