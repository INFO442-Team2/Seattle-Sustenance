import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const WarningAlert = (props) => {
  return (
    <Alert color="warning">
        No results found. <a href="/find" className="alert-link">Click here to return to search.</a>
    </Alert>
  );
}

export default WarningAlert;