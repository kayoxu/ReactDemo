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
let zimaUtils = require('../../util/zimaUtils');

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
                <View style={styles.leftStyle}>
                    {this.renderLeftView()}
                </View>

                <View style={styles.rightStyle}>
                    {this.renderRightView()}
                </View>


            </View>
        );
    }

// {"img1" : "mdqg", "img2" : "yyms", "title" : "探路组碳烤鱼", "price": "¥9.5", "sale": "再减3元"}

    renderLeftView() {
        let itemArr = [];
        let data = TopMiddleData.dataLeft[0];
        itemArr.push(<Image key={0} source={{uri: data.img1}}
                            style={{width: 120, height: 30, resizeMode: 'contain'}}/>);
        itemArr.push(<Image key={1} source={{uri: data.img2}}
                            style={{width: 80, height: 30}}/>);
        itemArr.push(<Text key={2} style={{color: 'gray', fontSize: 20}}>{data.title}</Text>);
        itemArr.push(<View key={3}
                           style={{flexDirection: 'row', width: 100, alignItems: 'center'}}>
            <Text style={{color: 'blue'}}>{data.price}</Text>
            <Text style={{backgroundColor: 'yellow', borderRadius: 9}}>{data.sale}</Text>
        </View>);


        return itemArr;
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
    },
    leftStyle: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 120,
        width: zimaUtils.width / 2,
        borderColor: '#9999',
        borderBottomWidth: .2,
        borderRightWidth: .2
    },
    rightStyle: {
        height: 120,
    }
});

module.exports = KHomeMiddleView;