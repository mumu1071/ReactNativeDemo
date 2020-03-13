import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

/**
 * 性能优化页面
 */
export default class DemoFluency extends Component {


    componentWillMount() {


    }

    componentDidMount() {

    }

    render() {
        return (


            <View style={styles.container}>

                <Text style={{ fontSize: 17 }}>车辆类型</Text>


            </View>
        );
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {


    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
