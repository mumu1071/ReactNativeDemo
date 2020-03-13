/**
 * 动画工具类
 */
import {LayoutAnimation, PermissionsAndroid} from 'react-native';

export const layoutAnimationAction = (duration, create, update, deletes) => {
    let animations = {};
    if (duration) {
        animations.duration = duration;
    }
    if (create && create.type && create.property) {
        animations.create = {
            type: LayoutAnimation.Types[create.type],
            property: LayoutAnimation.Properties[create.property]
        }
    }
    if (update && update.type && update.property) {
        animations.update = {
            type: LayoutAnimation.Types[update.type],
            property: LayoutAnimation.Properties[update.property]
        }
    }
    if (deletes && deletes.type && deletes.property) {
        animations.delete = {
            type: LayoutAnimation.Types[deletes.type],
            property: LayoutAnimation.Properties[deletes.property]
        }
    }
    return animations;
};

/**
 * 获取定位权限
 * @returns {Promise<void>}
 */
export async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            {
                title: "Location Permission",
                message: "location test.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.ACCESS_COARSE_LOCATION) {
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
}
