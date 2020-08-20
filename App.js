import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TextInputMask } from 'react-native-masked-text'

import api from './services/api';
import styles from './styles';

export default function App() {

  const [dados, setDados] = useState({});
  const [cep, setCep] = useState('');
  const [unsmask, setUnmask] = useState('');

  async function searchCep() {
    let unmasked = unsmask.getRawValue();
    const response = await api.get(`${unmasked}/json/`).then(res => setDados(res.data)).catch();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textProperty}>Buscar CEP</Text>
      <TextInputMask
        value={cep}
        type={'zip-code'}
        style={styles.input}
        ref={(ref) => setUnmask(ref)}
        onChangeText={(cep) => setCep(cep)}
        placeholder='Digite seu CEP'
        placeholderTextColor='#c3c3c3'
      ></TextInputMask>
      <TouchableOpacity
        style={styles.button}
        onPress={searchCep} >
        <Text style={styles.buttonText}>
          Buscar
        </Text>
      </TouchableOpacity>
      <View style={styles.cepContainer}>

        <Text style={styles.textProperty}>Rua:</Text>
        <Text style={styles.textValue}>{dados.logradouro}</Text>

        <Text style={styles.textProperty}>Cidade:</Text>
        <Text style={styles.textValue}>{dados.localidade}</Text>

        <Text style={styles.textProperty}>UF:</Text>
        <Text style={styles.textValue}>{dados.uf}</Text>
      </View>

    </View>
  );
}


