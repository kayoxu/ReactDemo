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
    Switch
} from 'react-native';
import zimaUtils from '../../util/zimaUtils';

class KCommonCell extends Component<{}> {

    static defaultProps = {
        title: '',
        rightTitle: '',
        isSwitch: false
    };

    constructor(props) {
        super(props);
        this.state = {
            isOn: false
        };
    };

    render() {
        return (
            <TouchableOpacity activeOpacity={.5}>
                <View style={styles.container}>
                    <Text>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView() {
        if (this.props.isSwitch) {
            return (<Switch value={this.state.isOn} onValueChange={() => this.setState({isOn: !this.state.isOn})}/>)
        } else {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightarrow'}} style={{width: 8, height: 18}}/>
                </View>
            );
        }
    }

    rightTitle() {
        if (this.props.rightTitle.length > 0) {
            return (<Text
                style={{paddingRight: 8, paddingLeft: 8, fontSize: 11, color: 'gray'}}>{this.props.rightTitle}</Text>);
        }
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
        paddingLeft: 14,
        paddingRight: 14
    }
});

module.exports = KCommonCell;