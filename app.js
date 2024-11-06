const express = require("express");
const path = require("path");
const app = express();

const methodOverride = require("method-override");
const session = require('express-session');
const cookies = require('cookie-parser');
const userDatasource = require('./services/userDatasource');

const productApiRoutes = require('./routes/api/products'); // Rutas de API para productos
const userApiRoutes = require('./routes/api/users'); // Rutas de API para usuarios
const apiCategoryRoutes = require('./routes/api/categories');

const categoryRoutes = require('./routes/categories');

const contactRoutes = require('./routes/contact');




// Middleware para analizar JSON
app.use(express.json());

const cors = require('cors');
app.use(cors());


// Rutas de productos
const dronRouter = require("./routes/dron");

// Rutas de usuarios
const usersRoutes = require('./routes/users');



const authMiddleware = require('./middleware/authMiddleware');

// Rutas de API
app.use('/api/products', productApiRoutes);
app.use('/api/users', userApiRoutes);
app.use('/api/categories', apiCategoryRoutes);


// Configuración de sesiones y cookies
app.use(session({
    secret: 'tu-secreto',
    resave: false,
    saveUninitialized: false, // Cambia a false para no guardar sesiones no inicializadas
    cookie: {
      maxAge: 1000 * 60 * 30 // 30 minutos; cambia este valor según lo que necesites
    }
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

// Middleware para asignar `user` a `res.locals` después de haber configurado las sesiones y cookies
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

app.use(authMiddleware.rememberUser); // Aplicar el middleware globalmente


// Definir la ubicación de los archivos estáticos
app.use(express.static('public'));

// Configuración de EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


// Proteger rutas con middleware
// ############# RUTAS ##############
// Ruta para mostrar la página de login de usuarios, solo para invitados
app.get('/users/login', authMiddleware.guest, (req, res) => {
    res.render('users/login');
});
// Ruta para mostrar el perfil del usuario autenticado
app.get('/users/perfil', authMiddleware.auth, (req, res) => {
    res.render('users/perfil', { user: req.session.user }); // Aquí también
});
// Ruta página principal
app.get('/', (req, res) => {
    res.render('index', { user: req.session.user }); // Agregamos el usuario aquí
});
// Ruta página de about
app.get('/about', (req, res) => {
    res.render('about');
});
// Ruta página de contact
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Ruta página de login
app.get('/login', (req, res) => {
    res.render('users/login');
});
// Ruta página de registro de usuarios
app.get('/registro', (req, res) => {
    res.render('users/registro');
});
// Ruta detalle de producto
app.get('/detalle-producto', (req, res) => {
    res.render('products/detalle-producto');
});
// Ruta carrito de compras del usuario
app.get('/carrito-compra', (req, res) => {
    res.render('products/carrito-compra');
});
// Ruta del controlador de drones
app.use('/productos', dronRouter);
// Usar las rutas de usuarios
app.use('/users', usersRoutes);

app.use('/categories', categoryRoutes);


app.use('/', contactRoutes); // Asegúrate de que el prefijo sea el correcto

//definicion del puerto
const port = process.env.PORT ?? 3000;
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