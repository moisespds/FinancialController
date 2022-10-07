import React from "react";
import { View, StyleSheet, Text} from "react-native"

export default function TitleText(props){
    return(
        <View>
            <Text style={styles.textTitle}>{props.title}</Text><Text style={styles.saldo}>{props.saldo}</Text><Text style={styles.text}>{props.text}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    },
    text:{
        fontSize: 18,
    },
    saldo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    }
})