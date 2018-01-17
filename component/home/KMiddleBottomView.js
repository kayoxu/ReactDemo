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
let datas = require('../../LocalData/XMG_Home_D4');

class KMiddleBottomView extends Component<{}> {

    static defaultProps = {
        age: 21,
        popTopHome: null
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}>

                </View>

                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>

            </View>
        );
    }

    renderBottomItem() {
        var itemArr = [];
        let dataArr = datas.data;
        for (let i = 0; i < dataArr.length; i++) {
            let data = dataArr[i];
            itemArr.push(
                <MiddleCommonView key={i}
                                  title={data.maintitle}
                                  subTitle={data.deputytitle}
                                  rightIcon={this.dealwithImaUrl(data.imageurl)} //w.h
                                  titleColor={data.typeface_color}
                                  tplurl={data.tplurl}
                                  callBackClickCell={(data) => this.popToTopView(data)}
                />
            );
        }

        return itemArr;
    }

    popToTopView(data) {
        this.props.popTopHome(data);
    }

    dealwithImaUrl(url) {
        let str = 'w.h';
        if (-1 !== url.search(str)) {
            url = url.replace(str, '50.50');
        }
        return url;
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 14,
        backgroundColor: '#FEFEFE'
    },
    topViewStyle: {},
    bottomViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

module.exports = KMiddleBottomView;