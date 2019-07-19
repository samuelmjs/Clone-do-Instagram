import React from 'react';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';

import Gallery from '../screens/Gallery';
import NewPhoto from '../components/NewPhoto'

const GalleryOrNewFoto = createSwitchNavigator({
    Gallery: Gallery,
    NewPhoto: NewPhoto
}, {
        initialRouteName: 'Gallery'
    })

const MenuRoutes = {
    Gallery: {
        name: 'Gallery',
        screen: GalleryOrNewFoto,
        navigationOptions: {
            title: 'Biblioteca',
        }
    },
    Photo: {
        name: 'Photo',
        screen: Gallery,
        navigationOptions: {
            title: 'Foto',
        }
    },
    Video: {
        name: 'Video',
        screen: Gallery,
        navigationOptions: {
            title: 'Video',
        },
    },
}

const MenuConfig = {
    initialRouteName: 'Gallery',
    animationEnable: true,
    swipeEnable: true,
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#000',
        labelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        tabStyle: {
            justifyContent: 'center'
        },
        showIcon: false,
    },
}

const Menu = createBottomTabNavigator(MenuRoutes, MenuConfig);
const MenuNavigator = createAppContainer(Menu)

export default MenuNavigator;