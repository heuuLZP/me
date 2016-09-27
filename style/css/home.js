import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "100%",
        "font": "16px/1.5",
        "color": "#333",
        "background": "#f5f5d5"
    },
    "body": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "100%",
        "font": "16px/1.5",
        "color": "#333",
        "background": "#f5f5d5"
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "a": {
        "color": "#ff9999"
    },
    "main": {
        "position": "relative",
        "width": "80%",
        "minHeight": "95%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "content": {
        "marginTop": 20,
        "paddingLeft": 100
    },
    "footer": {
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "textAlign": "center"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "nav": {
        "marginLeft": "50%",
        "display": "inline-block"
    },
    "nav ul": {
        "listStyle": "none"
    },
    "header": {
        "display": "inline-block"
    },
    "nav ul li": {
        "display": "inline-block",
        "marginRight": 25
    },
    "nav ul li a": {
        "fontSize": 18
    },
    "article-list": {
        "listStyle": "none"
    },
    "article-list li a": {
        "fontSize": 22
    }
});