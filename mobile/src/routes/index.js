import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../contexts/auth';
import BottomRoutes from '../components/menu_horizontal/'
import AuthRoutes from './auth.routes';
// import AppRoutes from './app.routes';
// import TermsRoutes from './terms.routes'
import ServiceTerms from '../pages/ServiceTerms/';


const Routes = () => {
  const {signed, isFirstTimeOnApp} = useAuth();

  if (signed){
    if ( isFirstTimeOnApp === 'true' ){
      return <ServiceTerms />
    }
	  return <BottomRoutes />
  }
  return <AuthRoutes/>;
};

export default Routes;
