import Toast from 'react-native-root-toast';
import {ifIphoneX} from 'react-native-iphone-x-helper'
import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');
export default {
    Primary: '#fae310',
    PrimaryDark: '#F3AB3D',
    BackgroundColor: '#f5f5f5',
    PrimaryText: '#59574e',
    SecondaryText: '#8F8F8F',
    Component: '#fff',

    ToastConfig: {position: Toast.positions.CENTER, shadow: false, delay: 1},
    ToastConfigBottom: {position: Toast.positions.BOTTOM, shadow: false, delay: 1},
    ToastConfigTop: {position: Toast.positions.TOP = 100, shadow: false, delay: 1},

    styles: StyleSheet.create({
        container: {
            ...ifIphoneX({
                marginTop: 88,
            }, {
                marginTop: 64,
            }),
            backgroundColor: '#f6f6f6',
            flex: 1,
        },

    }),
    FontSizeS: 14,
    FontSizeM: 16,
    FontSizeL: 18,
    FontSizeXL: 20,
    //--------------------------高-------------------------//
    h_40: {
        height: 40
    },
    h_50: {
        height: 50
    },
    h_60: {
        height: 60
    },
    h_70: {
        height: 70
    },
    h_80: {
        height: 80
    },

    //--------------------------字号-------------------------//
    fs_6: {
        fontSize: 6
    },
    fs_8: {
        fontSize: 8
    },
    fs_9: {
        fontSize: 9
    },
    fs_10: {
        fontSize: 10
    },
    fs_11: {
        fontSize: 11
    },
    fs_12: {
        fontSize: 12
    },
    fs_13: {
        fontSize: 13
    },
    fs_14: {
        fontSize: 14
    },
    fs_15: {
        fontSize: 15
    },
    fs_16: {
        fontSize: 16
    },
    fs_18: {
        fontSize: 18
    },
    fs_20: {
        fontSize: 20
    },
    fs_22: {
        fontSize: 22
    },
    fs_24: {
        fontSize: 24
    },
    fs_25: {
        fontSize: 25
    },
    fs_26: {
        fontSize: 26
    },
    fs_30: {
        fontSize: 30
    },
    fs_32: {
        fontSize: 32
    },

    fs_60: {
        fontSize: 60
    },


    //-------------------------字体颜色--------------------------//
    c_primary: {
        color: "#fae310"
    },
    c_text_p: {
        color: "#59574e"
    },
    c_primary_dark: {
        color: "#F3AB3D"
    },
    c_ccc: {
        color: "#ccc"
    },

    c_ddd: {
        color: "#ddd"
    },

    c_eee: {
        color: "#eee"
    },
    c_333: {
        color: "#333"
    },
    c_666: {
        color: "#666"
    },
    c_999: {
        color: "#999"
    },
    c_51: {
        color: "rgb(51,51,51)"
    },
    c_33: {
        color: "rgb(33,33,33)"
    },
    c_85: {
        color: "rgb(85,85,85)"
    },
    c_fff: {
        color: "#fff"
    },
    c_150: {
        color: 'rgb(150,150,150)'
    },
    c_99_156_201: {
        color: 'rgb(99,156,201)'
    },
    c_153: {
        color: 'rgb(153,153,153)'
    },
    c_102: {
        color: 'rgb(102,102,102)'
    },
    c_15_156_241: {
        color: 'rgb(15,156,241)'
    },
    c_fe4e4e: {
        color: '#fe4e4e'
    },
    c_28_197_4: {
        color: 'rgb(28,197,4)'
    },
    c_79_24_14: {
        color: 'rgb(79,24,14)'
    },


    //----------------------------背景色-----------------------//
    bgc_fae310: {
        backgroundColor: "#fae310"
    },
    bg_primary_dark: {
        backgroundColor: "#F3AB3D"
    },
    bg_fe4e4e: {
        backgroundColor: "#fe4e4e"
    },
    bg_fff: {
        backgroundColor: "#fff"
    },
    bg_999: {
        backgroundColor: "#999"
    },
    bg_254_220_0: {
        backgroundColor: "rgb(254,220,0)"
    },
    bg_245: {
        backgroundColor: "rgb(245,245,245)"
    },
    bg_251_227_17: {
        backgroundColor: "rgb(251,227,17)"
    },
    bg_f6: {
        backgroundColor: '#f6f6f6'
    },
    //----------------------常用flex组合-----------------------------//
    flex_1: {
        flex: 1
    },
    flex_2: {
        flex: 2
    },
    flex_3: {
        flex: 3
    },
    flex_4: {
        flex: 4
    },
    flex_row_center: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    flex_row: {
        alignItems: "center",
        flexDirection: "row"
    },
    flex_alignItems_center: {
        alignItems: 'center'
    },
    jus_flex_start: {
        justifyContent: 'flex-start'
    },
    jus_flex_center: {
        justifyContent: 'center'
    },
    jus_flex_end: {
        justifyContent: 'flex-end'
    },
    jus_flex_between: {
        justifyContent: 'space-between'
    },
    jus_flex_around: {
        justifyContent: 'space-around'
    },
    align_flex_start: {
        alignItems: 'flex-start'
    },
    align_flex_end: {
        alignItems: 'flex-end'
    },
    //--------------------------margin-------------------------//

    mT_0: {
        marginTop: 0
    },
    mT_2: {
        marginTop: 2
    },
    mT_3: {
        marginTop: 3
    },
    mT_4: {
        marginTop: 4
    },
    mT_5: {
        marginTop: 5
    },
    mT_7: {
        marginTop: 7
    },
    mT_8: {
        marginTop: 8
    },
    mT_10: {
        marginTop: 10
    },
    mT_11: {
        marginTop: 11
    },
    mT_12: {
        marginTop: 12
    },
    mT_15: {
        marginTop: 15
    },
    mT_18: {
        marginTop: 18
    },
    mT_20: {
        marginTop: 20
    },
    mT_30: {
        marginTop: 30
    },
    mT_35: {
        marginTop: 35
    },
    mT_25: {
        marginTop: 25
    },
    mT_40: {
        marginTop: 40
    },
    mT_45: {
        marginTop: 45
    },
    mT_50: {
        marginTop: 50
    },
    mT_60: {
        marginTop: 60
    },
    mT_80: {
        marginTop: 80
    },
    mT_100: {
        marginTop: 100
    },

    mB_4: {
        marginBottom: 4
    },

    mB_5: {
        marginBottom: 5
    },

    mB_8: {
        marginBottom: 8
    },
    mB_10: {
        marginBottom: 10
    },
    mB_15: {
        marginBottom: 15
    },
    mB_20: {
        marginBottom: 20
    },
    mB_25: {
        marginBottom: 25
    },
    mB_30: {
        marginBottom: 30
    },
    mB_45: {
        marginBottom: 45
    },
    mB_60: {
        marginBottom: 60
    },
    mB_80: {
        marginBottom: 80
    },


    mL_0: {
        marginLeft: 0
    },
    mL_5: {
        marginLeft: 5
    },
    mL_10: {
        marginLeft: 10
    },
    mL_12: {
        marginLeft: 12
    },
    mL_13: {
        marginLeft: 13
    },
    mL_15: {
        marginLeft: 15
    },
    mL_18: {
        marginLeft: 18
    },
    mL_20: {
        marginLeft: 20
    },
    mL_25: {
        marginLeft: 25
    },
    mL_30: {
        marginLeft: 30
    },
    mL_40: {
        marginLeft: 40
    },
    mL_60: {
        marginLeft: 60
    },
    mL_70: {
        marginLeft: 70
    },

    mL_80: {
        marginLeft: 80
    },


    mR_5: {
        marginRight: 5
    },
    mR_12: {
        marginRight: 12
    },
    mR_15: {
        marginRight: 15
    },
    mR_20: {
        marginRight: 20
    },
    mR_30: {
        marginRight: 30
    },
    mR_40: {
        marginRight: 40
    },


    mV_10: {
        marginVertical: 10
    },
    mV_15: {
        marginVertical: 15
    },

    mV_20: {
        marginVertical: 20
    },

    mV_25: {
        marginVertical: 25
    },

    mV_50: {
        marginVertical: 50
    },


    mH_5: {
        marginHorizontal: 5
    },
    mH_10: {
        marginHorizontal: 10
    },
    mH_12: {
        marginHorizontal: 12
    },
    mH_20: {
        marginHorizontal: 20
    },
    mH_25: {
        marginHorizontal: 25
    },


    //--------------------------padding-------------------------//
    pT_5: {
        paddingTop: 5
    },
    pT_10: {
        paddingTop: 10
    },
    pT_15: {
        paddingTop: 15
    },
    pT_20: {
        paddingTop: 20
    },
    pT_25: {
        paddingTop: 25
    },
    pT_30: {
        paddingTop: 30
    },
    pT_40: {
        paddingTop: 40
    },


    pB_5: {
        paddingBottom: 5
    },
    pB_10: {
        paddingBottom: 10
    },

    pB_15: {
        paddingBottom: 15
    },

    pB_20: {
        paddingBottom: 20
    },

    pB_25: {
        paddingBottom: 25
    },

    pB_30: {
        paddingBottom: 30
    },

    pB_50: {
        paddingBottom: 50
    },
    pB_80: {
        paddingBottom: 80
    },


    pL_10: {
        paddingLeft: 10
    },
    pL_15: {
        paddingLeft: 15
    },
    pL_20: {
        paddingLeft: 20
    },
    pL_40: {
        paddingLeft: 40
    },

    pR_10: {
        paddingRight: 10
    },

    pR_20: {
        paddingRight: 20
    },

    pR_30: {
        paddingRight: 30
    },


    pV_0: {
        paddingVertical: 0
    },
    pV_5: {
        paddingVertical: 5
    },
    pV_10: {
        paddingVertical: 10
    },
    pV_15: {
        paddingVertical: 15
    },
    pV_18: {
        paddingVertical: 18
    },
    pV_20: {
        paddingVertical: 20
    },
    pV_30: {
        paddingVertical: 30
    },


    pH_10: {
        paddingHorizontal: 10
    },
    pH_12: {
        paddingHorizontal: 12
    },
    pH_15: {
        paddingHorizontal: 15
    },
    pH_20: {
        paddingHorizontal: 20
    },
    pH_25: {
        paddingHorizontal: 25
    },
    pH_30: {
        paddingHorizontal: 30
    },
    pH_40: {
        paddingHorizontal: 40
    },
    pH_80: {
        paddingHorizontal: 80
    },
    pH_90: {
        paddingHorizontal: 90
    },


    p_15: {
        padding: 15
    },
    p_20: {
        padding: 20
    },
//------------------------------------------------borderRadius---------------------------------
    bR_5: {
        borderRadius: 5
    },
    bR_10: {
        borderRadius: 10
    },
    bR_15: {
        borderRadius: 15
    },
//------------------------------------------------border---------------------------------
    bottom_border_231: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(231,231,231)',
    },
//----------------------------------------------fontWidth--------------------------------------
    fw_500: {
        fontWeight: '500'
    },
    fw_600: {
        fontWeight: '600'
    },
    fw_800: {
        fontWeight: '800'
    },


//遮罩层
    modalOverlay: {
        height: height,
        width: width,
        backgroundColor: '#00000066',
        position: 'absolute',
        top: 0,
        left: 0,
    }
};
