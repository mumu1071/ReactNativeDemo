import FetchNet from "./config/FetchNet";
import {UserInfo} from "../repository/model/BusinessBean";

/**
 * 所有网络请求
 */
//测试网络请求
export function requestTestData(onRequest: (userInfo: UserInfo) => void) {
    FetchNet.get<UserInfo>('/auth/admin')
        .then(user => {
            onRequest && onRequest(user.result);
        })
        .catch(error => {
            console.warn('Fetch article detail error:', error);
        });
};
