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

import * as zimaUtils from "../util/zimaUtils";

let badgeData = require('../util/BadgeData.json');
const Dimensions = require('Dimensions');
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


class loginView extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={{uri: 'i_1'}} style={styles.iconStyle}/>
                {/*账号密码*/}
                <TextInput placeholder={'请输入用户名'} underlineColorAndroid={'transparent'} style={styles.textInputStyle}/>
                <TextInput placeholder={'请输入密码'}
                           secureTextEntry={true} underlineColorAndroid={'transparent'} style={styles.textInputStyle}/>
                {/*登录按钮*/}
                <View style={styles.loginBtnStyle}>
                    <Text style={{color: 'white', textAlign: 'center'}}>登录</Text>
                </View>

                {/*设置*/}
                <View style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>

                {/*其他登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式:</Text>
                    <Image source={{uri: 'i_0'}} style={styles.otherImageStyle}/>
                    <Image source={{uri: 'i_9'}} style={styles.otherImageStyle}/>
                    <Image source={{uri: 'i_8'}} style={styles.otherImageStyle}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexWrap: 'wrap',
        backgroundColor: '#EEEEEE',
        alignItems: 'center'
    },
    iconStyle: {
        marginTop: 50,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: 'white'
    },
    textInputStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        height: 38,
        width: width,
        marginBottom: 1,
        backgroundColor: 'white',
        textAlign: 'center'
    },
    imageStyle: {
        width: 80,
        height: 80,
        // borderRadius: 30
    },
    loginBtnStyle: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: width * 0.8,
        margin: 20,
        backgroundColor: 'blue'
    },
    settingStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
    },
    otherLoginStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 30,
    },
    otherImageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 8,
    }

});


module.exports = loginView;