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


let BottomCommonCell = require('./KBottomCommonCell');
let theData = require('../../LocalData/XMG_Home_D5');
let zimaUtils = require('../../util/zimaUtils');

let itemImgWidth = zimaUtils.width / 3 * .8;
let itemImgHeight = zimaUtils.width / 3 * .8 * .75;
let itemImgMargin = (zimaUtils.width - 3 * itemImgWidth) / 6;

class KShopCenter extends Component<{}> {

    static defaultProps = {
        popToHomeView: null
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    render() {
        return (
            <View style={styles.container}>

                <BottomCommonCell
                    leftIcon='gw'
                    leftTitle='购物中心'
                    rightTitle={theData.tips}
                />

                <ScrollView
                    contentContainerStyle={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {this.renderAllItem()}
                </ScrollView>

            </View>
        );
    }

    renderAllItem() {
        let itemArr = [];
        let datas = theData.data;
        for (let i = 0; i < datas.length; i++) {
            let data = datas[i];
            itemArr.push(
                <ShopperCenterItem
                    key={i}
                    img={data.img}
                    sale={data.showtext.text}
                    name={data.name}
                    url={data.detailurl}
                    popTopShopCenter={(url) => this.popTopHome(url)}
                />
            );
        }
        return itemArr;
    }

    popTopHome(url) {
        //alert(url);
        if (this.props.popToHomeView == null) return;
        this.props.popToHomeView(url);
    }
}


class ShopperCenterItem extends Component<{}> {

    static defaultProps = {
        img: '',
        sale: '',
        name: '',
        url: '',
        popTopShopCenter: null
    };

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <TouchableOpacity onPress={() => this.clickItem(this.props.url)}>
                <View style={styles.itemContainer}>
                    <Image source={{uri: this.props.img}} style={styles.itemImgStyle}/>
                    <Text style={styles.itemImgTitleStyle}>{this.props.sale}</Text>
                    <Text style={styles.itemTitleStyle}>{this.props.name}</Text>
                </View>

            </TouchableOpacity>


        );
    }

    clickItem(url) {
        if (this.props.popTopShopCenter == null) return;
        this.props.popTopShopCenter(url);
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        // marginBottom: 14
    },
    scrollViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemContainer: {
        marginTop: 14,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    itemImgStyle: {

        resizeMode: 'contain',
        borderRadius: 5,
        width: itemImgWidth,
        marginLeft: itemImgMargin,
        marginRight: itemImgMargin,
        height: itemImgHeight,
    },
    itemImgTitleStyle: {
        position: 'absolute',
        top: itemImgHeight * .6,
        marginLeft: itemImgMargin,
        color: 'white',
        backgroundColor: 'orange'
    },
    itemTitleStyle: {
        marginTop: 8,
        marginBottom: 8,
        alignSelf: 'center'
    }
});

module.exports = KShopCenter;