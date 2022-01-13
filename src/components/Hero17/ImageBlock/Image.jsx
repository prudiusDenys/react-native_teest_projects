import {Animated, TouchableWithoutFeedback, View} from "react-native";
import React from "react";


export const ImageBlock = ({onPressHandler, anim}) => {
    return (
        <TouchableWithoutFeedback onPress={onPressHandler}>
            <View style={styles.imageBlock}>
                <Animated.Image
                    source={{uri: 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2'}}
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
    )
}

const styles = StyleSheet.create({
    imageBlock: {
        justifyContent: 'flex-end',
        height: '60%',
        marginBottom: 30
    }
})
