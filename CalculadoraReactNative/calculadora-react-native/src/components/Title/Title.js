// Nome: Eduardo Luiz Da Silva
// RA: 184767
// 6º Semestre de Sistema de informação

import {Text, View } from 'react-native';
import styles from './style';

export default function Title(){
  return (
      <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>Calculadora do React</Text>
        <Text>By Eduardo Silva</Text>
      </View>
  );
}