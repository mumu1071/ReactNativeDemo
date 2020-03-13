/**
 * App routes
 * @file App 路由
 */
import {createAppContainer, createStackNavigator} from "react-navigation";
import DemoScreen from "./pages/demo/Demo";
import DemoFluency from "./pages/demo/DemoFluency";
import HomeScreen from "./pages/home/HomePage";
import DemoOverlay from "./pages/demo/DemoOverlay";
import DemoBridge from "./pages/demo/DemoBridge";


const navigator = createStackNavigator({
    home: {
        screen: HomeScreen,//登录页面
        navigationOptions: ({}) => ({
            header: null
        })
    },
    demo: {//Demo页面
        screen: DemoScreen,
    },
    demoBridge: DemoBridge,//demo地图
    demoFluency: {
        screen: DemoFluency,//demo地图
        navigationOptions: ({}) => ({
            header: null
        })
    },
    demoOverlay: DemoOverlay,//demo弹框
});

export default createAppContainer(navigator);
