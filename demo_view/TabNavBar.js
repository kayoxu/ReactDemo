// import React, {Component} from 'react';
// import {
//     StyleSheet,
//     View,
//     Image,
//     Text,
//     TouchableOpacity,
//     Dimensions
// } from 'react-native';
// import {
//     StackNavigator,
//     TabNavigator,
//     DrawerNavigator
// } from 'react-navigation';


import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import React, {Component} from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

let navColor = '#EA5555';


class TabNavBar extends Component<{}> {

    static defaultProps() {

    }

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }


    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <MApp/>

        );
    }

}


class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={() => startActivity(this, 'Mine')}>
                    <Text style={styles.welcome}>
                        Welcome to Home !
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Find extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Find !
                </Text>
            </View>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Main !
                </Text>
            </View>
        )
    }
}

class Message extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Message !
                </Text>
            </View>
        )
    }
}

class Mine extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Mine !
                </Text>
            </View>
        )
    }
}


/**
 *
 * @param that this
 * @param  activity
 */
const startActivity = (that, activity) => {
    let {navigate} = that.props.navigation;
    navigate(activity);
};

const MTab = TabNavigator({

    Home: {
        screen: Home,
        navigationOptions: () => {
            let tabOptions = TabOptions("Home", 'i_0', 'i_1', 'Home');
            tabOptions.headerRight = (
                <Text style={{color: 'yellow', marginRight: 20}} onPress={() => alert('打断打断来')}>我的</Text>
            );
            tabOptions.headerLeft = (
                <Text style={{color: 'yellow', marginLeft: 20}} onPress={() => alert('大幅度发')}>返回</Text>);
            // tabOptions.header = null;
            return tabOptions;
        },
    },

    Find: {
        screen: Find,
        navigationOptions: () => TabOptions("Find", 'i_2', 'i_3', 'Find'),
    },

    Main: {
        screen: Main,
        navigationOptions: () => TabOptions("Main", 'i_4', 'i_5', 'Main'),
    },

    Msg: {
        screen: Message,
        navigationOptions: () => TabOptions("Msg", 'i_6', 'i_7', 'Msg'),
    },

    Mine: {
        screen: Mine,
        navigationOptions: () => TabOptions("Mine", 'i_8', 'i_9', 'Mine'),
    }


}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    initialRouteName: 'Main',
    backBehavior: 'none',
    tabBarOptions: {
        upperCaseLabel: true,
        showIcon: true,
        showLabel: true,
        // activeTintColor: 'white',
        // inactiveTintColor: 'darkgray',
        // activeBackgroundColor: 'yellow',
        // inactiveBackgroundColor: 'green',
        style: {
            // height: 45,
            backgroundColor: '#FAFAFA',
            zIndex: 0,
            position: 'relative'
        },
        labelStyle: {
            // fontSize: 12
        },
        iconStyle: {},
        tabStyle: {
            backgroundColor: navColor
        }
    }

});


const MApp = StackNavigator({
    MTab: {
        screen: MTab,
    },
    Home: {
        screen: Home
    },
    Find: {
        screen: Find,
    },
    Main: {
        screen: Main,
    },
    Message: {
        screen: Message,
    },
    Mine: {
        screen: Mine,
    }

}, {});


const TabOptions = (tabBarLabel1, nIcon, sIcon, navTitle) => {
    const tabBarLabel = tabBarLabel1;
    const tabBarIcon = ((tintColor, focused) => {
        return (<Image resizeMode={'contain'}
                       source={!focused ? {uri: nIcon} : {uri: sIcon}}
            // style={[styles.tabbar_icon, {tintColor: tintColor}]}
                       style={styles.tabbar_icon}
        />);
    });

    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize: 22, color: 'white', alignSelf: 'center'};
    // header的style
    const headerStyle = {backgroundColor: navColor};
    const tabBarVisible = true;

    return {
        tabBarLabel,
        tabBarIcon,
        headerTitle,
        headerTitleStyle,
        headerStyle,
        tabBarVisible,
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDD',
    },
    tabbar_icon: {
        width: 25,
        height: 25
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        marginTop: 10,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 18
    },
});


module.exports = TabNavBar;