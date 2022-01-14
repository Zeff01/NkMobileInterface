import React from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import NkDrawerItem from '../components/nkDrawerItem';
import NkSearchBar from '../components/nkSearchBar';
import { NwClass } from '../constants/NwClass';
import Colors from '../constants/Colors';
import { useState } from 'react';
import { useEffect } from 'react';

/**
 * Creating a list of routes and subroutes, so that the state can replace the items based on the item clicked
 */
const drawerItems = [{
    iconName: 'home-outline',
    title: 'Home',
    screenName: 'Home',

}, {
    iconName: 'account-outline',
    title: 'Budget',
    // screenName: 'Budget',
    subMenu: [
        {
            iconName: 'book-outline',
            title: 'Data Configuration',
            subMenu: [
                {
                    iconName: 'book-outline',
                    title: 'A01 Budget Period',
                    screenName: 'Progress Screen',
                },
                {
                    iconName: 'book-outline',
                    title: 'A02 Budget Lock Configuration',
                    screenName: 'Progress Screen',
                },
                {
                    iconName: 'book-outline',
                    title: 'A03 SBU Validation',
                    screenName: 'Progress Screen',
                },
                {
                    iconName: 'book-outline',
                    title: 'A04 CAPEX Budget Transfer',
                    screenName: 'Progress Screen',
                },
            ]
        },
        {
            iconName: 'book-outline',
            title: 'Data Setup',
            screenName: 'Progress Screen',
        },
        {
            iconName: 'book-outline',
            title: 'Data Entry',
            screenName: 'Progress Screen',
        },
        {
            iconName: 'book-outline',
            title: 'Document Entry',
            screenName: 'Progress Screen',
        },
        {
            iconName: 'book-outline',
            title: 'Posting and Utitlities',
            screenName: 'Progress Screen',
        },
        {
            iconName: 'book-outline',
            title: 'Reports and Inquiry',
            screenName: 'Progress Screen',
        },
    ]
},
{
    iconName: 'bookmark-outline',
    title: 'System Administration',
    screenName: 'System Administration',
},
{
    iconName: 'cog-outline',
    title: 'Accounts Payable (AP)',
    screenName: 'Accounts Payable',
},
{
    iconName: 'account-check-outline',
    title: 'Cash Management (CM)',
    screenName: 'Cash Management',
},
{
    iconName: 'cash-usd-outline',
    title: 'General Ledger (GL)',
    screenName: 'General Ledger',
},
{
    iconName: 'account-cash-outline',
    title: 'Inventory Management',
    screenName: 'Inventory Management',
},
{
    iconName: 'numeric-8-circle-outline',
    title: 'Promptus8',
    screenName: 'Promptus8',
},
{
    iconName: 'email-multiple-outline',
    title: 'Procurement Management',
    screenName: 'Procurement Management',
},
{
    iconName: 'home-search-outline',
    title: 'Property Plant Equipment',
    screenName: 'Property Plant Equipment',
},
{
    iconName: 'file-document-edit-outline',
    title: 'Document Control (DC)',
    screenName: 'Document Control',
},
{
    iconName: 'credit-card-wireless-outline',
    title: 'Systems Global (SG)',
    screenName: 'Systems Global',
},
{
    iconName: 'text-box-search-outline',
    title: 'Request Management',
    screenName: 'Request Management ',
},
{
    iconName: 'head-check-outline',
    title: 'Workflow Management',
    screenName: 'Workflow Management',
},

];



const DrawerContent = props => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false)

    const [menuItems, setMenuItems] = useState(drawerItems);
    const [isSubMenu, setIsSubMenu] = useState(false);



    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <View style={{ flex: 1, }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, }}>
                                <Title style={styles.title}>Jzeff Somera</Title>
                                <Caption style={styles.caption}>@Zeff001</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Follwoing</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <NkSearchBar
                        style={[NwClass.txtbox, styles.searchBar]}
                    />

                    <Drawer.Section style={styles.drawerSection}>
                        <View style={styles.modulesContainer}>
                            <Icon name='book-outline' size={25} color='black' />
                            <Text style={styles.modules}>Modules</Text>
                        </View>

                        {isSubMenu && (
                            <TouchableOpacity
                                onPress={() => {
                                    setMenuItems(drawerItems);
                                    setIsSubMenu(false);
                                }}
                                style={styles.backButton}
                            >
                                <Ionicons name="chevron-back" size={20} color="black" />
                                <Text>Back</Text>
                            </TouchableOpacity>
                        )}
                        <ScrollView>
                            {menuItems.map((item) => {
                                return (
                                    <NkDrawerItem
                                        key={item.title}
                                        iconName={item.iconName}
                                        title={item.title}
                                        customClick={() => {
                                            if (item.subMenu) {
                                                setMenuItems(item.subMenu);
                                                setIsSubMenu(true);
                                            } else if (item.screenName) {
                                                props.navigation.navigate(item.screenName);
                                            } else {
                                                throw "Missing both the screenName and subMenu in the navigation item: " + item.title;
                                            }
                                        }}
                                    />
                                );
                            })}
                        </ScrollView>



                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section title='Preferences'>
                <TouchableRipple onPress={() => { toggleTheme() }}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents='none'>
                            <Switch
                                value={isDarkTheme}
                            />
                        </View>
                    </View>
                </TouchableRipple>

            </Drawer.Section>

            <Drawer.Section style={styles.buttonDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name='exit-to-app'
                            color={color}
                            size={size}
                        />
                    )}
                    label='Sign Out'
                    onPress={() => { }}
                />

            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    buttonDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    drawerItem: {
        padding: -200,
        margin: 0,
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    searchBar: {
        height: 42,
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: Colors.container
    },
    modulesContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 1,
        padding: 4,
        alignItems: 'center'
    },
    modules: {
        fontFamily: 'AbadiMTStd',
        marginLeft: 10,
        fontSize: 18
    },
    backButton: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default DrawerContent
