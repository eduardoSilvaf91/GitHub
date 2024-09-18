// Nome: Eduardo Luiz Da Silva
// RA: 184767
// 6º Semestre de Sistema de informação

import React,{useState} from 'react';
import {Text, TextInput, View , TouchableOpacity, Vibration} from 'react-native';
import styles from './style';

export default function Form(){
    const [numero1, setN1]= useState(null)
    const [numero2, setN2]= useState(null)
    const [result, setResul] = useState(null)

    function resetValue(){
        setN1(null)
        setN2(null)
    }

    function calcular(operador){
        Vibration.vibrate();

        if (numero1 == null || numero2 == null){
            setResul("Favor preencher os campos")
        }
        else{
            switch (operador) {
                case '+':
                    setResul((Number(numero1) + Number(numero2)))
                    resetValue()
                    break;

                case '-':
                    setResul((Number(numero1) - Number(numero2)))
                    resetValue()
                    break;

                case '*':
                    setResul((Number(numero1) * Number(numero2)))
                    resetValue()
                    break;

                case '/':
                    if (numero2 == 0){
                        setResul('Erro: Divisão por "0"')
                        resetValue()
                    }
                    else{
                        setResul((Number(numero1) / Number(numero2)).toFixed(2))
                        resetValue()
                    }
                    break;

                case '**':
                    setResul((Number(numero1) ** Number(numero2)))
                    resetValue()
                    break;
            
                default:
                    break;
            }
        }
    }

    return ( 
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>1ºNumero</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setN1}
                    value={numero1}
                    placeholder='Ex: 12.8'
                    keyboardType='numeric'
                />

                <Text style={styles.formLabel}>2ºNumero</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setN2}
                    value={numero2}
                    placeholder='Ex: 15'
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.viewButton}>
                <TouchableOpacity 
                style={styles.touchButtom}
                onPress={()=> calcular('+')}
                >
                <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.touchButtom}
                onPress={()=> calcular('-')}>
                <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.touchButtom}
                onPress={()=> calcular('*')}>
                <Text style={styles.textButton}>x</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.touchButtom}
                onPress={()=> calcular('/')}>
                <Text style={styles.textButton}>/</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.touchButtom}
                onPress={()=> calcular('**')}>
                <Text style={styles.textButton}>**</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.resultLabel}>Resultado</Text>
            <Text style={styles.result}>{result}</Text>

        </View>

    );
};