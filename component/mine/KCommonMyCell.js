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

class KCommonMyCell extends Component<{}> {

    static defaultProps = {
        leftIconName: '',
        leftTitle: '',
        rightIconName: '',
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
                    <Image source={{uri: this.props.leftIconName}} style={styles.leftImgStyle}/>
                    <Text style={styles.leftTitleStyle}>
                        {this.props.leftTitle}
                    </Text>

                </View>

                <View style={styles.rightViewStyle}>
                    {this.rightSubView()}
                </View>


            </View>
        );
    }

    rightSubView() {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {this.renderRightContent()}
                <Image source={{uri: 'icon_cell_rightarrow'}} style={{width: 8, height: 18}}/>
            </View>
        );
    }

    renderRightContent() {
        if (this.props.rightIconName.length === 0) {
            return (
                <Text style={styles.rightTitleStyle}>{this.props.rightTitle}</Text>
            );
        } else {
            return (<Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13,marginRight:8}}/>);
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 14,
        paddingRight: 14,
        height: 44,
        backgroundColor: 'white',
        width: zimaUtils.width,
        alignItems: 'center',
        borderBottomWidth: .5,
        borderBottomColor: '#ddd',
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftImgStyle: {
        width: 30,
        height: 30,
        marginRight: 8
    },
    leftTitleStyle: {},

    rightTitleStyle: {
        color: 'gray',
        fontSize: 11,
        paddingRight: 8,
        paddingLeft: 8
    },
    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }

});

module.exports = KCommonMyCell;