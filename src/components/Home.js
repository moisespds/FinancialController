import React from "react";
import { View, StyleSheet, Text} from "react-native"

import Button from './Buttons'

export default function Body(){
    return(
        <View style={styles.bodyContainer}>
            <Button style={styles.buttonDespesas} nameButton='Despesas'/>
            <Button style={styles.buttonReceita} nameButton='Receitas'/>
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