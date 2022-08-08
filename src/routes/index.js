import React , {useContext} from 'react';
import {AuthContext, AuthProvider} from '../contexts/auth';
import { View, Text } from 'react-native';


import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes(){
    const{signed} = useContext(AuthContext);

    return(
      signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;