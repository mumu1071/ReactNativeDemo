import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Overlay, Text} from "react-native-elements";


/**
 * 弹框部分
 */

interface State {
    isVisible: boolean //弹框是否展示
}

interface Props {

}

/**
 * 弹框页面
 */
export default class DemoOverlay extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Overlay isVisible={this.state.isVisible}>
                    <Text>Hello from Overlay!</Text>
                </Overlay>;

                <Text>{'Text'}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
