import React, { Component } from 'react';

class FilteredResultsView extends Component {
    constructor(props) {
        super(props)
    }

    // displays result
    render() {
        return (
            <div>
                {this.props.results}
            </div>
        )
    }
}

export default FilteredResultsView;