import {NativeModules} from "react-native";

//拨打电话
export const callPhone = (phoneNum: string) => {
    NativeModules.PhoneBridge.callPhone(phoneNum,()=>{

    });
};
