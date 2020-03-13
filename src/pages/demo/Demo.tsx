import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


interface Props {
  navigation: any
}

/**
 * Demo页面
 */
export default class DemoHome extends Component<Props> {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingVertical: 20 }}>
        <Button
          title="桥接测试"
          color="#841584"
          onPress={() => {
            this.props.navigation &&
            this.props.navigation.navigate('demoBridge');
          }}
        />
        <Button
          onPress={() => {
            this.props.navigation &&
            this.props.navigation.navigate('demoFluency');
          }}
          title="地图页面"/>
        <Button
          onPress={() => {
            this.props.navigation &&
            this.props.navigation.navigate('demoOverlay');
          }}
          title="弹框页面"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
