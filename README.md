# Git Merge Conflict Practice

Este proyecto está diseñado para practicar conflictos de merge en Git/VS Code.

## Objetivo

Crear dos ramas desde `main`, modificar los mismos archivos y luego hacer merge para provocar conflictos.

## Estructura

- `app.js` - configuración principal
- `users.js` - funciones de usuarios
- `products.js` - funciones de productos
- `config.js` - configuración de la aplicación

## Ejercicio

Después de crear el repositorio y hacer el primer commit:

1. Crea una rama llamada `feature-ui`.
2. Haz cambios en `app.js`, `users.js` y `config.js`.
3. Haz commit.
4. Regresa a `main`.
5. Crea otra rama llamada `feature-api`.
6. Modifica las mismas zonas de esos archivos de una manera diferente.
7. Haz commit.
8. Regresa a `feature-ui`.
9. Ejecuta:
   `git merge feature-api`

El objetivo es que aparezcan conflictos.

En VS Code practica:

- Accept Current Change
- Accept Incoming Change
- Accept Both Changes
- Compare Changes
- Resolución manual

No hay que resolver todos los conflictos de la misma manera: algunos deberían quedarse con el cambio actual, otros con el incoming, otros con ambos y otros requieren edición manual.
