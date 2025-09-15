import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Componente ActionButtons - Botones de acción para clipboard
 * Contiene los botones Copy, Cut y Paste con estilos diferenciados
 */
const ActionButtons = ({ onCopy, onCut, onPaste, hasText, disabled }) => {
  return (
    <View style={styles.container}>
      {/* Botón Copiar */}
      <TouchableOpacity
        style={[styles.button, styles.copyButton, !hasText && styles.disabledButton]}
        onPress={onCopy}
        disabled={!hasText || disabled}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, !hasText && styles.disabledText]}>
          Copiar
        </Text>
      </TouchableOpacity>

      {/* Botón Cortar */}
      <TouchableOpacity
        style={[styles.button, styles.cutButton, !hasText && styles.disabledButton]}
        onPress={onCut}
        disabled={!hasText || disabled}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, !hasText && styles.disabledText]}>
          Cortar
        </Text>
      </TouchableOpacity>

      {/* Botón Pegar */}
      <TouchableOpacity
        style={[styles.button, styles.pasteButton, disabled && styles.disabledButton]}
        onPress={onPaste}
        disabled={disabled}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, disabled && styles.disabledText]}>
          Pegar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  copyButton: {
    backgroundColor: '#28a745',
  },
  cutButton: {
    backgroundColor: '#fd7e14',
  },
  pasteButton: {
    backgroundColor: '#007bff',
  },
  disabledButton: {
    backgroundColor: '#e9ecef',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabledText: {
    color: '#adb5bd',
  },
});

export default ActionButtons;
