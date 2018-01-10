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
import CommonMyCell from './KCommonMyCell';
import MineMiddleView from './KMineMiddleView';
import MineHeaderView from './KMineHeaderView';

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
                <MineHeaderView/>
            )
        };
        return options;
    };


    render() {
        return (
            <ScrollView
                style={styles.scrollViewStyle}>
                <View style={{marginTop: 0}}>
                    <CommonMyCell leftIconName='collect'
                                  leftTitle='我的订单'
                                  rightIconName=''
                                  rightTitle='查看全部订单'/>
                    <MineMiddleView/>
                </View>

                <View style={{marginTop: 20}}>
                    <CommonMyCell leftIconName='draft'
                                  leftTitle='小码哥钱包'
                                  rightIconName=''
                                  rightTitle='账户余额:¥100'/>
                    <CommonMyCell leftIconName='like'
                                  leftTitle='抵用券'
                                  rightIconName=''
                                  rightTitle='10张'/>
                </View>

                <View style={{marginTop: 20}}>
                    <CommonMyCell leftIconName='card'
                                  leftTitle='积分商城'
                                  rightIconName=''
                                  rightTitle=''/>
                </View>

                <View style={{marginTop: 20}}>
                    <CommonMyCell leftIconName='new_friend'
                                  leftTitle='今日推荐'
                                  rightIconName='me_new'
                                  rightTitle=''/>
                </View>


                <View style={{marginTop: 20}}>
                    <CommonMyCell leftIconName='pay'
                                  leftTitle='我要合作'
                                  rightIconName=''
                                  rightTitle='轻松开店,招财进宝!'/>
                </View>
            </ScrollView>
        );
    }

}


const styles = StyleSheet.create({

    scrollViewStyle: {
        backgroundColor: '#e8e8e8'
    }


});

module.exports = KMine;