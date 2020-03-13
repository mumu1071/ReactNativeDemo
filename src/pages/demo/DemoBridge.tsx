import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from "react-native-elements";
import * as BridgeUtils from "../../bridge/modules/BridgeUtils";


/**
 * 桥接测试页面
 */
export default class DemoMap extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={{marginTop: 10}}
                    onPress={() => {
                        BridgeUtils.callPhone('18210392287');
                    }}
                    title="桥接测试"/>

                <Text style={{fontSize: 17}}>iOS侧暂不支持</Text>
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
