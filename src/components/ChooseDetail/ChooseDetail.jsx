import React from 'react';

const ChooseDetail = ({item,field,label}) => {
    return (
        <li className="list-group-item">
            <span className="element">{`${label} :`}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export default ChooseDetail;