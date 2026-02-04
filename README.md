# LIMASAM Study Platform 🧹

Una aplicación web moderna e interactiva para la preparación del examen de oposición TAI - Operario de Limpieza LIMASAM.

![LIMASAM Study](https://img.shields.io/badge/Topics-7-success)
![Status](https://img.shields.io/badge/Status-Ready-brightgreen)
![License](https://img.shields.io/badge/License-Personal_Use-blue)

## 📚 Descripción

Plataforma de estudio completa con los 7 temas principales del Manual del Operario de Limpieza LIMASAM:

1. **Tema 1:** Barrido Manual Individual
2. **Tema 2:** Barrido Manual con Vehículo Auxiliar
3. **Tema 3:** Barrido Manual mediante Brigada
4. **Tema 4:** Barrido Mixto (Manual + Mecánico)
5. **Tema 5:** Baldeo Manual con Carrito Porta-Manguera
6. **Tema 6:** Baldeo Manual con Vehículo Auxiliar
7. **Tema 7:** Baldeo Manual Mecanizado Mixto

## ✨ Características

- ✅ **7 Temas Completos** con todo el contenido del manual.
- ✅ **Vídeos Explicativos Integrados**: Todos los temas incluyen vídeo alojado en YouTube para un streaming eficiente.
- ✅ **Tests Interactivos**: Cuestionarios específicos para cada tema con retroalimentación inmediata.
- ✅ **Diseño Moderno**: Interfaz con Glassmorphism y soporte para modo oscuro/claro.
- ✅ **Seguimiento de Progreso**: Persistencia local del avance en el estudio.
- ✅ **Presentaciones y Audios**: Material descargable y podcast por cada tema.
- ✅ **Búsqueda Integrada**: Buscador global en todos los contenidos.
- ✅ **Responsive**: Adaptado a móviles, tablets y escritorio.

## 🚀 Inicio Rápido

### Requisitos Previos

- Python 3.x (para servidor de desarrollo)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Ejecutar la Aplicación

1. Abre una terminal/PowerShell en el directorio del proyecto:
   ```powershell
   cd "c:/Users/Miguel/OneDrive/Documentos/Programacion/Proyectos/Notebooks/limasam-study-app"
   ```

2. Inicia el servidor de desarrollo:
   ```powershell
   python -m http.server 8080
   ```

3. Abre tu navegador y navega a:
   ```
   http://localhost:8080
   ```

4. ¡Comienza a estudiar! 📖

### Detener el Servidor

Presiona `Ctrl+C` en la terminal donde está corriendo el servidor.

## 📱 Uso

### Navegación Principal

- **Vista General:** Muestra tarjetas de todos los temas
- **Vista de Tema:** Click en cualquier tema para ver contenido detallado
- **Barra Lateral:** Navegación rápida y seguimiento de progreso
- **Búsqueda:** Click en 🔍 para buscar contenido específico

### Características Interactivas

- **Marcar Completado:** Click en "Marcar como completado" en cada tema
- **Cambiar Tema:** Click en ☀️/🌙 para alternar tema claro/oscuro
- **Ver Progreso:** El círculo de progreso muestra tu avance
- **Reiniciar Progreso:** Botón en la barra lateral para empezar de nuevo

### Contenido por Tema

Cada tema incluye:

- 📋 **Definición** - Qué es la actividad
- 🛠️ **Herramientas** - Equipo necesario
- 🎯 **Objetivos** - Qué debe conseguirse
- 📝 **Método de Trabajo** - Fases detalladas (3-7 por tema)
- ⚡ **Puntos Clave para Examen** - Información crítica
- 🎬 **Contenido Multimedia** - Vídeo, Audio/Podcast y Presentación PDF

## 🗂️ Estructura del Proyecto

```
limasam-study-app/
├── index.html          # Página principal
├── style.css           # Estilos y diseño
├── content.js          # Datos de los 7 temas
├── app.js              # Lógica de la aplicación
├── assets/
│   ├── data/           # Cuestionarios (quizzes.js)
│   ├── images/         # Imágenes y logos
│   └── multimedia/     # Audios (.m4a) y Presentaciones (.pdf)
└── README.md           # Este archivo
```

## 🎨 Diseño

### Paleta de Colores

- **Gradiente Principal:** Índigo (#6366f1) → Púrpura (#8b5cf6)
- **Tema Oscuro:** Fondos azul marino profundo con texto de alto contraste
- **Tema Claro:** Blancos limpios y grises para legibilidad

### Tipografía

- **Encabezados:** Outfit (negrita, moderna)
- **Cuerpo:** Inter (limpia, legible)

### Efectos

- Glassmorphism (efecto cristal esmerilado)
- Sombras en capas para profundidad
- Transiciones suaves
- Efectos de brillo en elementos enfocados

## 💾 Persistencia de Datos

La aplicación guarda automáticamente:

- ✅ Temas marcados como completados
- ✅ Tema de color seleccionado (oscuro/claro)

Los datos se almacenan en `localStorage` del navegador y persisten entre sesiones.

## 📊 Progreso de Estudio

### Seguimiento

- Círculo de progreso visual en la barra lateral
- Contador de temas completados
- Indicadores de completado en cada tema
- Estado guardado automáticamente

### Reinicio

Puedes reiniciar tu progreso en cualquier momento usando el botón "Reiniciar Progreso" en la barra lateral.

## 🔍 Búsqueda

La funcionalidad de búsqueda permite encontrar:

- Títulos de temas
- Definiciones
- Herramientas y equipo
- Puntos clave para examen

Los resultados se muestran con el texto resaltado y son clicables para navegar directamente al tema.

## 📱 Responsive

La aplicación se adapta a diferentes tamaños de pantalla:

- **Desktop (>1024px):** Barra lateral completa + contenido
- **Tablet (768-1024px):** Barra lateral adaptada
- **Mobile (<768px):** Menú hamburguesa con barra lateral deslizable

## 🔧 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno (Grid, Flexbox, Variables CSS)
- **JavaScript Vanilla** - Sin frameworks, JS puro
- **LocalStorage** - Persistencia de progreso
- **Hash Routing** - Navegación sin recargas

## 🎓 Ideal para Preparación de Examen

Esta plataforma proporciona:

- ✅ **Aprendizaje Estructurado** - 7 temas organizados lógicamente
- ✅ **Enfoque en Puntos Clave** - Información crítica resaltada
- ✅ **Seguimiento de Progreso** - Sabe qué has cubierto
- ✅ **Búsqueda Rápida** - Encuentra información al instante
- ✅ **Acceso Móvil** - Estudia en cualquier lugar

## 🚧 Contenido Pendiente

Los **Temas 6 y 7** tienen secciones preparadas para contenido multimedia que se añadirá posteriormente:

- Videos explicativos de IA
- Presentaciones visuales
- Audio generado por IA

Las secciones están claramente marcadas como "Próximamente" en la interfaz.

## 📄 Licencia

Este proyecto es para uso personal de estudio. El contenido está basado en el manual oficial de LIMASAM para oposiciones TAI.

## 👤 Autor

Creado para la preparación de examen de oposición TAI - Operario de Limpieza LIMASAM.

---

## 💡 Consejos de Estudio

1. **Lee cada tema completo** - Comprensión total del método
2. **Subraya puntos clave** - Memorización selectiva
3. **Repasa las fases** - Son lo más importante para el examen
4. **Marca como completado** - Seguimiento de tu progreso
5. **Usa la búsqueda** - Para repasar conceptos específicos

---

**¡Buena suerte con tu preparación!** 🎯💪

Para cualquier pregunta o problema, contacta al creador del proyecto.
