// features.jsx
import React from "react";
import "./styles/features.css"; // Ensure the correct path for CSS

function Features() {
  return (
    <div className="features-container">
      <h1>Features of MyEditor</h1>
      <p className="features-description">
        MyEditor provides a variety of tools to enhance your writing and text analysis experience.
      </p>

      <div className="features-list">
        <div className="feature-item">
          <h2>Real-Time Readability Analysis</h2>
          <p>
            Analyze your text's readability as you type. MyEditor calculates the Flesch-Kincaid grade level to
            help you adjust the complexity of your writing.
          </p>
        </div>

        <div className="feature-item">
          <h2>Word and Sentence Count</h2>
          <p>
            Keep track of the number of words and sentences in real-time to better structure your content.
          </p>
        </div>

        <div className="feature-item">
          <h2>Syllable Counting</h2>
          <p>
            Automatically count syllables in your text for better insights into writing complexity.
          </p>
        </div>

        <div className="feature-item">
          <h2>Dark Mode</h2>
          <p>
            Switch between light and dark themes for a comfortable writing environment.
          </p>
        </div>

        <div className="feature-item">
          <h2>Reset Button</h2>
          <p>
            Easily clear your text and reset all stats with the reset button for a fresh start.
          </p>
        </div>

        <div className="feature-item">
          <h2>Statistics Sidebar</h2>
          <p>
            View key metrics like word count, sentence count, and readability grade level in the sidebar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
