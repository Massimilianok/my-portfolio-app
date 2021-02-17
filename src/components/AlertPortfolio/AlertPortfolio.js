import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const AlertPortfolio = ({ variant, message, onCloseAlert }) => {
  return (
    <Alert variant={variant} onClose={onCloseAlert} dismissible>
      <Alert.Heading as="h6">
        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2"/>
        {message}
      </Alert.Heading>
    </Alert>
  );
};

export default AlertPortfolio;
