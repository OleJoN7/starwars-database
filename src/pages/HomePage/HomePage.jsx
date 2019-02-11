import React from 'react';
import {withRouter} from 'react-router-dom';
import RandomPlanet from '../../components/RandomPlanet';

import './HomePage.css'

const HomePage = () => {
    return (
        <React.Fragment>
            <RandomPlanet/>
            <div className="home-wrapper">
            <h2>Welcome to StarWars DataBase</h2>
            <video autoPlay loop muted className="video">
                    <source src="/videos/18mb.mp4" type="video/mp4"/>
                </video>
            </div>
        </React.Fragment>
    )
}

export default withRouter(HomePage);