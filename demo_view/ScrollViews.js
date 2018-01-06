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

const Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

class ScrollViews extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    render() {
        return (
            <ScrollView style={styles.container}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}>
                {this.renderChildView()}
            </ScrollView>);
    }

    renderChildView() {
        var allChild = [];
        var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
        for (var i = 0; i < 5; i++) {
            allChild.push(
                <View key={i} style={{backgroundColor: colors[i], width: width, height: 200}}>
                    <Text>{i}</Text>
                </View>
            )
        }
        return allChild;
    }

    //点击事件
    activeEvent(event) {
        this.setState({title: event});
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, innerViewStyle: {}
});

module.exports = ScrollViews;