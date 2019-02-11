import React from 'react';

import './RowContainer.css'

const RowContainer = (props) => {
    return (
        <div className="d-flex item-wrapper">                
            <div className="col-md-6 item">
                {props.left}
            </div>
            <div className="col-md-6 item">
                {props.right}
            </div>
        </div>
    )
}

export default RowContainer;