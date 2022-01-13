import React, {useRef} from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View, Animated} from "react-native";


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
            <TouchableWithoutFeedback onPress={onPressHandler}>
                <View style={styles.imageBlock}>
                    <Animated.Image source={{uri: 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2'}}
                                    style={{
                                        width: '20%',
                                        height: '20%',
                                        transform: [
                                            {
                                                scale: anim.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: [1, 5]
                                                })
                                            },
                                            {
                                                translateX: anim.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: [0, 31.2]
                                                })
                                            },
                                            {
                                                translateY: anim.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: [0, -41]
                                                })
                                            }

                                        ]
                                    }}
                                    resizeMode={'cover'}/>
                </View>
            </TouchableWithoutFeedback>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBlock: {
        justifyContent: 'flex-end',
        height: '60%',
        marginBottom: 30
    },
    textBlock: {
        flex: 1,
        paddingHorizontal: 15
    },
    text: {
        fontSize: 18
    }
})
