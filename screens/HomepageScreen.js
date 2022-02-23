import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Div from '../components/div';
// import { NwClass } from '../constants/NwClass';
import { useStyles } from '../functions/Orientation';

import NkButton from '../components/nkButton';
import NkCompanyModal from '../components/nkCompanyModal'
import NkHelpModal from '../components/nkHelpModal'
import NkSettingsModal from '../components/nkSettingsModal'

const HomepageScreen = props => {

    const NwClass = useStyles();

    return (
        <ScrollView style={styles.container}>
            <Div style={NwClass.row}>
                <Div style={[NwClass.col, NwClass.col_12,]}>
                    {/* Greetings and header widget */}
                    <Div style={NwClass.row}>
                        <Div style={[NwClass.col, NwClass.col_8,]}>

                            <LinearGradient
                                colors={['#28396f', '#1e6dc3',]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.welcomeImageContainer}
                            >
                                <Div style={styles.greetingsContainer}>
                                    <Div style={styles.greetingsTextContainer}>
                                        <Text style={styles.greetings}>Good day, ANGELOCARLOGONZALES3!</Text>
                                        <Text style={styles.subGreetings}>Welcome to your splashboard.</Text>
                                    </Div>
                                </Div>
                            </LinearGradient>
                            <Div>
                                <Text style={styles.overview}>Overview</Text>
                            </Div>
                            <Div style={[NwClass.col, NwClass.col_12,]}>
                                <Div style={[NwClass.row, NwClass.row_parent]}>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <Div style={styles.boxContainer}>
                                            <LinearGradient
                                                colors={['#215dbb', '#3da4ec',]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                style={styles.box}>
                                                <ImageBackground
                                                    source={require('../assets/HomepageIcons/overview-bg-blue-240x130-100p.png')}
                                                >
                                                    <Div style={styles.boxItems}>
                                                        <Div style={styles.boxImageContainer}>
                                                            <Image
                                                                source={require('../assets/HomepageIcons/icon-nw_v2_pending_task_colored_44x44_300px.png')}
                                                                style={styles.boxImage}
                                                            />
                                                        </Div>
                                                        <Div style={styles.boxDetails}>
                                                            <Text style={styles.boxCount}>15</Text>
                                                            <Text style={styles.boxLabel}>Pending Task</Text>
                                                        </Div>
                                                    </Div>
                                                </ImageBackground>
                                            </LinearGradient>
                                        </Div>
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <Div style={styles.boxContainer}>
                                            <LinearGradient
                                                colors={['#26b144', '#4ae86c',]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                style={styles.box}>
                                                <ImageBackground
                                                    source={require('../assets/HomepageIcons/overview-bg-green-240x130-100p.png')}
                                                >
                                                    <Div style={styles.boxItems}>
                                                        <Div style={styles.boxImageContainer}>
                                                            <Image
                                                                source={require('../assets/HomepageIcons/icon-nw_v2_assigned_activities_colored_44x44_300px.png')}
                                                                style={styles.boxImage}
                                                            />
                                                        </Div>
                                                        <Div style={styles.boxDetails}>
                                                            <Text style={styles.boxCount}>8</Text>
                                                            <Text style={styles.boxLabel}>Assigned Activies</Text>
                                                        </Div>
                                                    </Div>
                                                </ImageBackground>
                                            </LinearGradient>
                                        </Div>
                                    </Div>
                                </Div>
                                {/*----------------------------------------------------- border */}
                                <Div style={[NwClass.row, NwClass.row_parent]}>
                                    <Div style={[NwClass.col, NwClass.col_12,]}>
                                        <Div style={[styles.boxContainer,]}>
                                            <LinearGradient
                                                colors={['#f75948', '#ff887c',]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                style={[styles.box, { width: '100%' }]}>
                                                <ImageBackground
                                                    source={require('../assets/HomepageIcons/overview-bg-red-240x130-100p.png')}
                                                >
                                                    <Div style={styles.boxItems}>
                                                        <Div style={styles.boxImageContainer}>
                                                            <Image
                                                                source={require('../assets/HomepageIcons/icon-nw_v2_findings_colored_44x44_300px.png')}
                                                                style={styles.boxImage}
                                                            />
                                                        </Div>
                                                        <Div style={styles.boxDetails}>
                                                            <Text style={styles.boxCount}>6</Text>
                                                            <Text style={styles.boxLabel}>Findings</Text>
                                                        </Div>
                                                    </Div>
                                                </ImageBackground>
                                            </LinearGradient>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div style={[NwClass.row, NwClass.row_parent]}>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <Div style={styles.boxContainer}>
                                            <LinearGradient
                                                colors={['#e4961a', '#ffca4a',]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                style={styles.box}>
                                                <ImageBackground
                                                    source={require('../assets/HomepageIcons/overview-bg-240x130-100p.png')}
                                                >
                                                    <Div style={styles.boxItems}>
                                                        <Div style={styles.boxImageContainer}>
                                                            <Image
                                                                source={require('../assets/HomepageIcons/icon-nw_v2_tickets_colored_44x44_300px.png')}
                                                                style={styles.boxImage}
                                                            />
                                                        </Div>
                                                        <Div style={styles.boxDetails}>
                                                            <Text style={styles.boxCount}>10</Text>
                                                            <Text style={styles.boxLabel}>Tickets</Text>
                                                        </Div>
                                                    </Div>
                                                </ImageBackground>
                                            </LinearGradient>
                                        </Div>
                                    </Div>
                                    <Div style={[NwClass.col, NwClass.col_6,]}>
                                        <Div style={styles.boxContainer}>
                                            <LinearGradient
                                                colors={['#05ada8', '#0bd6d0',]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                style={styles.box}>
                                                <ImageBackground
                                                    source={require('../assets/HomepageIcons/overview-bg-yellow-240x130-100p.png')}
                                                >
                                                    <Div style={styles.boxItems}>
                                                        <Div style={styles.boxImageContainer}>
                                                            <Image
                                                                source={require('../assets/HomepageIcons/icon-nw_v2_accomplished_colored_44x44_300px-v2.png')}
                                                                style={styles.boxImage}
                                                            />
                                                        </Div>
                                                        <Div style={styles.boxDetails}>
                                                            <Text style={styles.boxCount}>3</Text>
                                                            <Text style={styles.boxLabel}>Accomplished Task</Text>
                                                        </Div>
                                                    </Div>
                                                </ImageBackground>
                                            </LinearGradient>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                            <Div>
                                <Text style={styles.overview}>Recently Accessed Menuitem</Text>
                            </Div>
                            <Div style={[NwClass.row, NwClass.row_parent]}>
                                <Div style={[NwClass.col, NwClass.col_5, NwClass.col_parent, { width: '100%', }]}>
                                    <Image
                                        source={require('../assets/HomepageIcons/noah-recent-left-vector-420x420x200px.png')}
                                        style={styles.noahImage}
                                        resizeMode='cover'
                                    />
                                    <Div style={[NwClass.col, NwClass.col_12, NwClass.col_parent,]}>
                                        <Div style={[NwClass.row, NwClass.row_parent]}>
                                            <Div style={[NwClass.col, NwClass.col_6,]}>
                                                <Div style={styles.widgetContainer}>
                                                    <Div style={[styles.header, styles.widget]}>
                                                        <Text style={[styles.widgetTitle,]}>E0101</Text>
                                                        <Div style={styles.widgetRing}>
                                                            <Image source={require('../assets/HomepageIcons/menuitem-icon-30x30p-design.png')}
                                                                style={styles.widgetIcon}
                                                            />
                                                        </Div>

                                                    </Div>
                                                    <Div style={[styles.details, styles.widget]}>
                                                        <Text style={[styles.widgetTitle]}>Daily Accomplishment Report</Text>
                                                        <Text style={styles.widgetText}>Menuitem</Text>
                                                    </Div>
                                                    <Div style={[styles.module_code, styles.widget]}>
                                                        <Text style={styles.widgetText}>Billing and Collection Trade</Text>
                                                        <NkButton
                                                            iconButton
                                                            title={<Div>
                                                                <Ionicons name='arrow-forward'
                                                                    size={35}
                                                                    color='white'
                                                                    style={styles.widgetArrow}
                                                                />
                                                            </Div>}
                                                        />
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div style={[NwClass.col, NwClass.col_6,]}>
                                                <Div style={styles.widgetContainer}>
                                                    <Div style={[styles.header, styles.widget]}>
                                                        <Text style={[styles.widgetTitle]}>E0101</Text>
                                                        <Div style={styles.widgetRing}>
                                                            <Image source={require('../assets/HomepageIcons/menuitem-icon-30x30p-design.png')}
                                                                style={styles.widgetIcon}
                                                            />
                                                        </Div>
                                                    </Div>
                                                    <Div style={[styles.details, styles.widget]}>
                                                        <Text style={[styles.widgetTitle]}>Daily Accomplishment Report</Text>
                                                        <Text style={styles.widgetText}>Menuitem</Text>
                                                    </Div>
                                                    <Div style={[styles.module_code, styles.widget]}>
                                                        <Text style={styles.widgetText}>Billing and Collection Trade</Text>
                                                        <NkButton
                                                            iconButton
                                                            title={<Div>
                                                                <Ionicons name='arrow-forward'
                                                                    size={35}
                                                                    color='white'
                                                                    style={styles.widgetArrow}
                                                                />
                                                            </Div>}
                                                        />
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div style={[NwClass.col, NwClass.col_6,]}>
                                                <Div style={styles.widgetContainer}>
                                                    <Div style={[styles.header, styles.widget]}>
                                                        <Text style={[styles.widgetTitle]}>E0101</Text>
                                                        <Div style={styles.widgetRing}>
                                                            <Image source={require('../assets/HomepageIcons/menuitem-icon-30x30p-design.png')}
                                                                style={styles.widgetIcon}
                                                            />
                                                        </Div>
                                                    </Div>
                                                    <Div style={[styles.details, styles.widget]}>
                                                        <Text style={[styles.widgetTitle]}>Daily Accomplishment Report</Text>
                                                        <Text style={styles.widgetText}>Menuitem</Text>
                                                    </Div>
                                                    <Div style={[styles.module_code, styles.widget]}>
                                                        <Text style={styles.widgetText}>Billing and Collection Trade</Text>
                                                        <NkButton
                                                            iconButton
                                                            title={<Div>
                                                                <Ionicons name='arrow-forward'
                                                                    size={35}
                                                                    color='white'
                                                                    style={styles.widgetArrow}
                                                                />
                                                            </Div>}
                                                        />
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div style={[NwClass.col, NwClass.col_6,]}>
                                                <Div style={styles.widgetContainer}>
                                                    <Div style={[styles.header, styles.widget]}>
                                                        <Text style={[styles.widgetTitle]}>E0101</Text>
                                                        <Div style={styles.widgetRing}>
                                                            <Image source={require('../assets/HomepageIcons/menuitem-icon-30x30p-design.png')}
                                                                style={styles.widgetIcon}
                                                            />
                                                        </Div>
                                                    </Div>
                                                    <Div style={[styles.details, styles.widget]}>
                                                        <Text style={[styles.widgetTitle]}>Daily Accomplishment Report</Text>
                                                        <Text style={styles.widgetText}>Menuitem</Text>
                                                    </Div>
                                                    <Div style={[styles.module_code, styles.widget]}>
                                                        <Text style={styles.widgetText}>Billing and Collection Trade</Text>
                                                        <NkButton
                                                            iconButton
                                                            title={<Div>
                                                                <Ionicons name='arrow-forward'
                                                                    size={35}
                                                                    color='white'
                                                                    style={styles.widgetArrow}
                                                                />
                                                            </Div>}
                                                        />
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>

                        <Div style={[NwClass.col, NwClass.col_4, { justifyContent: 'flex-start' }]}>
                            <Div style={[NwClass.col, NwClass.col_12]}>
                                <Div style={styles.menuContainer}>
                                    <Div style={styles.profileContainer}>
                                        <Image
                                            source={require('../assets/HomepageIcons/user-profile-from-freepik-photo.png')}
                                            style={styles.profilePic}
                                        />
                                    </Div>
                                    <Div style={styles.userContainer}>
                                        <Text style={styles.username}>ANGELOCARLOGONZALES3</Text>
                                        <Text style={styles.usertype}>Administrator</Text>
                                        <Div style={styles.iconContainer}>
                                            <TouchableOpacity>
                                                <NkCompanyModal />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <NkHelpModal />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <NkSettingsModal />
                                            </TouchableOpacity>
                                        </Div>
                                    </Div>
                                    <Div style={styles.notificationContainer} >
                                        <Text style={styles.notificationText}>Notifications</Text>
                                        <ScrollView style={styles.notificationDashboardContainer}
                                            horizontal={false}
                                            nestedScrollEnabled={true}
                                        >
                                            <Div style={styles.notificationDashboard}>
                                                <Div style={styles.notificationProfile}>
                                                    <Text style={styles.notificationProfileText}>AO</Text>
                                                </Div>
                                                <Div style={styles.notificationSubinfo}>
                                                    <Div style={styles.notificationInfoStatus}>
                                                        <Text style={styles.infoStatus}>Approval</Text>
                                                        <Text style={styles.infoDate}>10/20/2021 10:00 AM</Text>
                                                    </Div>
                                                    <Div style={styles.infoDetails}>
                                                        <Div style={[styles.detailsA,]}>
                                                            <Text style={styles.detailsText}>You have 57 item for approval listed below:</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsB,]}>
                                                            <Text style={styles.detailsText}>Leave Initial Approval: 19</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsC,]}>
                                                            <Text style={styles.detailsText}>Change AP Intial Approval:</Text>
                                                            <Text style={styles.detailsText}>25</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsD,]}>
                                                            <Text style={styles.detailsText}>Change AP Final Approval:</Text>
                                                            <Text style={styles.detailsText}>13</Text>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div style={styles.notificationDashboard}>
                                                <Div style={styles.notificationProfile}>
                                                    <Text style={styles.notificationProfileText}>AO</Text>
                                                </Div>
                                                <Div style={styles.notificationSubinfo}>
                                                    <Div style={styles.notificationInfoStatus}>
                                                        <Text style={styles.infoStatus}>Approval</Text>
                                                        <Text style={styles.infoDate}>10/20/2021 10:00 AM</Text>
                                                    </Div>
                                                    <Div style={styles.infoDetails}>
                                                        <Div style={[styles.detailsA,]}>
                                                            <Text style={styles.detailsText}>You have 57 item for approval listed below:</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsB,]}>
                                                            <Text style={styles.detailsText}>Leave Initial Approval: 19</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsC,]}>
                                                            <Text style={styles.detailsText}>Change AP Intial Approval:</Text>
                                                            <Text style={styles.detailsText}>25</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsD,]}>
                                                            <Text style={styles.detailsText}>Change AP Final Approval:</Text>
                                                            <Text style={styles.detailsText}>13</Text>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div style={styles.notificationDashboard}>
                                                <Div style={styles.notificationProfile}>
                                                    <Text style={styles.notificationProfileText}>AO</Text>
                                                </Div>
                                                <Div style={styles.notificationSubinfo}>
                                                    <Div style={styles.notificationInfoStatus}>
                                                        <Text style={styles.infoStatus}>Approval</Text>
                                                        <Text style={styles.infoDate}>10/20/2021 10:00 AM</Text>
                                                    </Div>
                                                    <Div style={styles.infoDetails}>
                                                        <Div style={[styles.detailsA,]}>
                                                            <Text style={styles.detailsText}>You have 57 item for approval listed below:</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsB,]}>
                                                            <Text style={styles.detailsText}>Leave Initial Approval: 19</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsC,]}>
                                                            <Text style={styles.detailsText}>Change AP Intial Approval:</Text>
                                                            <Text style={styles.detailsText}>25</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsD,]}>
                                                            <Text style={styles.detailsText}>Change AP Final Approval:</Text>
                                                            <Text style={styles.detailsText}>13</Text>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div style={styles.notificationDashboard}>
                                                <Div style={styles.notificationProfile}>
                                                    <Text style={styles.notificationProfileText}>AO</Text>
                                                </Div>
                                                <Div style={styles.notificationSubinfo}>
                                                    <Div style={styles.notificationInfoStatus}>
                                                        <Text style={styles.infoStatus}>Approval</Text>
                                                        <Text style={styles.infoDate}>10/20/2021 10:00 AM</Text>
                                                    </Div>
                                                    <Div style={styles.infoDetails}>
                                                        <Div style={[styles.detailsA,]}>
                                                            <Text style={styles.detailsText}>You have 57 item for approval listed below:</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsB,]}>
                                                            <Text style={styles.detailsText}>Leave Initial Approval: 19</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsC,]}>
                                                            <Text style={styles.detailsText}>Change AP Intial Approval:</Text>
                                                            <Text style={styles.detailsText}>25</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsD,]}>
                                                            <Text style={styles.detailsText}>Change AP Final Approval:</Text>
                                                            <Text style={styles.detailsText}>13</Text>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div style={styles.notificationDashboard}>
                                                <Div style={styles.notificationProfile}>
                                                    <Text style={styles.notificationProfileText}>AO</Text>
                                                </Div>
                                                <Div style={styles.notificationSubinfo}>
                                                    <Div style={styles.notificationInfoStatus}>
                                                        <Text style={styles.infoStatus}>Approval</Text>
                                                        <Text style={styles.infoDate}>10/20/2021 10:00 AM</Text>
                                                    </Div>
                                                    <Div style={styles.infoDetails}>
                                                        <Div style={[styles.detailsA,]}>
                                                            <Text style={styles.detailsText}>You have 57 item for approval listed below:</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsB,]}>
                                                            <Text style={styles.detailsText}>Leave Initial Approval: 19</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsC,]}>
                                                            <Text style={styles.detailsText}>Change AP Intial Approval:</Text>
                                                            <Text style={styles.detailsText}>25</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsD,]}>
                                                            <Text style={styles.detailsText}>Change AP Final Approval:</Text>
                                                            <Text style={styles.detailsText}>13</Text>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div style={styles.notificationDashboard}>
                                                <Div style={styles.notificationProfile}>
                                                    <Text style={styles.notificationProfileText}>AO</Text>
                                                </Div>
                                                <Div style={styles.notificationSubinfo}>
                                                    <Div style={styles.notificationInfoStatus}>
                                                        <Text style={styles.infoStatus}>Approval</Text>
                                                        <Text style={styles.infoDate}>10/20/2021 10:00 AM</Text>
                                                    </Div>
                                                    <Div style={styles.infoDetails}>
                                                        <Div style={[styles.detailsA,]}>
                                                            <Text style={styles.detailsText}>You have 57 item for approval listed below:</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsB,]}>
                                                            <Text style={styles.detailsText}>Leave Initial Approval: 19</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsC,]}>
                                                            <Text style={styles.detailsText}>Change AP Intial Approval:</Text>
                                                            <Text style={styles.detailsText}>25</Text>
                                                        </Div>
                                                        <Div style={[styles.detailsD,]}>
                                                            <Text style={styles.detailsText}>Change AP Final Approval:</Text>
                                                            <Text style={styles.detailsText}>13</Text>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </ScrollView>
                                    </Div>
                                </Div>
                            </Div>

                        </Div>
                    </Div>

                </Div>

            </Div>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    welcomeImageContainer: {
        width: '100%',
        height: 150,
        elevation: 1,
        borderColor: 'black',
        borderWidth: .3,
        elevation: 10,
        borderRadius: 25,
        justifyContent: 'center',
        padding: 10,

    },
    greetings: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'AbadiMTStd',
    },
    subGreetings: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'AbadiMTStd'
    },
    overview: {
        color: '#394651',
        fontWeight: '600',
        fontSize: 25,
        marginVertical: 15,
        marginHorizontal: 5
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 0
    },
    box: {
        width: '100%',
        backgroundColor: 'black',
        height: 150,
        marginHorizontal: 8,
        borderRadius: 20,
        overflow: 'hidden'
    },
    boxItems: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        height: '100%'
    },
    boxImageContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxImage: {
        width: 70,
        height: 70
    },
    boxDetails: {
        marginLeft: 10,
        padding: 10,
    },
    boxCount: {
        fontSize: 25,
        color: 'white',
        fontWeight: '600'
    },
    boxLabel: {
        fontSize: 22,
        color: 'white',
        fontWeight: '600'
    },
    noahImage: {
        width: '100%',
        marginVertical: 20
    },
    widgetContainer: {
        padding: 5,
        borderRadius: 15,
        borderWidth: .8,
        borderColor: '#333',
        backgroundColor: 'white'
    },
    widget: {
        marginVertical: 10,
        padding: 5,

    },
    widgetTitle: {
        color: '#394651',
        fontWeight: '900',
        fontFamily: 'AbadiMTStd',
        fontSize: 25
    },
    widgetText: {
        color: '#394651',
        fontWeight: '600',
        fontFamily: 'AbadiMTStd',
        fontSize: 18
    },
    widgetRing: {
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#7491ad',
        padding: 0,
    },
    widgetIcon: {
        width: 50,
        height: 50,

    },
    widgetArrow: {
        backgroundColor: '#28396f',
        borderRadius: 50,
        padding: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    details: {

    },
    module_code: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuContainer: {
        borderWidth: .8,
        borderRadius: 25,
        borderColor: '#404447',
        padding: 5,
    },
    profileContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    profilePic: {
        width: 150,
        height: 150
    },
    userContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    username: {
        fontSize: 25,
        fontWeight: '900',
        color: '#394651'
    },
    usertype: {
        color: '#394651',
        fontWeight: '900',
        fontSize: 20,
        marginVertical: 10
    },
    iconContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userIcon: {
        marginHorizontal: 10,
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    companyIcon: {
        backgroundColor: '#ddd3ed',
        width: 40,
        height: 40,
    },
    helpIcon: {
        backgroundColor: '#ffe5bc',
        width: 40,
        height: 40,
    },
    settingsIcon: {
        backgroundColor: '#c5cbdd',
        width: 40,
        height: 40,
    },
    notificationContainer: {
        padding: 10,
        backgroundColor: '#e4e8f2',
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: 10
    },
    notificationText: {
        fontSize: 25,
        color: '#394651',
        fontWeight: '900',
        marginLeft: 10
    },
    notificationDashboardContainer: {
        height: 500,
    },
    notificationDashboard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    notificationProfile: {
        borderColor: 'black',
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7491ad',

    },
    notificationProfileText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 20,

    },
    notificationSubinfo: {
        width: '80%',
    },
    notificationInfoStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    infoStatus: {
        color: '#394651',
        fontWeight: '900',
        fontSize: 20,
    },
    infoDate: {
        color: '#7491ad',


    },
    infoDetails: {
        marginTop: 10,
    },
    detailsText: {
        color: '#222',
        fontFamily: 'AbadiMTStd',
        fontSize: 15,

    }

});

export default HomepageScreen
