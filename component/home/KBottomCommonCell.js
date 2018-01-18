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


class KBottomCommonCell extends Component<{}> {

    static defaultProps = {
        leftIcon: '',
        leftTitle: '',
        rightTitle: ''
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.leftViewStyle}>
                    <Image
                        source={{uri: this.props.leftIcon}}
                        style={styles.leftViewIconStyle}/>
                    <Text>{this.props.leftTitle}</Text>
                </View>

                <View style={styles.rightViewStyle}>
                    <Text>{this.props.rightTitle}</Text>
                    <Image
                        source={{uri: 'icon_cell_rightArrow'}}
                        style={styles.rightViewIconStyle}/>

                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: 44,
        width: zimaUtils.width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        borderBottomColor: '#999',
        borderBottomWidth: .2
    },
    leftViewStyle: {
        alignItems: 'center',
        marginLeft: 12,
        flexDirection: 'row',
    },
    leftViewIconStyle: {
        height: 25,
        width: 25,
        marginRight: 4
    },
    rightViewStyle: {
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightViewIconStyle: {
        height: 13,
        width: 8,
        marginLeft: 4
    }

});

module.exports = KBottomCommonCell;