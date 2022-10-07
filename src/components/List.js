import React from "react";
import { View, StyleSheet, Text, Image, ScrollView} from "react-native"

import Button from './Buttons'

export default function List(props){
    return(
        <View >
            <ScrollView>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
                <View style={styles.containerListItens}><Text>Calca Jeans</Text><Text>R$ 20,00</Text></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    containerListItens:{
        flexDirection: 'row',
    }
})