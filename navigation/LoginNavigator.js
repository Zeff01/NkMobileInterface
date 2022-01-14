import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import HomeDrawerNavigator from './HomeDrawerNavigator';

import LoginScreen from '../screens/LoginScreen';
import Colors from '../constants/Colors';


const Stack = createStackNavigator();


const AppNavigator = props => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="HomeDrawer"
                    component={HomeDrawerNavigator}
                    options={{
                        headerShown: false
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
