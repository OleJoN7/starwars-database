import React from 'react';
import ItemDetails from '../ItemDetails';
import SwApiService from '../../services/SwApiService';
import DataDetailsWrapper from '../HOC-wrappers/DataDetailsWrapper'

const swapiService = new SwApiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService

const PersonDetails = DataDetailsWrapper(ItemDetails,getPerson,getPersonImage);
const PlanetDetails = DataDetailsWrapper(ItemDetails,getPlanet,getPlanetImage);
const StarshipDetails = DataDetailsWrapper(ItemDetails,getStarship,getStarshipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}