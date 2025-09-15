# Clipboard App - React Native con Expo

Una aplicación móvil elegante y funcional para gestionar el portapapeles, desarrollada con React Native y Expo. La app permite copiar, cortar y pegar texto con un historial completo y una interfaz intuitiva.

## 🚀 Características

- **Operaciones de Clipboard**: Copiar, cortar y pegar texto
- **Historial Inteligente**: Mantiene las últimas 10 copias realizadas
- **Interfaz Intuitiva**: Diseño limpio y profesional con feedback visual
- **Multiplataforma**: Compatible con Android, iOS y Web
- **Mensajes de Estado**: Retroalimentación clara para todas las acciones
- **Animaciones Suaves**: Transiciones elegantes para mejor UX

## 📱 Capturas de Pantalla

### Diseño Visual
- **Header**: Fondo gris claro (#f8f9fa) con título "Clipboard App" en azul oscuro (#2c3e50)
- **Campo de Texto**: Fondo blanco con bordes redondeados y sombra sutil
- **Botones de Acción**:
  - **Copiar**: Verde (#28a745) 
  - **Cortar**: Naranja (#fd7e14)
  - **Pegar**: Azul (#007bff)
- **Historial**: Tarjetas blancas con bordes suaves y timestamps
- **Mensajes**: Barras de colores según el tipo (verde=éxito, rojo=error, amarillo=advertencia)

## 🛠️ Tecnologías Utilizadas

- **React Native**: 0.81.4
- **Expo**: ~54.0.7
- **expo-clipboard**: ~6.0.0
- **React**: 19.1.0

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Expo CLI instalado globalmente
- Dispositivo móvil con Expo Go o emulador

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd TP_Clipboard_DAI
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar Expo CLI (si no lo tienes)**
   ```bash
   npm install -g @expo/cli
   ```

4. **Ejecutar la aplicación**
   ```bash
   # Para desarrollo general
   npm start
   
   # Para Android específicamente
   npm run android
   
   # Para iOS específicamente
   npm run ios
   
   # Para Web
   npm run web
   ```

## 🏗️ Estructura del Proyecto

```
TP_Clipboard_DAI/
├── components/
│   ├── Header.js              # Barra de título de la app
│   ├── TextInputArea.js       # Campo de texto principal
│   ├── ActionButtons.js       # Botones Copy/Cut/Paste
│   ├── ClipboardHistory.js    # Historial del portapapeles
│   └── FeedbackMessage.js     # Mensajes de retroalimentación
├── App.js                     # Componente principal
├── package.json               # Dependencias y scripts
├── app.json                   # Configuración de Expo
└── README.md                  # Este archivo
```

## 🔧 Funcionalidades Detalladas

### Operaciones de Clipboard

1. **Copiar**: Copia el texto del campo al portapapeles del sistema
2. **Cortar**: Copia el texto y lo elimina del campo
3. **Pegar**: Inserta el contenido del portapapeles en el campo

### Historial Inteligente

- Mantiene las últimas 10 copias realizadas
- Evita duplicados automáticamente
- Permite seleccionar elementos del historial
- Función de limpiar historial completo

### Sistema de Feedback

- **Éxito**: Operaciones completadas correctamente
- **Error**: Problemas técnicos o de permisos
- **Advertencia**: Acciones no válidas (ej: copiar sin texto)
- **Info**: Información general y confirmaciones

## 🌐 Compatibilidad Multiplataforma

### Android
- ✅ Funcionalidad completa
- ✅ Sin permisos especiales requeridos
- ✅ Historial persistente durante la sesión

### iOS
- ✅ Funcionalidad completa
- ✅ Sin permisos especiales requeridos
- ✅ Integración nativa con el portapapeles del sistema

### Web
- ✅ Funcionalidad básica disponible
- ⚠️ Limitaciones del navegador en acceso al portapapeles
- ⚠️ Algunos navegadores pueden requerir interacción del usuario

## 🔒 Permisos y Seguridad

### Permisos Requeridos
- **Ninguno**: La app no requiere permisos especiales
- **Acceso al Portapapeles**: Automático en todas las plataformas

### Consideraciones de Seguridad
- No se almacena información sensible permanentemente
- El historial se mantiene solo durante la sesión de la app
- No se envía información a servidores externos

## 🎨 Personalización

### Colores Principales
```javascript
// Colores utilizados en la app
const colors = {
  primary: '#2c3e50',      // Azul oscuro para títulos
  secondary: '#6c757d',    // Gris para subtítulos
  success: '#28a745',      // Verde para éxito
  warning: '#fd7e14',      // Naranja para advertencias
  danger: '#dc3545',       // Rojo para errores
  info: '#007bff',         // Azul para información
  background: '#f8f9fa',    // Fondo principal
  white: '#ffffff',        // Fondo de tarjetas
  border: '#e9ecef',       // Bordes suaves
};
```

### Tipografías
- **Títulos**: 28px, peso 700
- **Subtítulos**: 14px, peso 400
- **Texto normal**: 16px, peso 400
- **Botones**: 16px, peso 600

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Error de instalación de dependencias**
   ```bash
   # Limpiar caché y reinstalar
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Problemas con Expo CLI**
   ```bash
   # Actualizar Expo CLI
   npm install -g @expo/cli@latest
   ```

3. **Error de clipboard en Web**
   - Asegúrate de que el navegador soporte la API de Clipboard
   - Algunos navegadores requieren HTTPS para acceso al portapapeles

### Logs y Debugging

Para ver logs detallados:
```bash
# Ejecutar con logs detallados
expo start --dev-client
```

## 📈 Próximas Mejoras

- [ ] Persistencia del historial entre sesiones
- [ ] Soporte para imágenes en el portapapeles
- [ ] Búsqueda en el historial
- [ ] Temas claro/oscuro
- [ ] Exportar historial
- [ ] Atajos de teclado para Web

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollador

Desarrollado con ❤️ usando React Native y Expo.

---

**Nota**: Esta aplicación está diseñada para ser simple, elegante y funcional. El código está bien documentado y estructurado para facilitar el mantenimiento y las futuras mejoras.
