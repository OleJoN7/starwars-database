import React from 'react';

class Logout extends React.Component {
    componentWillMount() {
        this.props.logoutUser();
    }

    render() {
        return null;
    }
}

export default Logout;