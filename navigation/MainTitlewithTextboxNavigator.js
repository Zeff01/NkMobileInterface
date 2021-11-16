import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import MainTitleScreenTextbox from '../screens/MainTitleScreenTextbox';
import AboutScreen from '../screens/AboutScreen'
import HelpScreen from '../screens/HelpScreen'

const Tab = createMaterialTopTabNavigator();

const MainTitleNavigator = props => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },

          }}>
            <Tab.Screen
                name='Home'
                component={MainTitleScreenTextbox}
            />
            <Tab.Screen
                name='About'
                component={AboutScreen}
            />
                 <Tab.Screen
                name='Help'
                component={HelpScreen}
            />
        </Tab.Navigator>
    )
}

export default MainTitleNavigator
