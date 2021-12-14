import React from 'react';
import { createDrawerNavigator, } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native'

import Colors from '../constants/Colors';
import MainTitleNavigator from './MainTitleNavigator';
import AppNavigator from './AppNavigator';

import DrawerContent from './DrawerContent';

import BudgetScreen from '../screens/BudgetScreen'
import SystemAdminScreen from '../screens/SystemAdminScreen'
import AccountsPayableScreen from '../screens/AccountsPayableScreen'
import CashManagementScreen from '../screens/CashManagementScreen'
import GeneralLedgerScreen from '../screens/GeneralLedgerScreen'
import InventoryManagementScreen from '../screens/InventoryManagementScreen'
import Promtus8Screen from '../screens/Promptus8Screen'
import ProcurementManagementScreen from '../screens/ProcurementManagementScreen'
import PropertPlantEquipmentScreen from '../screens/PropertyPlantEquipmentScreen'
import DocumentControlScreen from '../screens/DocumentControlScreen'
import RequestManagementScreen from '../screens/RequestManagementScreen'
import SystemsGlobalScreen from '../screens/SystemsGlobalScreen'
import WorkflowManagementScreen from '../screens/WorkflowManagementScreen'


const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = props => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>}
                screenOptions={{
                    drawerInactiveTintColor: '#555',
                    itemStyle: { marginVertical: 5, },  
                }}  
            screenOptions={{
                drawerStyle:{
                    backgroundColor: 'transparent'
                },
              }}
            >   
                <Drawer.Screen
                    name='Home'
                    component={AppNavigator}
                    options={{
                        headerTitle: 'NOAH Buisness Applications',
                        headerTitleStyle:{
                            fontFamily: 'AbadiMTStd',
                            fontWeight: 'bold'

                        },
                        headerTintColor: 'white',
                        headerStyle:{
                            backgroundColor: Colors.border_accent2_28396f,
                            height: 40
                        }
                    }}
                />
                <Drawer.Screen
                    name='Budget'
                    component={BudgetScreen}
                />
                <Drawer.Screen
                    name='System Administration'
                    component={SystemAdminScreen}
                />
                <Drawer.Screen
                    name='Accounts Payable (AP)'
                    component={AccountsPayableScreen}
                />
                <Drawer.Screen
                    name='Cash Management (CM)'
                    component={CashManagementScreen}
                />
                <Drawer.Screen
                    name='General Ledger (GL)'
                    component={GeneralLedgerScreen}
                />
                <Drawer.Screen
                    name='Inventory Management'
                    component={InventoryManagementScreen}
                />
                <Drawer.Screen
                    name='Promptus8'
                    component={Promtus8Screen}
                />
                <Drawer.Screen
                    name='Procurement Management'
                    component={ProcurementManagementScreen}
                />
                <Drawer.Screen
                    name='Property Plant Equipment'
                    component={PropertPlantEquipmentScreen}
                />
                <Drawer.Screen
                    name='Document Control (DC)'
                    component={DocumentControlScreen}
                />
                <Drawer.Screen
                    name='Request Management'
                    component={RequestManagementScreen}
                />
                <Drawer.Screen
                    name='Systems Global'
                    component={SystemsGlobalScreen}
                />
                <Drawer.Screen
                    name='Workflow Management'
                    component={WorkflowManagementScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>

    )
}

export default HomeDrawerNavigator
