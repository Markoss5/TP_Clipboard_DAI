import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Componente ClipboardHistory - Historial del portapapeles
 * Muestra las últimas entradas copiadas y permite seleccionarlas
 */
const ClipboardHistory = ({ history, onSelectItem, onClearHistory }) => {
  if (history.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No hay historial aún</Text>
        <Text style={styles.emptySubtext}>Las copias aparecerán aquí</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Historial del Portapapeles</Text>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={onClearHistory}
          activeOpacity={0.7}
        >
          <Text style={styles.clearButtonText}>Limpiar</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {history.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.historyItem}
            onPress={() => onSelectItem(item)}
            activeOpacity={0.7}
          >
            <Text style={styles.historyText} numberOfLines={2}>
              {item}
            </Text>
            <Text style={styles.historyTime}>
              {new Date().toLocaleTimeString()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f9fa',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#dc3545',
    borderRadius: 6,
  },
  clearButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  scrollView: {
    maxHeight: 200,
  },
  historyItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f9fa',
  },
  historyText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 4,
    lineHeight: 20,
  },
  historyTime: {
    fontSize: 12,
    color: '#6c757d',
    fontStyle: 'italic',
  },
  emptyContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#6c757d',
    fontWeight: '500',
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#adb5bd',
  },
});

export default ClipboardHistory;
