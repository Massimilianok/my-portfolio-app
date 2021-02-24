import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faAt,
  faEnvelopeOpenText,
  faLaptopCode,
  faPaperPlane,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import './ContactMe.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertPortfolio from '../../components/AlertPortfolio/AlertPortfolio';

const ContactMe = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({});
  const [sentAlert, setSentAlert] = useState(false);
  const form = useRef();

  useEffect(() => {
    initFormState();
  }, []);

  const initFormState = () => {
    // Setup formData state based on the inputs form
    for (let input of form.current) {
      if (input.name)
        setFormData((prevState) => ({ ...prevState, [input.name]: '' }));
    }
  };

  const handleInputUser = (e) => {
    // Sanitize input
    const input = e.target.value.trim();
    if (input) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: input,
      }));
    } else {
      // Avoid the input is empty
      e.target.value = '';
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Check if user fills all fields
    if (form.current.checkValidity()) {
      console.log(formData);
      setSentAlert(true);
      initFormState();
    } else {
      setValidated(true);
    }
  };

  const handleAlertClose = () => {
    setSentAlert(false);
  };

  return (
    <>
      {sentAlert ? (
        <AlertPortfolio
          variant="success"
          message="The message has been sent"
          onCloseAlert={handleAlertClose}
          icon={faCheckCircle}
          dismissible={true}
        />
      ) : (
        <Form
          noValidate
          validated={validated}
          className="form-portfolio shadow p-3 mb-5"
          onSubmit={handleSubmitForm}
          ref={form}
        >
          <div className="d-flex flex-column justify-content-center align-items-center mb-4 py-3">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="form-portfolio-icon"
            />
            <h2 className="mb-0">Send me an email</h2>
          </div>
          <Form.Group controlId="formFirstName">
            <Form.Label className="form-label">
              <FontAwesomeIcon icon={faUser} className="form-label-icon" />
              <span>Full name</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              className="form-input-filed"
              name="fullName"
              onChange={handleInputUser}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your full name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className="form-label">
              <FontAwesomeIcon icon={faAt} className="form-label-icon" />
              <span>Email address</span>
            </Form.Label>
            <Form.Control
              required
              type="email"
              className="form-input-filed"
              name="email"
              onChange={handleInputUser}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label className="form-label">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="form-label-icon"
              />
              <span>Message</span>
            </Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={4}
              className="form-input-filed"
              name="message"
              onChange={handleInputUser}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your message.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="text-right py-3">
            <Button type="submit" className="form-button">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
              Send
            </Button>
          </div>
        </Form>
      )}
    </>
  );
};

export default ContactMe;
