import React from 'react';
import {
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation';
import { View, Image, Alert } from 'react-native';

import homeFocus from '../../assets/images/tab/home_focus_icon.png';
import home from '../../assets/images/tab/home_icon.png';
import search from '../../assets/images/tab/search_icon.png';
import searchFocus from '../../assets/images/tab/search_focus_icon.png';
import add from '../../assets/images/tab/add_icon.png';
import heart from '../../assets/images/heart_icon.png';
import heartFocus from '../../assets/images/heart_focus_icon.png';
import user from '../../assets/images/tab/user_icon.png';
import userFocus from '../../assets/images/tab/user_focus_icon.png';

import Feed from '../screens/Feed';
import Search from '../screens/Search';
import NavigatorAddPhoto from '../NavigatorAddPhoto';
import Like from '../screens/Like';
import Profile from '../screens/Profile';
import Login from '../screens/Login';

const LoginOrFeed = createSwitchNavigator({
    Feed: Feed,
    Auth: Login
}, {
        initialRouteName: 'Auth'
    })

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: LoginOrFeed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ focused }) => {
                const image = focused ? homeFocus : home;
                return <Image source={image} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
            },
            showIcon: true,

        }
    },
    Search: {
        name: 'Search',
        screen: Search,
        navigationOptions: {
            title: 'Search',
            tabBarIcon: ({ focused }) => {
                const image = focused ? searchFocus : search;
                return <Image source={image} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
            },
            showIcon: true,
        }
    },
    Add: {
        name: 'Add Picture',
        screen: NavigatorAddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: <Image source={add} style={{ height: 25, width: 25, resizeMode: 'contain' }} />,
            showIcon: true,
            tabBarVisible: false
        }
    },
    Like: {
        name: 'Like',
        screen: Like,
        navigationOptions: {
            title: 'Like',
            tabBarIcon: ({ focused }) => {
                const image = focused ? heartFocus : heart;
                return <Image source={image} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
            },
            showIcon: true,
        }
    },
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ focused }) => {
                const image = focused ? userFocus : user;
                return <Image source={image} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
            },
            showIcon: true,
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false,
    }
}

const Menu = createBottomTabNavigator(MenuRoutes, MenuConfig)
const MenuNavigator = createAppContainer(Menu)

export default MenuNavigator;