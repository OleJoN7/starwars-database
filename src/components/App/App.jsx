import React,{Component} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import SwApiService from '../../services/SwApiService';
import Header from '../Header';
import ErrorCatcher from '../ErrorCatcher';
import HomePage from '../../pages/HomePage';
import PeoplePage from '../../pages/PeoplePage';
import PlanetsPage from '../../pages/PlanetsPage';
import StarshipsPage from '../../pages/StarshipsPage';
import {PersonDetails} from '../sw-components/Details';
import {StarshipDetails} from '../sw-components/Details';
import {PlanetDetails} from '../sw-components/Details';
import ChooseDetail from '../ChooseDetail';

import './App.css';


class App extends Component {
  swapiService = new SwApiService();
  render() {
    return (
      <div className="main-container">
        <ErrorCatcher>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <HomePage/>}/>
            <Route exact path="/people" component={PeoplePage}/>
            <Route exact path="/planets" component={PlanetsPage}/>
            <Route exact path="/starships" component={StarshipsPage}/>
            <Route path="/starships/:id" render={props => { 
                return (
                  <StarshipDetails itemId={props.match.params.id}>
                    <ChooseDetail field="model" label="Model"/>
                    <ChooseDetail field="length" label="Length"/>
                    <ChooseDetail field="costInCredits" label="Cost"/>
                    <ChooseDetail field="crew" label="Crew"/>
                    <ChooseDetail field="passengers" label="Passengers"/>
                    <ChooseDetail field="starshipClass" label="Starship class"/>
                    <ChooseDetail field="manufacturer" label="Manufacturer"/>
                    <ChooseDetail field="cargoCapacity" label="Cargo capacity"/>
                  </StarshipDetails>
                )
            }}/>
            <Route path="/planets/:id" render={props => { 
                return (
                  <PlanetDetails itemId={props.match.params.id}>
                    <ChooseDetail field="population" label="Population"/>
                    <ChooseDetail field="rotationPeriod" label="Rotation Period"/>
                    <ChooseDetail field="diameter" label="Diameter"/>
                    <ChooseDetail field="climate" label="Climate"/>
                    <ChooseDetail field="water" label="Surface water"/>
                    <ChooseDetail field="terrain" label="Terrain"/>
                  </PlanetDetails>
                )
            }}/>
            <Route path="/people/:id" render={props => { 
                return (
                  <PersonDetails itemId={props.match.params.id}>
                    <ChooseDetail field="gender" label="Gender"/>
                    <ChooseDetail field="eyeColor" label="Eye Color"/>
                    <ChooseDetail field="hairColor" label="Hair Color"/>
                    <ChooseDetail field="mass" label="Weight"/>
                    <ChooseDetail field="height" label="Height"/>
                  </PersonDetails>
                )
            }}/>
            <Redirect to="/"/>
          </Switch>
        </ErrorCatcher>
      </div>
    );
  }
}

export default App;