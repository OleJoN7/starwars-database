import React from 'react';
import {withRouter} from 'react-router-dom';

import './ItemDetails.css';
import Loader from '../Loader';

const ItemDetails = (props) => {
      const {image,item,loading,children} = props;
      const {name} = item;
      return (
        loading
        ? <Loader/>
        : <div className="item-details card">
          <img className="item-image"
            src={image}
            alt="No Person Icon" />
          <div className="card-body">
            <button 
              className="btn-back"
              type="button" 
              onClick={() => props.history.goBack()}>back
            </button>
            <h4>{name} :</h4>
            <ul className="list-group list-group-flush">
              {
                React.Children.map(children,child => {
                  return React.cloneElement(child, {item})
                })
              }
            </ul>
          </div>
        </div>
      )
}
export default withRouter(ItemDetails);