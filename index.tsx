/**
 * App entry.
 * @file App 入口文件
 */
import {AppRegistry, StyleSheet, View} from 'react-native';
import React, {Component} from 'react'
import AppContainer from './src/routes';
import {Provider} from 'mobx-react';
import RootStore from './src/store/RootStore';

const appJson = require('./app.json');


class App extends Component {

    render() {
        return (
            <Provider rootStore={new RootStore()}>
                <View style={styles.container}>
                    <AppContainer/>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent(appJson.name, () => App);
