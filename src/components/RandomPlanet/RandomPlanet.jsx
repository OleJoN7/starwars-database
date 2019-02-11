import React from 'react';
import SwApiService from '../../services/SwApiService';
import Loader from '../Loader';
import PlanetView from './PlanetView';
import Error from '../Error';

import './RandomPlanet.css';

class RandomPlanet extends React.Component {
  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
      error:false
    }
    // this.updatePlanet();
    // this.interval = setInterval(this.updatePlanet,3000) //better to use it in lifecycle didMount
  }
  swapiService = new SwApiService();

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet,9000);
  }

  componentWillUnmount() {
   clearInterval(this.interval)
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()* 17) + 2;
    this.swapiService.getPlanet(id)
    .then(newPlanet => {
       this.setState({
          planet:newPlanet,
          loading:false
       })
    })
    .catch(err => {
      this.setState(({error,loading}) => {
        return {
          error:!error,
          loading:!loading
        }
      })
    })
  }
  render() {
    const {planet,loading,error} = this.state;

    const errorMes = error ? <Error/> : null;
    const loader = loading ? <Loader/> : null;
    const content = !(error || loading) ? <PlanetView planet={planet}/> : null
    return (
      <div className="random-planet jumbotron rounded">
        {errorMes}
        {loader}
        {content}
      </div>
    );
  }
}
export default RandomPlanet;