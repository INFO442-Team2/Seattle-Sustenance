import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const WarningAlert = (props) => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    return (
        <Alert color="warning" isOpen={visible} toggle={onDismiss}>
            No results found. Please refine your search.
        </Alert>
    );
}

export default WarningAlert;