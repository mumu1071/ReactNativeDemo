import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {observer} from "mobx-react";
import DrawMenuView from '../home/DrawMenuView';
import TitleBarView from '../home/TitleBarView';
import HomePageStore from "../../store/pages/home/HomePageStore";

interface Props {
    navigation: any
    rootStore: any
}


@observer
export default class HomePage extends Component<Props> {

    pageStore: HomePageStore;

    constructor(props: Props) {
        super(props);
        this.pageStore = new HomePageStore();
    }


    componentDidMount() {
        this.pageStore.actionTestRequest();
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderShadowBg()}

                <TitleBarView
                    navigation={this.props.navigation}
                    showMenu={this.pageStore.actionShowMenu}/>

                {this.renderMapContent()}

                <TouchableOpacity
                    onPress={() => {
                        this.pageStore.actionTestRequest();
                    }}>
                    <Text>测试网络请求</Text>
                </TouchableOpacity>

                <Text style={styles.welcome}>我是主页</Text>
                <Text style={styles.welcome}>{'我是网络' + this.pageStore.userInfo.name}</Text>

                <DrawMenuView
                    navigation={this.props.navigation}
                    isShowMenu={this.pageStore.isShowMenu}/>

            </View>
        );
    }

    //渲染阴影
    renderShadowBg = () => {
        return (
            <View style={[styles.shadow_background, {opacity: this.pageStore.isShowShadow ? 1 : 0}]}>
                <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => {
                        this.pageStore.actionHindShadow();
                    }}/>
            </View>);
    };

    //渲染地图部分
    renderMapContent = () => {
        return (<View/>);
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    shadow_background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#00000033'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    menu: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 270,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 110},
        flexDirection: 'column'
    },
});
