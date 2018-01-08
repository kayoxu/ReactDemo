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

let zimaUtils = require('../../util/zimaUtils');

class KHomeDetail extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };


    static navigationOptions = (navigation, screenProps) => {
        let nav = zimaUtils.NavOptions("Detail");

        nav.headerRight = (
            <View style={{height: 44, width: 55, justifyContent: 'center', paddingRight: 15}}/>
        );
        // nav.header = (
        //     <View>
        //
        //     </View>
        // );
        return nav;
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>KHomeDetail</Text>

            </View>
        );
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

module.exports = KHomeDetail;