import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home
                </Text>
            </View>
        )
    }
}

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Profile
                </Text>
            </View>
        )
    }
}


class TabBar extends Component<{}> {

    static defaultProps() {

    }

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={{uri: 'i_0'}} style={styles.tabbar_icon}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'i_1'}} style={styles.tabbar_icon}/>}
                    // badgeText="0"
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image source={{uri: 'i_2'}} style={styles.tabbar_icon}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'i_3'}} style={styles.tabbar_icon}/>}
                    // renderBadge={() => <CustomBadgeView/>}
                    onPress={() => this.setState({selectedTab: 'profile'})}>
                    <Profile/>
                </TabNavigator.Item>
            </TabNavigator>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
});


module.exports = TabBar;