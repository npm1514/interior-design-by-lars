import React, { Component } from 'react';
import Work from '../pages/WorkPage';

class Root extends Component {
    render() {
        return <Work data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;