import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

/**
 * Componente FeedbackMessage - Mensajes de retroalimentación
 * Muestra mensajes temporales con animación suave
 */
const FeedbackMessage = ({ message, type = 'info', visible, onHide }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    if (visible) {
      // Animación de entrada
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      // Auto-hide después de 3 segundos
      const timer = setTimeout(() => {
        hideMessage();
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      hideMessage();
    }
  }, [visible]);

  const hideMessage = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onHide) onHide();
    });
  };

  if (!visible && !message) return null;

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return '#d4edda';
      case 'error':
        return '#f8d7da';
      case 'warning':
        return '#fff3cd';
      default:
        return '#d1ecf1';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'success':
        return '#155724';
      case 'error':
        return '#721c24';
      case 'warning':
        return '#856404';
      default:
        return '#0c5460';
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(),
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Text style={[styles.message, { color: getTextColor() }]}>
        {message}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  message: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default FeedbackMessage;
