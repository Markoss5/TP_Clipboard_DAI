import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

/**
 * Componente TextInputArea - Campo de texto principal
 * Permite al usuario escribir y editar texto de forma cómoda
 */
const TextInputArea = ({ value, onChangeText, placeholder = "Escribe algo aquí..." }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#adb5bd"
        multiline={true}
        textAlignVertical="top"
        maxLength={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#2c3e50',
    minHeight: 120,
    maxHeight: 200,
    fontFamily: 'System',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default TextInputArea;
