import React from "react";
import { View, StyleSheet, Text, Image} from "react-native"

import Button from './Buttons'

export default function Img(props){
    return(
        <View >
            <Image style={props.style} source={props.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    bodyContainer:{
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'row',
    }
})