const express = require("express");
const path = require("path");
const app = express();

const methodOverride = require("method-override");
const session = require('express-session');
const cookies = require('cookie-parser');
const userDatasource = require('./services/userDatasource');



// Rutas de productos
const dronRouter = require("./routes/dron");
// Rutas de usuarios
const usersRoutes = require('./routes/users');
const authMiddleware = require('./middleware/authMiddleware');

// Configuración de sesiones y cookies
app.use(session({
    secret: 'dronsarSecret',
    resave: false,
    saveUninitialized: false
  }));
  app.use(cookies());

  // Middleware para autenticar automáticamente si la cookie userEmail existe
app.use(async (req, res, next) => {
    if (!req.session.user && req.cookies.userEmail) {
        try {
            const users = await userDatasource.load();
            const user = users.find(u => u.email === req.cookies.userEmail);
            if (user) {
                req.session.user = user; // Loguear automáticamente
            }
        } catch (error) {
            console.error('Error al cargar los usuarios:', error);
        }
    }
    next();
});


// Definir la ubicación de los archivos estáticos
app.use(express.static('public'));
// Configuración de EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


const port = process.env.PORT ?? 3000;

// Proteger rutas con middleware
// Rutas para autenticación
app.get('/users/login', authMiddleware.guest, (req, res) => {
    res.render('users/login');
});

app.get('/users/perfil', authMiddleware.auth, (req, res) => {
    res.render('users/perfil', { user: req.session.user });
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('users/login');
});

app.get('/registro', (req, res) => {
    res.render('users/registro');
});

app.get('/detalle-producto', (req, res) => {
    res.render('products/detalle-producto');
});

app.get('/carrito-compra', (req, res) => {
    res.render('products/carrito-compra');
});

// Incluir las rutas del controlador de drones
app.use('/productos', dronRouter);

// Usar las rutas de usuarios
app.use('/users', usersRoutes);



app.use((req, res) => {
    res.status(404).render("not-found");
  });


  app.listen(port, (err) => {
    console.log(
        err
            ? `❌ Error: No se pudo iniciar el servidor: ${err.message}`
            : `
  ✈----------------------------------------------✈

  ¡Bienvenidos a DronsAr ✈, Grupo 6 Digital House!
  Aquí podes encontrar los mejores productos, información y servicios para tu Dron.

  Servidor corriendo en: http://localhost:${port}

  Presiona CTRL + C para detener el servidor.

  ✈--------------------------------------------------✈
  `
    );
});