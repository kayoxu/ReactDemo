import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

let detail = require('../home/KHomeDetail');
let zimaUtils = require('../../util/zimaUtils');

class KHome extends Component<{}> {

    static defaultProps = {
        age: 21,
    };


    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    static navigationOptions = (navigation, screenProps) => {
        let options = zimaUtils.NavOptions("首页", '首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected');
        options.header = () => {
            return (
                <View>
                    {renderNavBar()}
                </View>
            )
        };
        return options;
    };


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    zimaUtils.startActivity(this, 'HomeDetail')
                }}>
                    <Text>Home</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

function renderNavBar() {
    return (
        <View style={styles.navBarStyle}>
            <Text>广州</Text>

            <TextInput placeholder='输入商家,品类,商圈'
                       style={styles.topInputStyle}
                       underlineColorAndroid={'#0000'}/>
            <View style={styles.navBarRightView}>
                <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE'
    },
    topInputStyle: {
        width: zimaUtils.width * .6,
        height: 40,
        backgroundColor: 'white',

    },
    navRightImgStyle: {
        width: 30,
        height: 30
    },
    navBarStyle: {
        height: 56,
        backgroundColor: zimaUtils.mainColor,
        flexDirection: 'row',
        justifyContent: 'space-around',//between
        alignItems: 'center'
    },
    navBarRightView: {
        flexDirection: 'row'
    }
});

module.exports = KHome;