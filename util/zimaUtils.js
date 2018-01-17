import {
    Alert,
    Linking,
    Image,
    Dimensions,
    Platform
} from 'react-native';
import React from 'react';

import {
    TabNavigator,
    StackNavigator,
    NavigationActions
} from 'react-navigation';

let {width, height} = Dimensions.get('window');

let mainColor = 'orange';

function openLock(keyId) {
    return Linking.canOpenURL('zima://com.hizima/sdk').then(supported => {
        if (supported) {
            Linking.openURL('zima://com.hizima/sdk?keyId=' + keyId);
        } else {
            Alert(`请先安装一匙通`);
        }
    });
}


function TimerGo(timer, func, time) {
    timer = setInterval(
        () => {
            func();
        }, time
    );
}

function doLater(timer, func, time) {
    timer = setTimeout(
        () => {
            func();
        }, time
    );
}


/**
 *
 * @param that this
 * @param  activity
 * @param data
 */

function startActivity(that, activity, data) {
    let {navigate} = that.props.navigation;
    navigate(activity, {data: data});
}

/**
 *
 * @param that this
 */
function goBack(that) {
    that.props.navigation.goBack();
}

/**
 *
 * @param that this
 * @param  activity
 */
function startActivityNoBack(that, activity) {

    const {dispatch} = that.props.navigation;
    const resetAction = NavigationActions.reset({ //reset
        index: 0,//指定显示数组内的路由
        actions: [
            NavigationActions.navigate({routeName: activity, params: {data: ""}}),
        ]
    });
    dispatch(resetAction);
}

/**
 *
 * @param navTitle
 * @param label
 * @param nIcon
 * @param sIcon
 * @returns {{tabBarLabel: *, tabBarIcon: function(*, *=), headerTitle: *, headerTitleStyle: {fontSize: number, color: string, alignSelf: string}, headerStyle: {backgroundColor}, tabBarVisible: boolean}}
 * @constructor
 */
function NavOptions(navTitle, label, nIcon, sIcon,) {
    const tabBarLabel = label;

    const tabBarIcon = (({tintColor, focused}) => {
        return (<Image resizeMode={'contain'}
                       source={!focused ? {uri: nIcon} : {uri: sIcon}}
                       style={{height: 30, width: 30}}
        />);
    });

    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize: 22, color: 'white', alignSelf: 'center'};
    // header的style
    const headerStyle = {backgroundColor: mainColor, height: Platform.OS === "ios" ? 64 : 56};
    const tabBarVisible = label !== null;

    return {
        tabBarLabel,
        tabBarIcon,
        headerTitle,
        headerTitleStyle,
        headerStyle,
        tabBarVisible,
    };

}


/**
 *
 * @param iphonex
 * @param iphone
 * @param android
 * @constructor
 */
function ScreenAdaptation(iphonex, iphone, android) {
    return Platform.OS === 'ios' ? (height > 800 ? iphonex : iphone) : android;
}

module.exports = {
    openLock: openLock,
    TimerGo: TimerGo,
    doLater: doLater,
    goBack: goBack,
    startActivity: startActivity,
    startActivityNoBack: startActivityNoBack,
    NavOptions: NavOptions,
    mainColor: mainColor,
    height: height,
    width: width,
    ScreenAdaptation: ScreenAdaptation
};

