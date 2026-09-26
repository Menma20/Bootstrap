# 🚀 Portafolio de Servicios - Práctica de Bootstrap y React

Este proyecto es una maqueta web responsiva construida para demostrar la integración de **React (Vite)** junto con el framework CSS **Bootstrap 5** (vía CDN). La arquitectura del proyecto sigue principios de modularidad, separación de responsabilidades (UI y Datos) y escalabilidad.

## 📋 Características Implementadas (Rúbrica)

1. **Navbar Responsivo:** Barra de navegación interactiva que colapsa en un menú hamburguesa para dispositivos móviles.
2. **Sistema de Grillas (Grid System):** Distribución fluida de tarjetas de servicio (`col-12` en móvil, `col-md-6` en tablet, `col-lg-4` en escritorio).
3. **Componente Modal:** Ventana emergente interactiva de bienvenida utilizando los atributos `data-bs` de Bootstrap.
4. **Clases Utilitarias:** Uso intensivo de utilidades de Bootstrap como `bg-light`, `shadow-sm`, `rounded-pill`, `text-primary`, `fw-bold`, `my-5`, `g-4`, entre otras, para el diseño visual sin necesidad de CSS personalizado.

## ⚡ Características Adicionales (Escalabilidad)

* **Arquitectura de Componentes (React):** La interfaz está dividida en componentes reutilizables (`Navbar`, `ServiceCard`, `SearchBar`, `Modal`).
* **Estado Centralizado y Filtrado en Tiempo Real:** Implementación del hook `useState` para filtrar dinámicamente la lista de servicios renderizados.
* **Optimización con Custom Hooks:** Creación de un hook `useDebounce` para retrasar la ejecución del filtro de búsqueda (500ms), optimizando el rendimiento y simulando un entorno preparado para consumir APIs reales.
* **Renderizado Condicional:** Botón de limpieza en la barra de búsqueda que se renderiza dinámicamente según el estado del input.

## 🛠️ Tecnologías Utilizadas

* **React 18**
* **Vite** (Build tool)
* **Bootstrap 5.3.2** (UI Framework)
* **HTML5 & Vanilla JS** (Lógica de filtrado)

## 📦 Estructura del Proyecto

```text
src/
 ├── components/       # Componentes visuales (UI)
 │   ├── Modal.jsx
 │   ├── Navbar.jsx
 │   ├── SearchBar.jsx
 │   └── ServiceCard.jsx
 ├── data/             # Simulación de base de datos/API
 │   └── appData.js
 ├── hooks/            # Hooks personalizados
 │   └── useDebounce.jsx
 ├── App.jsx           # Contenedor principal y lógica de estado
 └── main.jsx          # Punto de entrada de React