import React from 'react';
import {withRouter} from 'react-router-dom';
import { PlanetList } from '../../components/sw-components/ItemLists';
import ErrorCatcher from '../../components/ErrorCatcher';
import RowContainer from '../../components/RowContainer';
import planet from './planets.gif';

import './PlanetsPage.css';

const PlanetsPage = (props) => {
    const planetList = (
        <ErrorCatcher>
            <PlanetList onItemSelected={itemId => {
                return props.history.push(`/planets/${itemId}`)
            }}>
                {item => `${item.name}, Population: ${item.population}`}
            </PlanetList>
        </ErrorCatcher>
    )
    const planetImg = (
        <ErrorCatcher> 
           <div className="img-wrapper">
              <img src={planet} alt="starship icon"/>
           </div>
        </ErrorCatcher>   
    )
    return(
        <React.Fragment>
            <h3 className="page-header">Select Planet</h3>
            <RowContainer left={planetList} right={planetImg}/>
        </React.Fragment>
    )
}

export default withRouter(PlanetsPage);