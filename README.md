# fuertesoft - Sitio mínimo (sin diseño)

Este proyecto es una web estática sin estilos, construida sólo con HTML usando el contenido proporcionado.

## Estructura
- `index.html`: Página única con navbar, secciones de servicios, quiénes somos, cómo trabajamos, experiencia y footer.
- `styles.css`: Estilos del navbar (responsive, efectos, CTA).
- `script.js`: Interacciones (toggle menú móvil y sombra al hacer scroll).

## Cómo abrir

Opción rápida (abrir el archivo directamente):
1. Abre `index.html` con tu navegador (doble clic o arrastrar al navegador).

Servir con un pequeño servidor HTTP (recomendado para enlaces ancla):

```bash
# macOS (zsh)
python3 -m http.server 8080 --directory \
  /Users/juanantonioduranramirez/Documents/freelance2

# Luego visita:
open http://localhost:8080/index.html
```

Si prefieres usar Node.js:

```bash
npx serve /Users/juanantonioduranramirez/Documents/freelance2 -p 8080
open http://localhost:8080/index.html
```
