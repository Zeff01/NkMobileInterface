import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


import MainTitleNavigator from './MainTitleNavigator';
import MainTitlewithTextboxNavigator from './MainTitlewithTextboxNavigator'
import DemoScreen from '../screens/DemoScreen';
import ColorPaletteScreen from '../screens/ColorPaletteScreen';
import LookUpScreen from '../screens/LookUpScreen'
import Colors from '../constants/Colors';


const Stack = createStackNavigator();


const AppNavigator = props => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Demo"
                    component={DemoScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Main Navigator'
                    component={MainTitleNavigator}
                    options={{
                        headerText: 'Main Text'
                    }}
                />
                     <Stack.Screen
                    name='Main Navigator Textbox'
                    component={MainTitlewithTextboxNavigator}
                    options={{
                        headerText: 'Main Text'
                    }}
                />
                <Stack.Screen
                    name='Color Palette'
                    component={ColorPaletteScreen}
                    options={{
                        headerText: 'Color Palette'
                    }}
                />
                 <Stack.Screen
                    name='Look Up'
                    component={LookUpScreen}
                    options={{
                        headerText: 'Look Up',
                        headerTintColor: Colors.white,
                        headerStyle:{
                            backgroundColor: Colors.headerBackgroundColor
                        }
             
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator;
