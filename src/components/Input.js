import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import RadioGroup from 'react-native-radio-buttons-group';
import RNPickerSelect from 'react-native-picker-select';
import Checkbox from 'expo-checkbox';

const Input = ({ type, placeholder, keyboardType, onChangeText, value, maxLength, onBlur, autoFocus, selectedId, selectedLanguages, onLanguageChange }) => {
    let input;

    if (type === 'nome') {
        input = (
            <TextInput
                placeholder={placeholder}
                style={styles.userInput}
                placeholderTextColor="#000000"
                onChangeText={onChangeText}
                value={value}
                maxLength={maxLength}
                onBlur={onBlur}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
            />
        );
    } else if (type === 'cpf') {
        input = (
            <TextInputMask
                type={'cpf'}
                placeholder={placeholder}
                style={styles.userInput}
                placeholderTextColor="#000000"
                onChangeText={onChangeText}
                value={value}
                maxLength={maxLength}
                onBlur={onBlur}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
            />
        );
    } else if (type === 'sexo') {
        input = (
            <View style={styles.radioContainer}>
                <Text style={styles.labelText}>Sexo:</Text>
                <RadioGroup
                    radioButtons={[
                        {
                            id: '1',
                            label: 'Masculino',
                            value: 'masculino',
                        },
                        {
                            id: '2',
                            label: 'Feminino',
                            value: 'feminino',
                        },
                    ]}
                    onPress={onChangeText}
                    selectedId={selectedId}
                    containerStyle={styles.radioGroup}
                />
            </View>
        );
    } else if (type === 'uf') {
        input = (
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={onChangeText}
                    items={[
                        { label: 'AC', value: 'AC' },
                        { label: 'AL', value: 'AL' },
                        { label: 'AP', value: 'AP' },
                        { label: 'AM', value: 'AM' },
                    ]}
                    placeholder={{
                        label: placeholder,
                        value: null,
                    }}
                />
            </View>
        );
    } else if (type === 'linguagens') {
        const languages = [
            { id: '1', label: 'JavaScript', value: 'javascript' },
            { id: '2', label: 'Python', value: 'python' },
            { id: '3', label: 'Java', value: 'java' },
            { id: '4', label: 'C#', value: 'csharp' },
            { id: '5', label: 'PHP', value: 'php' },
        ];

        input = (
            <View style={styles.checkboxContainer}>
                <Text style={styles.labelText}>Linguagens de Programação</Text>
                {languages.map(language => (
                    <View key={language.id} style={styles.checkboxSection}>
                        <Checkbox
                            style={styles.checkbox}
                            value={selectedLanguages.includes(language.value)}
                            onValueChange={() => onLanguageChange(language.value)}
                        />
                        <Text style={styles.checkboxLabel}>{language.label}</Text>
                    </View>
                ))}
            </View>
        );
    }

    return <View style={styles.inputContainer}>{input}</View>;
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    userInput: {
        width: 275,
        height: 41.3,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 20,
        marginTop: 20,
        fontSize: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    labelText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    pickerContainer: {
        marginTop: 20,
        width: 275,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
    },
    checkboxContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
    },
    checkboxSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 8,
    },
    checkboxLabel: {
        fontSize: 16,
    }
});



export default Input;