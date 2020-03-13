import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View
} from 'react-native';
import {Color} from '../../constant/style/Color';
import Toast from "react-native-root-toast";

interface Props {
    navigation: any
    showMenu: () => void
}

interface State {

}

/**
 * TitleBarView
 */
export default class TitleBarView extends Component<Props, State> {

    render() {
        return (
            <View style={styles.content_root}>
                <View style={{
                    width: '100%', height: 50, alignItems: 'center', marginTop: 50
                }}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.props.showMenu && this.props.showMenu();
                        }}>
                        <Image
                            style={{width: 30, height: 30, position: 'absolute', left: 10}}
                            source={require('../../assets/images/timg.jpg')}/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 18}}>标题-芒果电单车</Text>

                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.props.navigation &&
                            this.props.navigation.navigate('demo')
                        }}>
                        <Text style={{
                            fontSize: 18,
                            position: 'absolute',
                            right: 10,
                        }}>Demo页面</Text>
                    </TouchableWithoutFeedback>

                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    content_root: {
        width: '100%',
        height: 100,
        backgroundColor: Color.main,
        position: 'absolute',
        top: 0,
        alignItems: 'center'
    },
});
