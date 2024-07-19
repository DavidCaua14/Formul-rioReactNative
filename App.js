import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Input from './src/components/Input';
import Constants from 'expo-constants';

export default function App() {
  const [cpf, setCpf] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [uf, setUf] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleSexoChange = (id) => {
    setSelectedId(id);
  };

  const handleUfChange = (value) => {
    setUf(value);
  };

  const handleLanguageChange = (language) => {
    // Atualiza o estado das linguagens selecionadas com base no valor atual de prevLanguages
    setSelectedLanguages(prevLanguages => {
        // Cria um novo Set baseado no estado anterior de linguagens selecionadas
        const newLanguages = new Set(prevLanguages);
        // Verifica se a linguagem já está no Set
        if (newLanguages.has(language)) {
            // Se a linguagem estiver no Set, remove-a
            newLanguages.delete(language);
        } else {
            // Se a linguagem não estiver no Set, adiciona-a
            newLanguages.add(language);
        }
        // Converte o Set de volta para um array e retorna como novo estado
        return Array.from(newLanguages);
    });
};  

  return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.header}>
                <Text style={styles.textTitle}>Formulário</Text>
              </View>
              <Input
                type="nome"
                placeholder="Digite o seu nome"
                autoFocus={true}
              />
              <Input
                type="cpf"
                placeholder="Digite o seu CPF"
                value={cpf}
                onChangeText={setCpf}
                keyboardType="numeric"
              />
              <Input
                type="sexo"
                selectedId={selectedId}
                onChangeText={handleSexoChange}
              />
              <Input
                type="uf"
                placeholder="Selecione o seu estado"
                onChangeText={handleUfChange}
              />
              <Input
                type="linguagens"
                selectedLanguages={selectedLanguages}
                onLanguageChange={handleLanguageChange}
              />
              <View style={styles.optionButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      flexGrow: 1,
    },
    header: {
      width: '100%',
      padding: 40,
      backgroundColor: '#227ACB',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textTitle: {
      color: 'white',
      fontSize: 20,
    },
    button: {
      backgroundColor: '#5CB85C',
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 40,
      width: 275,
      alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
    },
    optionButton:{
      alignItems: 'center'
    }
});