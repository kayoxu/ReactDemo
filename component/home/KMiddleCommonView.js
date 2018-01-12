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

class KMiddleCommonView extends Component<{}> {

    static defaultProps = {
        title: '',
        subTitle: '',
        rightIcon: '',
        titleColor: 'red'
    };

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.titleStyle, {color: this.props.titleColor}]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                <Image source={{uri: this.props.rightIcon}} style={styles.imgStyle}/>

            </View>
        );
    }


}


const styles = StyleSheet.create({
    container: {
        width: zimaUtils.width / 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        borderColor: '#9999',
        borderRightWidth: .2,
        borderBottomWidth: .2,
       flex:1
    },
    titleStyle: {
        fontSize: 20,
    },
    subtitleStyle: {
        fontSize: 14,
        color: 'gray'
    },
    imgStyle: {
        width: 50,
        height: 50
    }
});

module.exports = KMiddleCommonView;