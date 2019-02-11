import React from 'react';
import {withRouter} from 'react-router-dom';
import { PersonList } from '../../components/sw-components/ItemLists';
import ErrorCatcher from '../../components/ErrorCatcher';
import RowContainer from '../../components/RowContainer';
import characters from './characters.gif'

import './PeoplePage.css';

const PeoplePage = (props)  => {
    const personList = (
        <ErrorCatcher> 
            <PersonList onItemSelected={itemId => {
               return props.history.push(`/people/${itemId}`)
            }}>
                {item => `${item.name}, Birth Date: ${item.birthYear}`}
            </PersonList>
        </ErrorCatcher> 
    ) 
   const personImg = (
       <ErrorCatcher>
         <div className="img-wrapper">
             <img src={characters} alt="starship icon"/>
         </div>
       </ErrorCatcher> 
    )
    return(
        <React.Fragment>
            <h3 className="page-header">Select Character</h3>
            <RowContainer left={personList} right={personImg}/>
        </React.Fragment>
    )
}

export default withRouter(PeoplePage);