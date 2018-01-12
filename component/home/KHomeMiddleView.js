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

let MiddleCommonView = require('./KMiddleCommonView');
let TopMiddleData = require('../../LocalData/HomeTopMiddleLeft');

class KHomeMiddleView extends Component<{}> {

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
                {this.renderLeftView()}
                <View >
                    {this.renderRightView()}
                </View>


            </View>
        );
    }

    renderLeftView() {

    }

    renderRightView() {
        let itemArr = [];
        let rightDatas = TopMiddleData.dataRight;
        for (let i = 0; i < rightDatas.length; i++) {
            let data = rightDatas[i];
            itemArr.push(
                <MiddleCommonView key={i}
                                  title={data.title}
                                  subTitle={data.subTitle}
                                  rightIcon={data.rightImage}
                                  titleColor={data.titleColor}/>
            );
        }
        return itemArr;
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE'
    }
});

module.exports = KHomeMiddleView;