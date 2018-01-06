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
    Button
} from 'react-native';

import * as zimaUtils from "./util/zimaUtils";

import LoginView from './demo_view/loginView';
// var LoginView = require('./loginView');

import Touchable from './demo_view/Touchable';
import ScrollView from './demo_view/ScrollViews';
import SlideShow from './demo_view/SlideShow';
import ListViews from './demo_view/ListViews';
import ListViewNine from './demo_view/ListViewNine';
import ListViewTag from './demo_view/ListViewTag';
import TabBar from './demo_view/TabBar';
import TabNavBar from './demo_view/TabNavBar';

const Dimensions = require('Dimensions');
let badgeData = require('./util/BadgeData.json');

let {width} = Dimensions.get('window');
let cols = 3;
let boxW = 100;
let vMargin = (width - cols * boxW) / (cols + 1);
let hMargin = 25;

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

function openBtn() {

    zimaUtils.openLock(1196)

}


export default class App extends Component<{}> {

    render() {

        return (
            // < LoginView/>
            // <Touchable/>
            //<ScrollView/>
            //<SlideShow/>
            //<ListViews/>
            //<ListViewNine/>
            // <ListViewTag/>
            //<TabBar/>
            <TabNavBar/>
        );
    }
}

export class App1 extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputStyle}
                    // value={'默认文字!'}
                    //        keyboardType={'phone-pad'}
                    // multiline={truel}
                           secureTextEntry={true}
                           placeholder={'占位符'}
                    // clearButtonMode={'always'} //ios
                    // underlineColorAndroid={'#00F'}  //android
                />

                {/*{this.renderAllBadge()}*/}
                {/*<Button onPress={openBtn} title="开锁" color="#0011ff" accessibilityLabel="ddddddddd"/>*/}
            </View>
        );
    }

    renderAllBadge() {
        const allBadge = [];
        for (let i = 0; i < badgeData.data.length; i++) {
            const badge = badgeData.data[i];
            allBadge.push(
                <View key={i} style={styles.outViewStyle}>
                    {/*<Image source={{uri: badge.icon}} style={styles.imageStyle}/>*/}
                    <Image source={{uri: badge.icon}} style={styles.imageStyle}/>
                    {/*<Image source={require( imgStr)} style={styles.imageStyle}/>*/}
                    <Text style={styles.mainTitleStyle}>
                        {badge.title}
                    </Text>

                </View>
            );
        }
        return allBadge
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


const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
        // justifyContent:'space-around', //between
        // alignItems: 'flex-start' // stretch
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
    mainTitleStyle: {},
});


const mStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE',
        marginTop: 30,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
    imageStyle: {
        alignSelf: 'center',
        // flex: 9,
        width: 200,
        height: 200,
        borderRadius: 30,
        resizeMode: Image.resizeMode.contain  //cover  stretch contain
    }

});