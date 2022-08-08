import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
    <AuthStack.Navigator>
        <AuthStack.Screen 
        name="SignIn"
        component={SignIn}
        options={{headerShown:false}}
        />

        <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
            headerStyle:{
                backgroundColor: '#ededed',
                borderBottomWidth: 1,
                borderBottomColor: '#0b4ff2'
            },
            headerTintColor: '#131313',
            headerBackTitleVisible: false,
            headerTitle:'Voltar'
        }}
        
        />
    </AuthStack.Navigator>
    );
}

export default AuthRoutes;
