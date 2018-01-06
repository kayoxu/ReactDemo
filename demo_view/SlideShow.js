import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    Image
} from 'react-native';


var zimaUtil = require('../util/zimaUtils');
var ImageData = require('../util/BadgeData');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

class SlideShow extends Component {

    static defaultProps = {
        duration: 3000,
    };

    constructor(props) {
        super(props);
        this.state = {currentPage: 0};
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={'scrollView'}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                    onScrollBeginDrag={() => this.onScrollBeginDrag()}
                    onScrollEndDrag={() => this.onScrollEndDrag()}
                >
                    {this.renderAllImage()}
                </ScrollView>
                {/*返回指示器, 5个圆点*/}
                <View style={styles.pageViewStyle}>
                    {this.renderPageCircle()}
                </View>

            </View>
        )
    }

    onScrollBeginDrag() {
        this.endTimer();
    }

    onScrollEndDrag() {
        this.startTimer();
    }

    onAnimationEnd(e) {
        //1.求出水平方向偏移量
        var offSetX = e.nativeEvent.contentOffset.x;

        //2.求出当前的页数
        var currentPage = Math.floor(offSetX / width);
        // console.log(currentPage);

        //3.更新状态, 重新绘制UI
        this.setState({
            currentPage: currentPage
        });
    }

    //返回图片对应的圆点
    renderPageCircle() {
        let indicatorArr = [];
        var style;
        let imgsArr = ImageData.data;
        for (let i = 0; i < imgsArr.length; i++) {
            style = (i === this.state.currentPage) ? {color: 'orange'} : {color: 'white'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 35}, style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }

    //返回所有图片
    renderAllImage() {
        let allImage = [];
        let imgsArr = ImageData.data;
        for (let i = 0; i < imgsArr.length; i++) {
            let imgItem = imgsArr[i];
            allImage.push(
                <Image key={i} source={{uri: imgItem.icon}} style={{width: width, height: width}}/>
            );
        }
        return allImage;
    }


    componentDidMount() {
        this.startTimer();

    }

    componentWillUnmount() {
        this.endTimer();
    }

    startTimer() {
        let scrollView = this.refs.scrollView;
        this.timer = setInterval(
            () => {
                let activePage = ((this.state.currentPage + 1 >= ImageData.data.length)) ? 0 : this.state.currentPage + 1;
                let offsetX = activePage * width;
                scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
                this.setState({currentPage: activePage});
            }, this.props.duration
        );
    }

    endTimer() {
        clearInterval(this.timer);
    }

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FAFAFA',
    },
    pageViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        // 定位
        position: 'absolute',
        bottom: 0,
    }
});

// module.exports = SlideShow;
export default SlideShow;
