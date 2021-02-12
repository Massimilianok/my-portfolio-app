import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faFolderPlus,
  faWrench,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import './SectionLab.css';

const SectionLab = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    created_at,
    updated_at,
    languages,
    homepage,
    topics,
  } = repo;

  return (
    <section className="section-lab shadow">
      <div className="section-lab-header d-flex justify-content-end align-items-center">
        <FontAwesomeIcon icon={faCode} />
        <a href={html_url} target="_blank" rel="noreferrer">
          Browse code
        </a>
      </div>
      <div className="section-lab-body">
        <div className="section-lab-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="section-lab-utils d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faFolderPlus}
              className="section-lab-utils-icon"
            />
            <small>{new Date(created_at).toLocaleDateString('en-GB')}</small>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faWrench}
              className="section-lab-utils-icon"
            />
            <small>{new Date(updated_at).toLocaleDateString('en-GB')}</small>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            {homepage ? (
              <>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="section-lab-utils-icon--on"
                />
                <small>
                  <a href={homepage} target="_blank" rel="noreferrer">
                    Live project
                  </a>
                </small>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="section-lab-utils-icon--off"
                />
                <small>Live project</small>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="section-lab-footer d-flex flex-column justify-content-start align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <small>Tech:</small>
          <div className="d-flex justify-content-start align-items-center">
            {languages.map((language, index) => (
              <span key={index} className="badge rounded-pill">
                {language}
              </span>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          <small>Topics:</small>
          {topics.map((topic, index) => (
            <span key={index} className="badge rounded-pill">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionLab;
