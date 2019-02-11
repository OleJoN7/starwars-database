import React from 'react';
import Error from '../Error';

class ErrorCatcher extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError:false
        }
    }

    componentDidCatch() {
        this.setState(({hasError}) => {
          return {
            hasError:!hasError
          }
        })
    }

    render() {
        if(this.state.hasError) {
            return <Error/>
        } else {
            return (
                this.props.children
            )
        }
    }
}

export default ErrorCatcher