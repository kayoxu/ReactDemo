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
    WebView
} from 'react-native';

let zimaUtils = require('../../util/zimaUtils');

class KShopCenterDetailView extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '不透明触摸',
            data: this.props.navigation.state.params.data
        };
    };


    static navigationOptions = (navigation, screenProps) => {
        let nav = zimaUtils.NavOptions("ShopCenterDetail");
        nav.headerRight = (
            <View style={{height: 44, width: 55, justifyContent: 'center', paddingRight: 15}}/>
        );
        // zimaUtils.hideNavigator(nav);//隐藏ToolBar
        return nav;
    };
// <TouchableOpacity onPress={() => this.popTopHome()}>
// <Text>{this.state.data}</Text>
// </TouchableOpacity>

    render() {
        return (

            <View style={styles.container}>
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.dealWithUrl(this.state.data)}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />

            </View>
        );
    }

    popTopHome() {
        zimaUtils.goBack(this);
    }

    dealWithUrl(url) {
        return url.replace('imeituan://www.meituan.com/web/?url=', '')

            + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271'
            + '&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271'
            + '&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709'
            + '&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0'
            + '&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA'
            + '&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, innerViewStyle: {}
});

module.exports = KShopCenterDetailView;