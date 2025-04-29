
Built by https://www.blackbox.ai

---

```markdown
# Gobierno Escolar - Colegio Calatrava

## Project Overview
El proyecto "Gobierno Escolar - Colegio Calatrava" es una aplicación web que permite a los estudiantes y profesores del Colegio Calatrava participar en un proceso de votación para elegir propuestas y representantes. La aplicación incluye un sistema de inicio de sesión basado en correos electrónicos institucionales, la selección de categorías y cursos, y la votación sobre propuestas en diferentes bloques.

## Installation

Para ejecutar el proyecto en su máquina local, siga estos pasos:

1. **Clone el repositorio**:
   ```bash
   git clone <URL_DEL_REPO>
   cd <NOMBRE_DEL_REPO>
   ```

2. **Instale las dependencias**:
   ```bash
   npm install
   ```

3. **Inicie el servidor**:
   ```bash
   node server.js
   ```
   Luego, abra su navegador y acceda a `http://localhost:3000`.

## Usage

1. Acceda a la aplicación en su navegador.
2. Ingrese su correo electrónico institucional con el dominio `@colegiocalatrava.edu.co`.
3. Preseleccione su categoría:
   - Personerito (Primaria)
   - Personero Estudiantil (Bachillerato)
   - Representante de Profesores
4. Seleccione su curso y nombre.
5. Voté por las propuestas en su bloque preferido.

## Features
- **Inicio de sesión**: Verificación de correos electrónicos con dominio institucional.
- **Selección de categorías**: Diferenciación entre estudiantes de primaria y bachillerato.
- **Selección de nombre**: Elección de un nombre de lista, dependiendo del curso.
- **Sistema de votación**: Presentación de bloques de propuestas y registro de votos.

## Dependencies
El proyecto utiliza las siguientes dependencias, que se encuentran en el archivo `package.json`:

- **Express**: Un framework minimalista para crear aplicaciones web en Node.js.
- **Path**: Módulo de Node.js para trabajar con rutas de archivos.

```json
{
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

## Project Structure
La estructura del proyecto es la siguiente:

```
/
├── index.html               # Página principal de la aplicación
├── server.js                # Servidor Express y lógica del backend
├── students.js              # Datos de estudiantes por curso
├── blocks.js                # Propuestas por bloque
└── package.json             # Dependencias del proyecto
```

## Licencia
Este proyecto está bajo la Licencia MIT. Consulte el archivo LICENSE para más información.

> **Nota**: Asegúrese de tener instalado Node.js y npm en su máquina antes de intentar instalar las dependencias.
```