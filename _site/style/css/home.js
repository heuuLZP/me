import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#f9f9f9"
    },
    "content": {
        "marginTop": 60,
        "marginRight": "10%",
        "marginBottom": 0,
        "marginLeft": "10%",
        "paddingTop": 30,
        "paddingRight": 100,
        "paddingBottom": 30,
        "paddingLeft": 100,
        "minHeight": 500,
        "border": "1px solid #efefef",
        "backgroundColor": "#fff",
        "boxShadow": "0 0 10px 10px #efefef"
    },
    "footer": {
        "left": "10%",
        "width": "80%",
        "border": "1px solid #efefef",
        "backgroundColor": "#fff",
        "boxShadow": "0 0 10px 10px #efefef",
        "position": "absolute",
        "bottom": 15,
        "height": 40,
        "lineHeight": 40,
        "textAlign": "center"
    }
});