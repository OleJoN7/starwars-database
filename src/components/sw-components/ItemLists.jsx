import React from 'react';
import ItemList from '../ItemList';
import DataListsWrapper from '../HOC-wrappers/DataListsWrapper';
import SwApiService from '../../services/SwApiService';

const swapiService = new SwApiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService

const PersonList = DataListsWrapper(ItemList,getAllPeople);
const PlanetList = DataListsWrapper(ItemList,getAllPlanets);
const StarshipList = DataListsWrapper(ItemList,getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}