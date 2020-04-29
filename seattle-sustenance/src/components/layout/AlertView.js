import React, { Component } from 'react';

class AlertView extends Component {
    constructor(props) {
        super(props)
    }

    // displays error message; will need bootstrap
    render() {
        return (
            <div>
                { this.props.errorMessage }
            </div>
        )
    }
}

export default AlertView;