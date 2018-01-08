import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

import {StackNavigator} from 'react-navigation';

let Main = require('../main/KMain');
let zimaUtils = require('../../util/zimaUtils');

class LauncherImage extends Component<{}> {
    componentDidMount() {
        setTimeout(() => {
            let {navigate} = this.props.navigation;
            navigate("Main");
        }, 1000)
    }

    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={styles.container}/>
        );
    }
}

class Klauncher extends Component<{}> {
    render() {
        return (
            <ModalStack/>
        );
    }
}


const ModalStack = StackNavigator({
    LauncherImage: {
        screen: LauncherImage,
        navigationOptions: {
            header: null,
            backBehavior: false
        }
    },
    Main: {
        screen: Main,
        navigationOptions: {
            headerBackTitle: null,
            mode: 'modal'
        }
    },
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE'
    }, innerViewStyle: {}
});

module.exports = Klauncher;