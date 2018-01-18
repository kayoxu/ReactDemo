import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    TabBarIOS
} from 'react-native';

let zimaUtils = require('../../util/zimaUtils');

class KShopCenterDetailView extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '不透明触摸',
            data: this.props.navigation.state.params.data
        };
    };


    static navigationOptions = (navigation, screenProps) => {
        let nav = zimaUtils.NavOptions("Detail");
        nav.headerRight = (
            <View style={{height: 44, width: 55, justifyContent: 'center', paddingRight: 15}}/>
        );

        return nav;
    };


    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.popTopHome()}>
                    <Text>{this.state.data}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    popTopHome() {
        zimaUtils.goBack(this);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE'
    }, innerViewStyle: {}
});

module.exports = KShopCenterDetailView;