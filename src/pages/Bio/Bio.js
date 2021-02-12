import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <>
      <section className="section-bio shadow p-3 mb-5">
        <h2 className="section-bio-title mb-3 text-center">About me</h2>
        <ul className="section-bio-list">
          <li>
            Three years of hands-on experience efficiently coding of websites
            and WebApp.
          </li>
          <li>
            I got the first job thanks to self-taught study and training
            courses.
          </li>
          <li>
            I graduated in accounting and programming (High school diploma).
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
          <span className="badge rounded-pill section-bio-skill m-2">HTML</span>
          <span className="badge rounded-pill section-bio-skill m-2">CSS</span>
          <span className="badge rounded-pill section-bio-skill m-2">
            JavaScript
          </span>
          <span className="badge rounded-pill section-bio-skill m-2">
            React
          </span>
          <span className="badge rounded-pill section-bio-skill m-2">Git</span>
          <span className="badge rounded-pill section-bio-skill m-2">
            Bootstrap
          </span>
          <span className="badge rounded-pill section-bio-skill m-2">
            webpack
          </span>
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
