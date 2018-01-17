import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Platform,
    ScrollView,
    ListView
} from 'react-native';

let detail = require('../home/KHomeDetail');
let zimaUtils = require('../../util/zimaUtils');
let HomeTopView = require('./KHomeTopView');
let HomeMiddleView = require('./KHomeMiddleView');
let MiddleBottomView = require('./KMiddleBottomView');

class KHome extends Component<{}> {

    static defaultProps = {
        age: 21,
    };


    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    static navigationOptions = (navigation, screenProps) => {
        let options = zimaUtils.NavOptions("首页", '首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected');
        options.header = () => {
            return (
                <View>
                    {renderNavBar()}
                </View>
            )
        };
        return options;
    };

// <TouchableOpacity activeOpacity={0.5} onPress={() => {
//     zimaUtils.startActivity(this, 'HomeDetail')
// }}>
// <Text>Home</Text>
// </TouchableOpacity>
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/*头部View*/}
                    <HomeTopView/>
                    {/*中间的内容*/}
                    <HomeMiddleView/>
                    {/*中间下半部分*/}
                    <MiddleBottomView
                        popTopHome={(data) => this.pushToDetail(data)}
                    />

                </ScrollView>


            </View>
        );
    }


    pushToDetail(data) {
        zimaUtils.startActivity(this, 'HomeDetail',data)
    }
}

function renderNavBar() {
    return (
        <View style={styles.navBarStyle}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => alert("eee")}>
                <Text style={styles.navBarLeftBtnStyle}>广州</Text>
            </TouchableOpacity>

            <TextInput placeholder='输入商家,品类,商圈'
                       style={styles.topInputStyle}
                       underlineColorAndroid={'#0000'}/>
            <View style={styles.navBarRightView}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => alert('ddddd')}>
                    <Image source={{uri: 'icon_homepage_message'}} style={[styles.navRightImgStyle, {marginRight: 4}]}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => alert('eeee')}>
                    <Image source={{uri: 'icon_homepage_scan'}} style={[styles.navRightImgStyle, {marginLeft: 4}]}/>
                </TouchableOpacity>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA'
    },
    navBarLeftBtnStyle: {
        color: 'white',
        alignSelf: 'center',
        // marginTop: Platform.OS === 'ios' ? 16 : 0
    },
    topInputStyle: {
        width: zimaUtils.width * .6,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        // marginTop: Platform.OS === 'ios' ? 16 : 0

    },
    navRightImgStyle: {
        width: 28,
        height: 28,
    },
    navBarStyle: {
        height: Platform.OS === 'ios' ? (zimaUtils.height > 800 ? 108 : 84) : 56,
        backgroundColor: zimaUtils.mainColor,
        flexDirection: 'row',
        justifyContent: 'space-around',//between
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? (zimaUtils.height > 800 ? 30 : 20) : 0
    },
    navBarRightView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: Platform.OS === 'ios' ? 16 : 0
    }
});

module.exports = KHome;