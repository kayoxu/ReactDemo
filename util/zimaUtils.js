import {
    Alert,
    Linking,
    Image,
    Dimensions
} from 'react-native';
import React from 'react';

let {width, height} = Dimensions.get('window');

let mainColor = '#EA5555';

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
 */
function startActivity(that, activity) {
    let {navigate} = that.props.navigation;
    navigate(activity);
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
    const headerStyle = {backgroundColor: mainColor,};
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


module.exports = {
    openLock: openLock,
    TimerGo: TimerGo,
    doLater: doLater,
    startActivity: startActivity,
    NavOptions: NavOptions,
    mainColor: mainColor
};

