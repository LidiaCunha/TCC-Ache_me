import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes.js';
import AppRoutes from './app.routes';

const Routes = () => {
  const {signed} = useAuth();
  // const {signed, loading} = useContext(AuthContext);

  // if (loading) {
  //   return(
  //     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  //       <ActivityIndicator size="large" color="#666"/>
  //     </View>
  //   );
  // };

  return signed ? <AppRoutes/> : <AuthRoutes/>;
};

export default Routes;