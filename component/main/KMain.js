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


let mainPage = "Home";


class KMain extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    static navigationOptions = (navigation, screenProps) => {
        let options = zimaUtils.NavOptions("");
        options.header = () => {
            return (
                <View>
                </View>
            )
        };
        return options;
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
            let options = zimaUtils.NavOptions("首页", '首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected');
            // options.headerMode = 'none';
            //   return options;
        }
    },
    Shop: {
        screen: Shop,
        navigationOptions: () => zimaUtils.NavOptions("商家", '商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected'),
    },
    Mine: {
        screen: Mine,
        //navigationOptions: () => zimaUtils.NavOptions("我的", '我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected'),
    },
    More: {
        screen: More,
        navigationOptions: () => zimaUtils.NavOptions("更多", '更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected'),
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    initialRouteName: mainPage,
    backBehavior: 'none',
    tabBarOptions: {
        upperCaseLabel: true,
        showIcon: true,
        showLabel: true,
        activeTintColor: 'white',
        inactiveTintColor: 'wheat',

        style: {
            backgroundColor: '#0000',
            height: 52,
            // zIndex: 1,
            // position: 'relative'
        },
        iconStyle: {
            marginTop: Platform.OS === 'ios' ? 4 : -3,
            height: 30,
            width: 30,
        },
        labelStyle: {
            fontSize: 11,
            marginBottom: Platform.OS === 'ios' ? 4 : 0,
            marginTop: Platform.OS === 'ios' ? 0 : -1,
            // bottom: 1,
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
        backgroundColor: '#FAFAFA'
    }, innerViewStyle: {}
});

module.exports = KMain;