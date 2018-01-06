import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ListView,
    Image,
    Text,
    TouchableOpacity,

} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
let Car = require('../util/CarData');


class ListViewTag extends Component<{}> {

    static defaultProps = {
        age: 8
    };

    constructor(props) {
        super(props);

        let getSectionHeaderData = (dataBlob, sectionID) => {
            return dataBlob[sectionID] + "  我是另外加的";
        };

        let getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + '++' + rowID];
        };

        let ds = new ListView.DataSource({
                getSectionHeaderData: getSectionHeaderData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        ;
        this.state = {
            dataSource: ds
        }
    }


    render() {
        return (
            <View style={styles.outerViewStyle}>
                <View style={styles.headerViewStyle}>
                    <Text style={{color: 'white', fontSize: 25}}>
                        头部标题
                    </Text>
                </View>


                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                          renderSectionHeader={this.renderSectionHeader}
                />

            </View>
        );
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.imageStyle}/>

                    <Text> {rowData.title}</Text>
                </View>

            </TouchableOpacity>

        );
    }


    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.sectionHeaderViewStyle}>
                <Text style={{marginLeft: 5, color: 'red'}}>
                    {sectionData}
                </Text>

            </View>
        );
    }

    componentDidMount() {
//调用json数据
        this.loadDataFromJson();

    }

    loadDataFromJson() {

        let jsonData = Car.data;
        //定义变量
        let dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            cars = [];

        for (let i = 0; i < jsonData.length; i++) {
            //1.把组号放入sectionIDs中
            sectionIDs.push(i);

            //2.把组内容放入dataBlob中
            dataBlob[i] = jsonData[i].title;

            //3.取出改组中所有车
            cars = jsonData[i].cars;
            rowIDs[i] = [];

            //4.遍历所有车数组

            for (let j = 0; j < cars.length; j++) {
                //把行号放入rowIDs
                rowIDs[i].push(j);
                //把每一行的内容放入dataBlob对象中
                dataBlob[i + '++' + j] = cars[j];
            }
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
            da0:1
        });
    }

}

const styles = StyleSheet.create({
    outerViewStyle: {
        flex: 1
    },
    headerViewStyle: {
        height: 40,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 0.5
    },
    imageStyle: {
        width: 80,
        height: 80,
    }, sectionHeaderViewStyle: {
        backgroundColor: '#E8E8E8',
        height: 25,
        justifyContent: 'center'
    }
});

export default ListViewTag;