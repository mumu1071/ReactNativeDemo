import React, {Component} from 'react';
import {requireNativeComponent} from 'react-native';

const RTCBtn = requireNativeComponent("RCTButton");

/**
 * 地图部分
 */
export default class BridgeButton extends Component {
    render() {
        return <RTCBtn {...this.props}/>;
    }
}
