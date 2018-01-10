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

class KMineHeaderView extends Component<{}> {

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

                {this.renderTopView()}

            </View>
        );
    }

    renderTopView() {
        return (
            <View style={styles.topViewStyle}>
                <View style={styles.topTopViewStyle}>
                    <View style={styles.topTopLeftViewStyle}>
                        <Image source={{uri: 'see'}} style={styles.topTopLeftIconStyle}/>
                        <View style={styles.topTopLeftRightViewStyle}>
                            <Text style={{
                                fontSize: 18,
                                color: 'white',
                                fontWeight: 'bold',
                                alignSelf: 'center',
                                marginLeft: 8,
                                marginRight: 4
                            }}>小码哥电商</Text>
                            <Image source={{uri: 'avatar_vip'}} style={{width: 17, height: 17}}/>
                        </View>
                    </View>
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13}}/>
                </View>
                <View style={styles.topBottomView}>
                    {this.renderTopBottomView()}
                </View>
            </View>
        );
    }

    renderTopBottomView() {
        return this.renderAllItem();
    }

    renderAllItem() {
        let datas = [{"num": 100, "title": "码哥劵"}, {"num": 12, "title": "评价"}, {"num": 50, "title": "收藏"}];
        let itemArr = [];
        for (let i = 0; i < datas.length; i++) {
            let data = datas[i];
            itemArr.push(<InnerView key={i * 2} number={data.num} title={data.title}/>);
            if (i < datas.length - 1) {
                itemArr.push(<View key={i * 2 + 1} style={{width: .6, height: 40, backgroundColor: 'white'}}/>)
            }
        }
        return itemArr;
    }
}

class InnerView extends Component {

    static defaultProps = {
        number: '',
        title: ''
    };


    render() {
        return (
            <View style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 14}}>{this.props.number}</Text>
                <Text style={{color: 'white', fontSize: 14}}>{this.props.title}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: zimaUtils.mainColor,
        height: 150,
    },
    topViewStyle: {
        flex: 1,
        justifyContent: 'space-between',
        width: zimaUtils.width,
    },

    topTopViewStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 14,
        paddingRight: 14
    },
    topTopLeftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    topTopLeftIconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: '#F999'
    },
    topTopLeftRightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topBottomView: {
        marginTop: 10,
        backgroundColor: '#fff5',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    }
});

module.exports = KMineHeaderView;