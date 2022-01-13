import React, {useRef} from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View, Animated} from "react-native";
import {ImageBlock} from "./ImageBlock/Image";
import {TextBlock} from "./TextBlock/TextBlock";


export const Hero17 = () => {

    const anim = useRef(new Animated.Value(0)).current

    const animate = () => {
        Animated.timing(
            anim,
            {
                toValue: 1,
                duration: 500,
            }
        ).start();
    }

    const onPressHandler = () => {
        animate()
    }

    return (
        <View style={styles.container}>
            <ImageBlock onPressHandler={onPressHandler} anim={anim}/>
            <TextBlock anim={anim}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
