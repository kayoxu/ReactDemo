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

var datas = require('./MiddleData');

class KMineMiddleView extends Component<{}> {

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
                {this.renderAllItem()}

            </View>
        );
    }

    renderAllItem() {
        var itemArr = [];
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}/>
            );
        }
        return itemArr;
    }
}

class InnerView extends Component {

    static defaultProps = {
        iconName: '',
        title: ''
    };


    render() {
        return (
            <View style={styles.itemStyle}>
                <Image source={{uri: this.props.iconName}} style={{width: 30, height: 20, marginBottom: 2}}/>
                <Text style={{marginTop: 2, color: 'gray', fontSize: 12}}>
                    {this.props.title}
                </Text>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    itemStyle: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = KMineMiddleView;