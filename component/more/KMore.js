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

import CommonCell from './KCommonCell';

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
                    <View style={{marginTop: 20}}>
                        <CommonCell title={'扫一扫'}/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <CommonCell title={'省流量模式'} isSwitch={true}/>
                        <CommonCell title={'消息提醒'}/>
                        <CommonCell title={'邀请朋友使用小码哥电商'}/>
                        <CommonCell title={'清空缓存'} rightTitle={'11.5MB'}/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <CommonCell title={'意见反馈'}/>
                        <CommonCell title={'问卷调查'}/>
                        <CommonCell title={'支付帮助'}/>
                        <CommonCell title={'网络诊断'}/>
                        <CommonCell title={'关于码团'}/>
                        <CommonCell title={'省流量模式'}/>
                        <CommonCell title={'我要应聘'}/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <CommonCell title={'精品应用'}/>
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