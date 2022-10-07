import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native';

import TitleText from '../../components/TitleText';
import Button from '../../components/Buttons';
import Img from '../../components/Imgs'
import List from '../../components/List';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.headerContainer}>
        <TitleText title='Financial Controller'/>
      </View>
      <View style={styles.saldoContainer}>
        <TitleText title='Saldo:' saldo='R$ 1.500,00' />
      </View>
      <View style={styles.containerApp}>
          <View style={styles.buttonContainer}>
            <Button buttonDespesas despesas='Despesas'/>
            <Button buttonReceitas receitas='Receitas'/>
          </View>
        <ScrollView>
          <View style={styles.imgContainer}>
            <Img style={styles.img} image={require('../../../assets/grafico.png')} />
          </View>
            <View style={styles.listContainer}>
              <List />
            </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FF060',
  },
  containerApp:{
    flex: 1,
    margin: 5,
  },
buttonContainer:{
  flex: 1,
  height: '10%',
  width: '100%',
  flexDirection: 'row',
  flex: 2,
},
headerContainer:{
  alignItems: 'center',
},
imgContainer:{
  flex: 1,
  height: '60%',
  width: '100%',
},
listContainer:{
  flex: 1,
  height: '30%',
  width: '100%',
},
saldoContainer:{
  justifyContent: 'flex-start',
},
img:{
  width: "100%",
  height: "100%",
}
});