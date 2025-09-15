import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Componente Header - Barra de título de la aplicación
 * Muestra el nombre de la app de forma elegante y profesional
 */
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Clipboard App</Text>
      <Text style={styles.subtitle}>Gestiona tu portapapeles fácilmente</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f9fa',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default Header;
