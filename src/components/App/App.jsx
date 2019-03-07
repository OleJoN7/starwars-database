import React,{Component} from 'react';
import {Route, Switch,Redirect,withRouter} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
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
import Signin from '../../pages/Signin';
import Register from '../../pages/Register';
import Logout from '../../pages/Logout';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  swapiService = new SwApiService();

  loadUser = (data) => {
    this.setState({
      user: {
        id:data.id,
        name:data.name,
        email:data.email,
        joined:data.joined
      }
    },() => this.props.history.push('/people') )
    console.log(this.state.user)
  }
  logoutUser = () => {
    this.setState({user:null},() => this.props.history.push('/'))
  }
 
  render() {
    return (
      <div className="main-container">
        <ErrorCatcher>
          <Header user={this.state.user}/>
          <Switch>
            <Route exact path="/" render={() => <HomePage/>}/>
            <Route 
              exact
              path="/signin" 
              render={() => <Signin loadUser={this.loadUser} />}
            />
            <Route 
              exact 
              path="/logout" 
              render={() => <Logout logoutUser={this.logoutUser}/>} 
            />
            <Route 
              exact 
              path="/register" 
              render={() => <Register loadUser={this.loadUser} />}
            />  
            <PrivateRoute 
              exact 
              path="/people" 
              component={PeoplePage}
              user={this.state.user}
            />
            <PrivateRoute 
              exact 
              path="/planets" 
              component={PlanetsPage} 
              user={this.state.user}
            />
            <PrivateRoute 
              exact 
              path="/starships" 
              component={StarshipsPage}
              user={this.state.user}
            />
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

export default withRouter(App);