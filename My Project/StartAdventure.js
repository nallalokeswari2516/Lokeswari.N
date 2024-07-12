import React from 'react';
import { Link } from 'react-router-dom';

const StartAdventure = () => {
  return (
    <div className="start-adventure-container">
      <h1>Your Adventure Begins Here!</h1>
      <p>Here are some great tips to get the most out of your solo travel experience:</p>
      <ul>
        <li>Stay safe and trust your instincts.</li>
        <li>Engage with locals for authentic experiences.</li>
        <li>Keep your important documents secure.</li>
        <li>Document your journey to cherish memories.</li>
      </ul>
      <Link to="/explore-more" className="start-adventure-button">Explore More!</Link> {/* Updated link */}
    </div>
  );
};

export default StartAdventure;
