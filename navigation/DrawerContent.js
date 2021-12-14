import React from 'react'
import { View, StyleSheet } from 'react-native';
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

const DrawerContent = props => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    return (
        <View style={{ flex: 1, width: 300, backgroundColor: 'white', borderTopEndRadius: 150, borderBottomRightRadius: 50, marginTop: 40}}>
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

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name='home-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Home'
                            onPress={() => { }}
                           
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name='account-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Profile'
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name='bookmark-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Bookmarks'
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name='cog-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Settings'
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name='account-check-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Support'
                            onPress={() => { }}
                        />
                    </Drawer.Section>
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
                </View>
            </DrawerContentScrollView>

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
    }
});

export default DrawerContent
