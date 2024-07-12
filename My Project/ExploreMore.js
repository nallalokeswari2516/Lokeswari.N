import React from 'react';
import { Link } from 'react-router-dom';

const ExploreMore = () => {
  return (
    <div className="explore-more-container">
      <h1>Explore More!</h1>
      <p>Here you can find additional resources and tips for your solo travels:</p>
      <ul>
        <li>Travel blogs and stories</li>
        <li>Helpful packing lists</li>
        <li>Must-see destinations</li>
        <li>Solo travel communities and forums</li>
      </ul>
      <Link to="/join-community" className="explore-more-button">Join the Community</Link> {/* Updated link */}
    </div>
  );
};

export default ExploreMore;
