import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

let data = require('../util/BadgeData.json').data;
let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
let cols = 3;
let cellWidth = width / cols - 5;
let cellHeight = width / cols + 10;
let vMargin = (width - cellWidth * cols) / (cols + 1);
let hMargin = 20;

class ListViewNine extends Component<{}> {

    static defaultProps = {
        age: 18,
    };

    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data)
        };
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                      contentContainerStyle={styles.listViewStyle}
                      initialListSize={12}
                      showsVerticalScrollIndicator={false}/>
        );
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => alert(rowData.content)}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.imageStyle}/>
                    <Text>{rowData.title}</Text>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1


    },
    listViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-around'
    },
    cellViewStyle: {
        width: cellWidth,
        height: cellHeight,
        marginTop: hMargin,
        marginLeft: vMargin,
        alignItems: 'center',
    },
    imageStyle: {
        width: cellWidth - 10,
        height: cellWidth - 10
    }
});

module.exports = ListViewNine;