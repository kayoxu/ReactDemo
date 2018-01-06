import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';


let wine = require('../util/BadgeData.json').data;
let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

class ListViews extends Component {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        // this.state = {title: '不透明触摸'};
        //1.设置数据源
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //2. 返回数据
        this.state = {
            dataSource: ds.cloneWithRows(wine)
        };
    };

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow}/>
        );
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {
        // console.log(rowData, sectionID, rowID);
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => alert(rowData.content)}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.leftImageStyle}/>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.topTitleStyle}>{rowData.content}</Text>
                        <Text style={styles.bottomTitleStyle}>$: {rowData.title} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
    },
    cellViewStyle: {
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: .5,
        borderBottomColor: '#eee'
    },
    leftImageStyle: {
        width: 60,
        height: 60,
        marginRight: 15
    },
    rightViewStyle: {
        justifyContent: 'center',//space-between space-around
    },
    topTitleStyle: {
        marginBottom: 5,
        color: "red",
        width: width * .7
    },
    bottomTitleStyle: {
        color: 'blue'
    }
});

// export default ListViews;
module.exports = ListViews;