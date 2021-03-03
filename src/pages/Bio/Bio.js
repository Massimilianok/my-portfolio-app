import React from 'react';
import './Bio.css';
import Badge from 'react-bootstrap/Badge';

const Bio = () => {
  return (
    <>
      <section className="section-bio shadow p-3 mb-5">
        <h2 className="section-bio-title mb-3 text-center py-3">About me</h2>
        <p>
          A detail-oriented Web Developer with three years of hands-on
          experience efficiently coding websites. Constantly seeking learning
          opportunities, following industry’s trends and advancements. I’ve
          recently upskilled my knowledge in JavaScript, React, Node.js and
          Express.js. Focus on elegant solutions and user’s needs and endless
          curiosity - these are three things I can promise to my future team.
        </p>
      </section>
      <section className="section-bio shadow p-3 mb-5">
        <h2 className="section-bio-title mb-3 text-center py-3">Tech Skills</h2>
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          <Badge pill className="section-bio-skill m-2">
            HTML
          </Badge>
          <Badge pill className="section-bio-skill m-2">
            CSS
          </Badge>
          <Badge pill className="section-bio-skill m-2">
            JavaScript
          </Badge>
          <Badge pill className="section-bio-skill m-2">
            Node.js
          </Badge>
          <Badge pill className="section-bio-skill m-2">
            Bootstrap
          </Badge>
          <Badge pill className="section-bio-skill m-2">
            React
          </Badge>
          <Badge pill className="section-bio-skill m-2">
            Express.js
          </Badge>
          <Badge pill className="section-bio-skill m-2">
            Git
          </Badge>
          <Badge pill className="section-bio-skill m-2">
            npm
          </Badge>
          <Badge pill className="section-bio-skill m-2">
            Webpack
          </Badge>
        </div>
      </section>
      <section className="section-bio shadow p-3 mb-5">
        <h2 className="section-bio-title mb-3 text-center py-3">Soft Skills</h2>
        <ul className="section-bio-list">
          <li>Open-minded</li>
          <li>Flexible</li>
          <li>Committed</li>
          <li>Team player</li>
          <li>Cross-cultural skills</li>
          <li>Problem solving</li>
          <li>Passionate coder </li>
        </ul>
      </section>
    </>
  );
};

export default Bio;
