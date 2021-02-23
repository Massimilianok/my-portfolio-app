import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AlertPortfolio = ({
  variant,
  message,
  onCloseAlert,
  icon,
  dismissible,
}) => {
  return (
    <Alert
      variant={variant}
      onClose={onCloseAlert}
      dismissible={dismissible}
      className="my-5 shadow"
    >
      <Alert.Heading as="h6" className="mb-0 p-2">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {message}
      </Alert.Heading>
    </Alert>
  );
};

export default AlertPortfolio;
