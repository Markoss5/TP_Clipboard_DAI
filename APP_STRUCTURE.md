# Estructura Visual de la Aplicación

## 🏗️ Arquitectura de Componentes

```
App.js (Componente Principal)
├── SafeAreaView
│   └── ScrollView
│       ├── Header
│       │   ├── Título: "Clipboard App"
│       │   └── Subtítulo: "Gestiona tu portapapeles fácilmente"
│       │
│       ├── FeedbackMessage (Condicional)
│       │   ├── Mensaje de éxito/error/advertencia
│       │   └── Animación de entrada/salida
│       │
│       ├── TextInputArea
│       │   ├── TextInput multilinea
│       │   ├── Placeholder: "Escribe algo aquí..."
│       │   └── Estilos con sombra y bordes redondeados
│       │
│       ├── ActionButtons
│       │   ├── Botón Copiar (Verde)
│       │   ├── Botón Cortar (Naranja)
│       │   └── Botón Pegar (Azul)
│       │
│       └── ClipboardHistory
│           ├── Header con título y botón "Limpiar"
│           ├── ScrollView con elementos del historial
│           └── Estado vacío con mensaje informativo
```

## 🎨 Paleta de Colores

### Colores Principales
- **Fondo Principal**: `#f8f9fa` (Gris muy claro)
- **Fondo Tarjetas**: `#ffffff` (Blanco)
- **Texto Principal**: `#2c3e50` (Azul oscuro)
- **Texto Secundario**: `#6c757d` (Gris medio)
- **Bordes**: `#e9ecef` (Gris claro)

### Colores de Estado
- **Éxito**: `#28a745` (Verde)
- **Advertencia**: `#fd7e14` (Naranja)
- **Error**: `#dc3545` (Rojo)
- **Info**: `#007bff` (Azul)

### Colores de Botones
- **Copiar**: `#28a745` (Verde)
- **Cortar**: `#fd7e14` (Naranja)
- **Pegar**: `#007bff` (Azul)
- **Deshabilitado**: `#e9ecef` (Gris claro)

## 📱 Layout Visual

```
┌─────────────────────────────────────┐
│           Header                     │
│     "Clipboard App"                  │
│  "Gestiona tu portapapeles..."      │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐ │
│  │                                 │ │
│  │     TextInput Area              │ │
│  │   (Multilinea con placeholder)  │ │
│  │                                 │ │
│  └─────────────────────────────────┘ │
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐            │
│  │Copiar│ │Cortar│ │Pegar│            │
│  │ Verde│ │Naranja│ │ Azul│            │
│  └─────┘ └─────┘ └─────┘            │
│                                     │
│  ┌─────────────────────────────────┐ │
│  │     Historial del Portapapeles   │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │ Elemento 1 del historial    │ │ │
│  │  │ Timestamp                  │ │ │
│  │  └─────────────────────────────┘ │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │ Elemento 2 del historial    │ │ │
│  │  │ Timestamp                  │ │ │
│  │  └─────────────────────────────┘ │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

## 🔄 Flujo de Datos

### Estados Principales
```javascript
// Estados en App.js
const [text, setText] = useState('');                    // Texto actual
const [clipboardHistory, setClipboardHistory] = useState([]); // Historial
const [feedbackMessage, setFeedbackMessage] = useState('');   // Mensaje
const [feedbackType, setFeedbackType] = useState('info');    // Tipo mensaje
const [showFeedback, setShowFeedback] = useState(false);     // Mostrar mensaje
const [isLoading, setIsLoading] = useState(false);           // Estado carga
```

### Flujo de Operaciones

#### 1. Copiar
```
Usuario escribe texto → Presiona "Copiar" → 
Clipboard.setStringAsync() → Actualizar historial → 
Mostrar mensaje éxito
```

#### 2. Cortar
```
Usuario escribe texto → Presiona "Cortar" → 
Clipboard.setStringAsync() → Limpiar campo → 
Actualizar historial → Mostrar mensaje éxito
```

#### 3. Pegar
```
Usuario presiona "Pegar" → Clipboard.getStringAsync() → 
Verificar contenido → Actualizar campo → 
Mostrar mensaje éxito/error
```

#### 4. Historial
```
Usuario copia texto → Agregar a historial → 
Usuario selecciona del historial → 
Actualizar campo → Mostrar mensaje info
```

## 🎯 Responsive Design

### Breakpoints
- **Móvil**: < 768px (Diseño principal)
- **Tablet**: 768px - 1024px (Mismos componentes, más espacio)
- **Web**: > 1024px (Layout optimizado para escritorio)

### Adaptaciones por Plataforma

#### Android
- SafeAreaView para notch
- Colores optimizados para Material Design
- Animaciones con useNativeDriver

#### iOS
- SafeAreaView para notch y home indicator
- Colores optimizados para Human Interface Guidelines
- Animaciones suaves y naturales

#### Web
- Layout adaptado para mouse y teclado
- Hover states en botones
- Scroll suave con scrollbar personalizada

## 🔧 Configuración de Estilos

### Espaciado Consistente
```javascript
const spacing = {
  xs: 4,    // Espacios muy pequeños
  sm: 8,    // Espacios pequeños
  md: 16,   // Espacios medianos
  lg: 20,   // Espacios grandes
  xl: 30,   // Espacios extra grandes
};
```

### Tipografía Escalable
```javascript
const typography = {
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { fontSize: 14, fontWeight: '400' },
  body: { fontSize: 16, fontWeight: '400' },
  button: { fontSize: 16, fontWeight: '600' },
  caption: { fontSize: 12, fontWeight: '400' },
};
```

### Sombras Consistentes
```javascript
const shadows = {
  light: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
};
```

## 🚀 Optimizaciones de Rendimiento

### useCallback para Funciones
- Todas las funciones de manejo de eventos usan useCallback
- Evita re-renders innecesarios
- Mejora la performance en dispositivos lentos

### Lazy Loading de Componentes
- Los componentes se cargan solo cuando son necesarios
- Reduce el bundle size inicial
- Mejora el tiempo de carga

### Memoización de Estados
- Estados complejos se memoizan cuando es necesario
- Evita cálculos innecesarios
- Mantiene la UI responsiva

## 📊 Métricas de Usabilidad

### Tiempos de Respuesta
- **Copiar**: < 100ms
- **Cortar**: < 100ms
- **Pegar**: < 200ms
- **Navegación**: < 50ms

### Accesibilidad
- Contraste de colores WCAG AA
- Tamaños de botones mínimos 44px
- Labels descriptivos para screen readers
- Navegación por teclado en Web
