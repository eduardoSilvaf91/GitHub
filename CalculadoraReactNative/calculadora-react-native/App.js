// Nome: Eduardo Luiz Da Silva
// RA: 184767
// 6º Semestre de Sistema de informação

import { ScrollView, StyleSheet, View } from 'react-native';
import Title from './src/components/Title/Title';
import Form from './src/components/Form/Form';


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title></Title>
        <Form></Form>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80
  }
});