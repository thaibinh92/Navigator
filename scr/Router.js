import React from 'react';
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';
import Home from './Component/Home';
import User from './Component/User';
import Detail from './Component/Detail';
import Menu from './Component/Menu';


export const HomeStack = StackNavigator({
    ScreenHome:{
        screen: Home,
        navigationOptions:{
            title:'Home'
        }
    },
    ScreenDetail:{
        screen: Detail,
        navigationOptions:{
            title:'Detail'
        }
    }
});

export const UserStack=StackNavigator({
    ScreenUser:{
        screen:User,
        navigationOptions:{
            title:'Profile'
        }
    }
});

export const Tabbar = TabNavigator({
    Homes:{
        screen:HomeStack,
        navigationOptions:{
            tabBarLabel:'HOME'
        }
    },
    Users:{
        screen:UserStack,
        navigationOptions:{
            tabBarLabel:'PROFILE'
        }
    }
},{
    tabBarPosition:'bottom'
    }
);

export const SideMenu = DrawerNavigator({
    Tabbar:{
        screen:Tabbar
    }
},{
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props =><Menu {...props} />
    }
);
