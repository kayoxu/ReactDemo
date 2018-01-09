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

import zimaUtils from '../../util/zimaUtils';

class KMine extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    static navigationOptions = (navigation, screenProps) => {
        let options = zimaUtils.NavOptions("我的", '我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected');
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
            <View style={styles.container}>
                <Text>Mine</Text>

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

module.exports = KMine;