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

class KCommonCell extends Component<{}> {

    static defaultProps = {
        title: ''
    };

    constructor(props) {
        super(props);
        this.state = {title: '不透明触摸'};
    };

    render() {
        return (
            <TouchableOpacity activeOpacity={.5} onPress={() => alert("ddd")}>
                <View style={styles.container}>
                    <Text>{this.props.title}</Text>
                    <Image source={{uri: 'icon_cell_rightarrow'}} style={{width: 8, height: 18}}/>
                </View>
            </TouchableOpacity>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        height: 44,
        width: zimaUtils.width,
        backgroundColor: 'white',
        borderBottomWidth: .5,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8
    }
});

module.exports = KCommonCell;