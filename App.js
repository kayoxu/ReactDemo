/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
} from 'react-native';

import * as zimaUtils from "./util/zimaUtils";

import Main from './component/main/KMain';
import Launcher from './component/main/Klauncher';

const Dimensions = require('Dimensions');

let {width} = Dimensions.get('window');
let cols = 3;
let boxW = 100;
let vMargin = (width - cols * boxW) / (cols + 1);
let hMargin = 25;

const instructions = Platform.select({
    ios: 'Press',
    android: 'Double',
});

function openBtn() {

    zimaUtils.openLock(1196)

}


export default class App extends Component<{}> {

    render() {
        if (Platform.OS === 'ios') {
            return <Main/>
        } else {
            return <Launcher/>
        }
        // return <Main/>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
        // justifyContent:'space-around', //between
        // alignItems: 'flex-start' // stretch
    },
    inputStyle: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 60,
        flex: 1,
        borderWidth: 1,
        borderColor: "#555"
    },


    outViewStyle: {
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        width: boxW,
        height: boxW,
        marginLeft: vMargin,
        marginTop: hMargin
    },
    imageStyle: {
        width: 80,
        height: 80,
        // borderRadius: 30
    },
    mainTitleStyle: {
        justifyContent: 'center',
        textAlign: 'center',
    },
});
