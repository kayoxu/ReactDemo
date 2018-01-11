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
    ListView,
    ScrollView
} from 'react-native';

var datas = require('../../LocalData/TopMenu').data;
let zimaUtils = require('../../util/zimaUtils');

class KHomeTopView extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            page: 0,
            dataSource: ds
        };
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={'scrollView'}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}>
                    {this.renderScrollView()}

                </ScrollView>

                <View style={styles.topBottomViewStyle}>
                    {this.renderBottomView()}
                </View>
            </View>
        );
    }

    renderScrollView() {
        let itemArr = [];
        for (let i = 0; i < datas.length; i++) {
            itemArr.push(
                <View key={i} style={{width: zimaUtils.width}}>
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(datas[i])}
                        renderRow={this.renderRow}
                        initialListSize={12}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.topListViewStyle}
                    />
                </View>
            )
        }

        return itemArr;
    }

    renderBottomView() {
        let itemArr = [];
        for (let i = 0; i < datas.length; i++) {
            let textColor = this.state.page === i ? 'red' : 'gray';
            itemArr.push(
                <TouchableOpacity key={i} activeOpacity={.5} onPress={() => this.gotoPage(i)}>
                    <Text style={{fontSize: 35, color: textColor}}>&bull;</Text>
                </TouchableOpacity>
            )
        }
        return itemArr;
    }

    renderRow(rowData) {
        return (
            <View style={styles.topListViewCellStyle}>
                <Image source={{uri: rowData.image}} style={{width: 50, height: 50}}/>
                <Text style={{color: 'gray', fontSize: 12}}>{rowData.title}</Text>
            </View>
        )
    }

    onAnimationEnd(e) {
        //1.求出水平方向偏移量
        let offSetX = e.nativeEvent.contentOffset.x;

        //2.求出当前的页数
        let currentPage = Math.floor(offSetX / zimaUtils.width);

        //3.更新状态, 重新绘制UI
        this.setState({
            page: currentPage
        });
    }

    gotoPage(page) {
        let scrollView = this.refs.scrollView;
        let offsetX = page * zimaUtils.width;
        scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
        this.setState({page: page});
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFE'
    },
    topListViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    topListViewCellStyle: {
        width: zimaUtils.width / 5,
        height: zimaUtils.width / 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#9999',
        borderRightWidth: .2,
        borderBottomWidth: .2
    },
    topBottomViewStyle: {
        marginTop: Platform.OS === 'ios' ? 0 :3,
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 20 : 14,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1
    }
});

module.exports = KHomeTopView;