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

let detail = require('../home/KHomeDetail');
let zimaUtil = require('../../util/zimaUtils');

class KHome extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    zimaUtil.startActivity(this, 'HomeDetail')
                }}>
                    <Text>Home</Text>
                </TouchableOpacity>


            </View>
        );
    }

    //点击事件
    activeEvent(event) {
        this.setState({title: event});
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

module.exports = KHome;