/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Home extends Component {
    // static navigationOptions={
    //     title:'Home'
    // }
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ScreenDetail')}>
                    <Text>Go To Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
                    <Text>Go To Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c6445a',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

