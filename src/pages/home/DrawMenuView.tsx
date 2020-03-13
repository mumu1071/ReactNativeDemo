import React, {Component} from 'react';
import {
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {layoutAnimationAction} from "../../utils/CommonUtils";

interface Props {
    navigation: any
    isShowMenu: boolean
}

interface State {

}

/**
 * 侧边栏View
 */
export default class DrawMenuView extends Component<Props, State> {

    render() {
        this.showAnimation(this.props.isShowMenu);
        let leftPos = this.props.isShowMenu ? 0 : -270;
        return (
            <View style={[styles.menu, {left: leftPos}]}>

                <Text>我是侧边栏</Text>
            </View>
        );
    }

    //显示动画
    showAnimation = (isShowMenu: boolean) => {
        if (isShowMenu) {
            LayoutAnimation.configureNext(layoutAnimationAction(300, {
                type: 'easeIn',
                property: 'opacity'
            }, {type: 'easeOut', property: 'opacity'}));
        } else {
            LayoutAnimation.configureNext(layoutAnimationAction(300, {},
                {
                    type: 'easeOut',
                    property: 'opacity'
                }));
        }
    }
}


const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 270,
        height: '100%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'column'
    },
});
