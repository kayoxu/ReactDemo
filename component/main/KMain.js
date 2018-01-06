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
import {
    TabNavigator,
    StackNavigator
} from 'react-navigation';

let Home = require('../home/KHome');
let Shop = require('../shop/KShop');
let Mine = require('../mine/KMine');
let More = require('../more/KMore');

let HomeDetail = require('../home/KHomeDetail');
let zimaUtils = require('../../util/zimaUtils');


let mainPage = "Shop";


class KMain extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    render() {
        return (
            <KNav/>
        );
    }
}


const KTab = TabNavigator({
    Home: {
        screen: Home,
        // navigationOptions:()=>NavOptions("Home", 'i_0', 'i_1', 'Home')
        navigationOptions: () => {
            let options = zimaUtils.NavOptions("Home", 'Home', 'i_1', 'i_2');

            return options;
        }
    },
    Shop: {
        screen: Shop,
        navigationOptions: () => zimaUtils.NavOptions("Shop", 'Shop', 'i_3', 'i_4'),
    },
    Mine: {
        screen: Mine,
        navigationOptions: () => zimaUtils.NavOptions("Mine", 'Mine', 'i_5', 'i_6'),
    },
    More: {
        screen: More,
        navigationOptions: () => zimaUtils.NavOptions("More", 'More', 'i_7', 'i_8'),
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    initialRouteName: mainPage,
    backBehavior: 'none',
    tabBarOptions: {
        upperCaseLabel: true,
        showIcon: true,
        showLabel: true,
        activeTintColor:'white',
        inactiveTintColor:'wheat',

        style: {
            backgroundColor: '#0000',
            // height: 52,
            zIndex: 0,
            position: 'relative'
        },
        labelStyle: {
            fontSize: 11,
            // marginTop: -1,
        },
        iconStyle: {
            // marginTop: -4,
            height: 30,
            width: 30
        },
        tabStyle: {
            backgroundColor: zimaUtils.mainColor,
            // margin: 10
        },
        indicatorStyle: {
            height: 0
        }
    }

});

const KNav = StackNavigator({
    KTab: {
        screen: KTab,
    },
    HomeDetail: {
        screen: HomeDetail
    }

});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE'
    }, innerViewStyle: {}
});

module.exports = KMain;