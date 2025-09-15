import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import * as Clipboard from 'expo-clipboard';

// Importar componentes
import Header from './components/Header';
import TextInputArea from './components/TextInputArea';
import ActionButtons from './components/ActionButtons';
import ClipboardHistory from './components/ClipboardHistory';
import FeedbackMessage from './components/FeedbackMessage';

/**
 * App principal - Aplicación de gestión de portapapeles
 * Maneja todas las operaciones de copiar, cortar y pegar
 * Incluye historial y feedback visual para el usuario
 */
export default function App() {
  // Estados principales
  const [text, setText] = useState('');
  const [clipboardHistory, setClipboardHistory] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('info');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Función para mostrar mensajes de feedback
   * @param {string} message - Mensaje a mostrar
   * @param {string} type - Tipo de mensaje (success, error, warning, info)
   */
  const showMessage = useCallback((message, type = 'info') => {
    setFeedbackMessage(message);
    setFeedbackType(type);
    setShowFeedback(true);
  }, []);

  /**
   * Función para ocultar mensajes de feedback
   */
  const hideMessage = useCallback(() => {
    setShowFeedback(false);
    setFeedbackMessage('');
  }, []);

  /**
   * Función para copiar texto al portapapeles
   * Guarda el texto en el historial y muestra confirmación
   */
  const handleCopy = useCallback(async () => {
    if (!text.trim()) {
      showMessage('No hay texto para copiar', 'warning');
      return;
    }

    try {
      setIsLoading(true);
      await Clipboard.setStringAsync(text);
      
      // Agregar al historial si no está ya presente
      if (!clipboardHistory.includes(text)) {
        setClipboardHistory(prev => [text, ...prev.slice(0, 9)]); // Máximo 10 elementos
      }
      
      showMessage('Texto copiado al portapapeles', 'success');
    } catch (error) {
      showMessage('Error al copiar el texto', 'error');
      console.error('Error copying to clipboard:', error);
    } finally {
      setIsLoading(false);
    }
  }, [text, clipboardHistory, showMessage]);

  /**
   * Función para cortar texto (copiar y limpiar)
   * Copia el texto y lo elimina del campo de entrada
   */
  const handleCut = useCallback(async () => {
    if (!text.trim()) {
      showMessage('No hay texto para cortar', 'warning');
      return;
    }

    try {
      setIsLoading(true);
      await Clipboard.setStringAsync(text);
      
      // Agregar al historial
      if (!clipboardHistory.includes(text)) {
        setClipboardHistory(prev => [text, ...prev.slice(0, 9)]);
      }
      
      // Limpiar el campo de texto
      setText('');
      showMessage('Texto cortado y copiado', 'success');
    } catch (error) {
      showMessage('Error al cortar el texto', 'error');
      console.error('Error cutting text:', error);
    } finally {
      setIsLoading(false);
    }
  }, [text, clipboardHistory, showMessage]);

  /**
   * Función para pegar texto desde el portapapeles
   * Recupera el texto del portapapeles y lo muestra en el campo
   */
  const handlePaste = useCallback(async () => {
    try {
      setIsLoading(true);
      const clipboardText = await Clipboard.getStringAsync();
      
      if (!clipboardText) {
        showMessage('No hay texto en el portapapeles', 'warning');
        return;
      }
      
      setText(clipboardText);
      showMessage('Texto pegado desde el portapapeles', 'success');
    } catch (error) {
      showMessage('Error al pegar el texto', 'error');
      console.error('Error pasting from clipboard:', error);
    } finally {
      setIsLoading(false);
    }
  }, [showMessage]);

  /**
   * Función para seleccionar un elemento del historial
   * Coloca el texto seleccionado en el campo de entrada
   */
  const handleSelectFromHistory = useCallback((selectedText) => {
    setText(selectedText);
    showMessage('Texto seleccionado del historial', 'info');
  }, [showMessage]);

  /**
   * Función para limpiar el historial
   * Elimina todos los elementos del historial
   */
  const handleClearHistory = useCallback(() => {
    setClipboardHistory([]);
    showMessage('Historial limpiado', 'info');
  }, [showMessage]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#f8f9fa" />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header de la aplicación */}
        <Header />
        
        {/* Mensaje de feedback */}
        <FeedbackMessage
          message={feedbackMessage}
          type={feedbackType}
          visible={showFeedback}
          onHide={hideMessage}
        />
        
        {/* Campo de texto principal */}
        <TextInputArea
          value={text}
          onChangeText={setText}
          placeholder="Escribe algo aquí o pega desde el portapapeles..."
        />
        
        {/* Botones de acción */}
        <ActionButtons
          onCopy={handleCopy}
          onCut={handleCut}
          onPaste={handlePaste}
          hasText={text.trim().length > 0}
          disabled={isLoading}
        />
        
        {/* Historial del portapapeles */}
        <ClipboardHistory
          history={clipboardHistory}
          onSelectItem={handleSelectFromHistory}
          onClearHistory={handleClearHistory}
        />
        
        {/* Espacio adicional al final */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  bottomSpacer: {
    height: 30,
  },
});
