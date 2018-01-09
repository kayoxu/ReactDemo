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
    ScrollView
} from 'react-native';
import zimaUtils from '../../util/zimaUtils';

var CommonCell = require('./KCommonCell');

class KMore extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    static navigationOptions = (navigation, screenProps) => {

        navigation.headerLeft = (
            <View style={{height: 40, width: 40, justifyContent: 'center', paddingLeft: 15}}/>
        );
        navigation.headerRight = (
            <TouchableOpacity activeOpacity={.4} style={styles.rightBtnStyle}>
                <Image source={{uri: 'icon_mine_setting'}} style={{height: 28, width: 28}}/>
            </TouchableOpacity>
        );

        return navigation;
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <CommonCell title={'扫一扫'} />
                    </View>
                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8E8E8'
    },
    rightBtnStyle: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15
    }
});

module.exports = KMore;