import React from 'react';
import './Bio.css';
import Badge from 'react-bootstrap/Badge';

const Bio = () => {
  return (
    <>
      <section className="section-bio shadow p-3 mb-5">
        <h2 className="section-bio-title mb-3 text-center">About me</h2>
        <ul className="section-bio-list">
          <li>
            I graduated in accounting and programming in Italy (High school
            diploma).
          </li>
          <li>
            I got the first job thanks to self-taught study and training
            courses.
          </li>
          <li>
            Three years of hands-on experience efficiently coding of websites in
            Italy.
          </li>
          <li>
            I recently moved to Hamburg to look for new training opportunities
            and new job challenges.
          </li>
          <li>
            Right now I am following a Bootcamp at the WBS Coding School in
            Berlin to learn new technologies and more modern web development
            techniques.
          </li>
          <li>
            I still consider myself a junior professional, but I am constantly
            seeking opportunities to learn new things and keep myself up to date
            with industry trends and advancements.
          </li>
          <li>
            Constantly learning, looking for the perfect and elegant solution
            and curiosity are the three things that a team I join can benefit
            from.
          </li>
        </ul>
      </section>
      <section className="section-bio shadow p-3 mb-5">
        <h2 className="section-bio-title mb-3 text-center">Tech Skills</h2>
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
            Webpack
          </Badge>
        </div>
      </section>
      <section className="section-bio shadow p-3">
        <h2 className="section-bio-title mb-3 text-center">Soft Skills</h2>
        <ul className="section-bio-list">
          <li>Open-minded</li>
          <li>Flexible</li>
          <li>Committed</li>
          <li>Team player</li>
          <li>Cross-cultural skills</li>
        </ul>
      </section>
    </>
  );
};

export default Bio;
