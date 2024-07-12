import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <h1>Welcome to Solo Travel!</h1>
      <p>Here are some tips and resources to get you started on your journey.</p>
      <ul>
        <li>Research your destination.</li>
        <li>Pack light and smart.</li>
        <li>Stay connected with family and friends.</li>
        <li>Be open to new experiences.</li>
      </ul>
      <Link to="/start-adventure" className="get-started-button">Start Your Adventure!</Link>
    </div>
  );
};

export default GetStarted;
