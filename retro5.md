# Sprint 5 - Middlewares + Auth
<img src="https://img001.prntscr.com/file/img001/jSfgf31NTki_6vPl927AYA.png" >

Este documento resume la retrospectiva del equipo DronSAR al completar el quinto sprint del proyecto. Fecha limite de entrega 29 de Agosto del 2024. Para más detalles sobre las directrices del proyecto, se puede consultar el siguiente [```enlace```](https://drive.google.com/file/d/1CvxKeP50rAGHmamYE6Cj7DMKCl40G2ER/view). 

## Resumen de entregables
- Archivo retro.md con el resultado de la retrospectiva.
- (Opcional) Archivo daily.md con sus opiniones sobre las dailies/weeklies.
- Tablero de trabajo actualizado.
- Formulario de registro con:
    - Los campos mínimos mencionados en el sprint anterior.
    - Subida de una imagen de perfil.
    - Guardado en JSON con encriptación de contraseña.
- Formulario de login con:
     - Campos de email y password.
     - (Opcional) Función de recordar al usuario.
- Rutas de huéspedes y usuarios:
     - Las de huéspedes deberán redireccionar al perfil si el usuario está logueado.
     - Las de usuarios deberán redireccionar al login si el usuario no está logueado.


# 🔄 Retrospectiva estrella de mar

La retrospectiva de estrella de mar del nuestro equipo DronSAR luego de estar finalizando el quinto sprint del proyecto se puede resumir de la siguiente manera:

<img src="https://img001.prntscr.com/file/img001/AXuIMoLKRcmV98soW6PQFg.png"> 

Para más detalles, consultar los siguientes enlaces en [```Retrospectiva estrella de mar - DronsAR - S5.pdf```](https://jamboard.google.com/d/1ug1S_q9M8g8O1Zu1CzFccBciGNs1zBg1u9ZJ8Dzx7g0/viewer?f=0) [```proyectosagiles.org```](https://proyectosagiles.org/2009/06/14/retrospectiva-estrella-mar-starfish-retrospective-scrum/)


# 🕒 Panel de organización en Trello


A continuacion se ofrece el enlance al Tablero de trabajo, usando la plataforma de [```Trello:```](https://trello.com/b/C13pJ5cq/grupo-6)
<img src="https://img001.prntscr.com/file/img001/MADD9IOcRtCw2uUstlaCVA.png">

# 🚀 Aplicación Node.js + Express + EJS + JSON + Middleware

## 📂 Estructura del Proyecto
```bash
.
main/
├── controllers/                   # Controladores que manejan la lógica de negocio de la aplicación
│   ├── dron.js                        # Controlador para operaciones relacionadas con drones
│   └── usersController.js             # Controlador para operaciones relacionadas con usuarios
├── Informacion-Integrantes/       # Información de los integrantes del grupo (Directorio)
├── middleware/                    # Middleware para gestionar funciones intermedias en las solicitudes
│   └── authMiddleware.js              # Middleware de autenticación para proteger rutas
├── models/                        # Modelos de datos que representan las estructuras y esquemas
│   ├── drones.json                    # Datos de drones en formato JSON
│   └── users.json                     # Datos de usuarios en formato JSON
├── public/                        # Archivos estáticos como CSS, JavaScript del lado del cliente, imágenes
│   ├── css/                           # Archivos de estilos CSS
│   ├── fonts/                         # Fuentes utilizadas en el proyecto
│   ├── icomoon/                       # Iconos Icomoon
│   ├── icon/                          # Directorio para almacenar iconos adicionales
│   ├── img/                           # Imágenes utilizadas en la aplicación
│   └── js/                            # Archivos JavaScript del lado del cliente
├── routes/                        # Definición de rutas de la aplicación
│   ├── dron.js                        # Rutas específicas para la gestión de drones
│   └── users.js                       # Rutas específicas para la gestión de usuarios
├── services/                      # Servicios que proporcionan lógica de negocio reutilizable
│   ├── datasource.js                  # Fuente de datos principal para la aplicación
│   ├── fileUpload.js                  # Servicio para manejar la carga de archivos
│   ├── userDatasource.js              # Fuente de datos específica para usuarios
│   └── userFileUpload.js              # Servicio para manejar la carga de archivos de usuarios
├── views/                         # Vistas de la aplicación (plantillas EJS)
│   ├── partials/                      # Fragmentos de vistas reutilizables
│   │   ├── footer.ejs                     # Pie de página común para las vistas
│   │   ├── head.ejs                       # Cabezal HTML común para las vistas
│   │   ├── header.ejs                     # Encabezado común para las vistas
│   │   └── script.ejs                     # Scripts JavaScript comunes para las vistas
│   ├── products/                      # Vistas relacionadas con productos
│   │   ├── agregarProducto.ejs            # Formulario para agregar un nuevo producto
│   │   ├── carrito-compra.ejs             # Vista del carrito de compras
│   │   ├── detalle-producto.ejs           # Detalle de un producto específico
│   │   ├── editarProducto.ejs             # Formulario para editar un producto existente
│   │   └── productos.ejs                  # Vista general de productos
│   ├── users/                         # Vistas relacionadas con usuarios
│   │   ├── login.ejs                      # Formulario de inicio de sesión
│   │   ├── perfil.ejs                     # Vista del perfil del usuario
│   │   └── registro.ejs                   # Formulario de registro de usuario
│   ├── index.ejs                      # Página de inicio de la aplicación
│   └── not-found.ejs                  # Página de error 404 para rutas no encontradas
├── .gitignore                     # Archivo para ignorar archivos y directorios en Git
├── app.js                         # Archivo principal de configuración y ejecución del servidor
├── package-lock.json              # Archivo de dependencias específico de versiones
├── package.json                   # Información del proyecto y dependencias necesarias
└── README.md                      # Documentación principal del proyecto

```
