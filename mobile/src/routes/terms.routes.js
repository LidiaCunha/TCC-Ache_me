import React from 'react';

import ServiceTerms from "../pages/ServiceTerms";

import {createStackNavigator} from '@react-navigation/stack';

const TermsStack = createStackNavigator();

const TermsRoutes = () => {
  return (
  <TermsStack.Navigator initialRouteName="Terms">
    <TermsStack.Screen name="termos" component={ServiceTerms} options={{title:"Termos de Serviço"}} />
  </TermsStack.Navigator>
  );
};

export default TermsRoutes;