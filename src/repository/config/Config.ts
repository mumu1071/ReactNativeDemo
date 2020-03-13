/**
 * App config
 * @file App 配置
 * @module app/config
 */

import { Platform } from 'react-native'

export const appName = 'mango_rn';
export const test_appApi = 'https://api.surmon.me';
export const release_appApi = 'https://api.mangoebike.com';
export const develop_appApi = 'https://api.surmon.me';

export const navigationPersistenceKey = __DEV__ ? '___NavigationStateDEV__' : null;

export const IS_DEV = __DEV__;
export const IS_IOS = Object.is(Platform.OS, 'ios');
export const IS_ANDROID = !IS_IOS;
