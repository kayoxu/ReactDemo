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

class Touchable extends Component<{}> {

    static defaultProps = {
        age: 21,
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    render() {
        return (
            <View ref="topView" style={styles.container}>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={() => this.activeEvent("点击")}
                                  onPressIn={() => this.activeEvent("按下")}
                                  onPressOut={() => this.activeEvent("抬起")}
                                  onLongPress={() => this.activeEvent("长按")}

                >
                    <View style={styles.innerViewStyle}>
                        <Text>点击事件</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <Text>{this.state.title}</Text>
                    <Text>{this.props.age}</Text>
                </View>

            </View>
        );
    }


    //点击事件

    activeEvent(event) {

        this.setState({title: event});




    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE'
    }, innerViewStyle: {}
});

module.exports = Touchable;