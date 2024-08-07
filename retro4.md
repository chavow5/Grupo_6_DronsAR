# Sprint 4 - JSON y Métodos HTTP
<img src="https://img001.prntscr.com/file/img001/CHfz_SIvSiSINxef3YNdKA.png" >

Este documento resume la retrospectiva del equipo DronSAR al completar el cuarto sprint del proyecto. Fecha limite de entrega 6 de Agosto del 2024. Para más detalles sobre las directrices del proyecto, se puede consultar el siguiente [```enlace```](https://drive.google.com/file/d/11gyHYZFvCottMpBKmS9nCtpUcMLj2xJf/view). 

## Resumen de entregables
- Archivo retro.md con el resultado de la retrospectiva.
- Archivo daily.md con sus opiniones sobre las daylies/weeklies. (Opcional)
- Tablero de trabajo actualizado.
- Archivos products.json y users.json con datos de productos y usuarios.
- Administración completa de productos con:
  - Listado
  - Detalle
  - Creación
  - Edición
  - Eliminación


# 🔄 Retrospectiva estrella de mar

La retrospectiva de estrella de mar del nuestro equipo DronSAR luego de estar finalizando el tercer sprint del proyecto se puede resumir de la siguiente manera:

<img src="https://img001.prntscr.com/file/img001/-wYgt2IUT0WN8GpKeM3XuA.png"> 

Para más detalles, consultar los siguientes enlaces en [```Retrospectiva estrella de mar - DronsAR - S4.pdf```](https://jamboard.google.com/d/13mrxlP3T2YPAuWfUw6vyQRyIA42YtH7z9SCJqP-8U78/viewer?f=0) [```proyectosagiles.org```](https://proyectosagiles.org/2009/06/14/retrospectiva-estrella-mar-starfish-retrospective-scrum/)


# 🕒 Panel de organización en Trello


A continuacion se ofrece el enlance al Tablero de trabajo, usando la plataforma de [```Trello:```](https://trello.com/b/C13pJ5cq/grupo-6)
<img src="https://img001.prntscr.com/file/img001/VVfel359QaC1lR93ZDlSvw.png">

# 🚀 Aplicación Node.js + Express + EJS + JSON

## 📂 Estructura del Proyecto
```bash
.
├── main/
│   ├── controllers/
│   │       └── dron.js          # Controlador para la lógica de los productos
│   ├── models/
│   │       └── drones.json      # Archivo JSON con los datos de los drones
│   │── public/
│   │   ├── CSS/
│   │   │   ├── login.css         # Estilos para la página de inicio de sesión
│   │   │   ├── registro.css      # Estilos para la página de registro
│   │   │   └── styles.css        # Estilos generales de la aplicación
│   │   └── img/
│   │        ├── DRONSAR PROP-10.svg     # Imagen vectorial del logo DRONSAR
│   │        ├── d1.png                   # Imagen de producto
│   │        ├── d2.png                   # Imagen de producto
│   │        ├── d3.png                   # Imagen de producto
│   │        ├── drone2.gif               # Animación de drone
│   │        ├── fondo.jpg                # Imagen de fondo para la aplicación
│   │        ├── fondo2.jpg               # Otra imagen de fondo
│   │        ├── imagen-login.png         # Imagen para la página de inicio de sesión
│   │        └── imagen-principal.png     # Imagen principal de la aplicación
│   │── routes/
│   │        └── dron.js                  # Gestiona las rutas del CRUD para el producto utilizando Express.js.
│   │── services/
│   │        ├── datasources.js           # Configuración de fuentes de datos
│   │        └── fileUpload.js            # Lógica de carga de archivos
│   └── views/
│       ├── partials/
│       │    ├── footer.ejs               # Parcial para el pie de página
│       │    ├── head.ejs                 # Parcial para la cabecera del documento
│       │    ├── header.ejs               # Parcial para la cabecera del sitio
│       │    └── script.ejs               # Scripts para la funcionalidad y la interactividad del sitio
│       ├── products/
│       │    ├── agregarProducto.ejs      # Vista para agregar producto
│       │    ├── carrito-compra.ejs       # Página del carrito de compra
│       │    ├── detalle-producto.ejs     # Página de detalle de producto
│       │    └── productos.ejs            # Vista general de productos
│       ├── users/
│       │    ├── login.ejs                # Página de inicio de sesión
│       │    └── registro.ejs             # Página de registro de usuario
│       ├── index.ejs                     # Página principal de la aplicación
│       └── not-found.ejs                 # Página para manejo de error 404
│ 
├── wireframes/                 # Carpeta para los wireframes del proyecto
├── .gitignore                  # Archivo de configuración para ignorar archivos en Git
├── README.md                   # Archivo con información básica del proyecto
├── Retro.md                    # Archivo para registrar retrospectivas del proyecto SPRINT2
├── Retro3.md                   # Archivo para registrar retrospectivas del proyecto SPRINT3
├── Daily.md                    # Archivo de registro diario
├── app.js                      # Archivo principal de la aplicación (JavaScript)
├── package-lock.json           # Archivo de bloqueo de versiones de paquetes (npm)
└── package.json                # Archivo de configuración de paquetes (npm)
```
