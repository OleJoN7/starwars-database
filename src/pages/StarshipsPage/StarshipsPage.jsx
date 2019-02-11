import React from 'react';
import {withRouter} from 'react-router-dom';
import { StarshipList } from '../../components/sw-components/ItemLists';
import ErrorCatcher from '../../components/ErrorCatcher';
import RowContainer from '../../components/RowContainer';
import starship from './starships.gif';
import './StarshipsPage.css';

const StarshipsPage = ({history}) => {
    const starshipList = (
        <ErrorCatcher>
            <StarshipList onItemSelected={itemId => {
                return history.push(`/starships/${itemId}`)
            }}>
                {item => `${item.name}, Model: ${item.model}`}
            </StarshipList>
        </ErrorCatcher>
    )
    const starshipImg = (
        <ErrorCatcher>
          <div className="img-wrapper">
              <img src={starship} alt="starship icon"/>
          </div>
        </ErrorCatcher>
    )
    return (
        <React.Fragment>
            <h3 className="page-header">Select Starship</h3>
            <RowContainer left={starshipList} right={starshipImg}/>
        </React.Fragment>
    )
}

export default withRouter(StarshipsPage);