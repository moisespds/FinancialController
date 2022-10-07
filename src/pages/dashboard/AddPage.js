import React from "react";
import { View, StyleSheet, Text} from "react-native"

import Button from "../../components/Buttons";
import List from "../../components/List";
import TitleText from "./TitleText";

export default function Header(){
    return(
        <View >
            <Button nameButton="Adicionar" style={styles.button}  />
            <List />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        alignItems: 'center',
        backgroundColor: '#62A331'
    },
    button:{
        
    },
    saldoContainer:{
        justifyContent: 'flex-start',
        backgroundColor: '#62A331',
    }
})