import {Animated, StyleSheet, Text} from "react-native";
import React from "react";


export const TextBlock = ({anim}) => {
    return (
        <Animated.View style={[styles.textBlock, {
            transform: [
                {
                    translateY: anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [400, 0]
                    })
                },
            ]
        }]}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias est eum excepturi expedita nihil qui
                repudiandae, veniam voluptate? Accusamus consequatur deleniti dolores,
                facilis maxime necessitatibus qui quo saepe soluta velit!</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    textBlock: {
        flex: 1,
        paddingHorizontal: 15
    },
    text: {
        fontSize: 18
    }
})
