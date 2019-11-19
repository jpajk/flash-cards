import React from 'react';
import {createAppContainer} from "react-navigation";
import AppNavigation from './src/navigation';

const AppContainer = createAppContainer(AppNavigation);

const App = () => {
  return <AppContainer />;
};

export default App;
