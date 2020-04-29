import React, { Component } from 'react';

class BrowseAllView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.programs}
            </div>
        )
    }
}

export default BrowseAllView;