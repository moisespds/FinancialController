import React from "react";
import { View, StyleSheet, Text} from "react-native"

import TitleText from "./TitleText";

export default function Header(){
    return(
        <View >
            <View style={styles.headerContainer}>
            <TitleText title='Financial Controller'/>
            </View>
            <View style={styles.saldoContainer}>
            <TitleText title='Saldo:' saldo='R$ 1.500,00' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        alignItems: 'center',
        backgroundColor: '#62A331'
    },
    saldoContainer:{
        justifyContent: 'flex-start',
        backgroundColor: '#62A331',
    }
})