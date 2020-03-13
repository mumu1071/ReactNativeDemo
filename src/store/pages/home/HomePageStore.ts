import { observable, action } from 'mobx';
import Toast from 'react-native-root-toast';
import { UserInfo } from '../../../repository/model/BusinessBean';
import Theme from '../../../constant/style/Theme';
import * as NetUtils from '../../../repository/NetUtils';

/**
 * 主页面Store
 * 业务逻辑也在此处理
 */
export default class HomePageStore {

    @observable isShowShadow = false; //是否显示背影
    @observable isShowMenu = false; //是否展示侧边栏

    @observable userInfo: UserInfo = new UserInfo(); //用户


    constructor() {

    }

    //网络请求
    @action
    actionTestRequest = () => {
        NetUtils.requestTestData(this.onRequestTestData);
    };

    //监听网络请求
    onRequestTestData = (userInfo: UserInfo) => {
        this.userInfo = userInfo;
        Toast.show('请求成功', Theme.ToastConfig);
    };

    //显示侧边栏
    @action
    actionShowMenu = () => {
        this.isShowMenu = true;
        this.isShowShadow = true;
    };

    //隐藏阴影部分
    @action
    actionHindShadow = () => {
        this.isShowMenu = false;
        this.isShowShadow = false;
    };
}
