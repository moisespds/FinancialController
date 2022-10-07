import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, } from "react-native"



export default function Button(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress} style={props.style}>
                <Text style={props.style}>{props.nameButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
})