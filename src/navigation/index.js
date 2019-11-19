import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DecksScreen from "../containers/decks/index";

const AppNavigator = createStackNavigator({
    Home: {
        screen: DecksScreen,
    },
});

export default createAppContainer(AppNavigator);
