-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-11-2024 a las 21:56:48
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dronsar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'Juegos y Diversión', '2024-10-30 15:33:07', '2024-10-30 15:33:07'),
(2, 'Fotografía Profesional', '2024-10-30 15:33:07', '2024-10-30 15:33:07'),
(3, 'Carreras', '2024-10-30 15:33:07', '2024-10-30 15:33:07'),
(4, 'Agrícolas', '2024-10-30 15:33:07', '2024-10-30 15:33:07'),
(5, 'Larga Distancia', '2024-10-30 15:33:07', '2024-10-30 15:33:07'),
(6, 'Accesorios', '2024-10-30 15:33:07', '2024-10-30 15:33:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `asunto` varchar(255) NOT NULL,
  `mensaje` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `peso` varchar(50) NOT NULL,
  `duracionBateria` varchar(50) NOT NULL,
  `camara` varchar(50) NOT NULL,
  `tipoSensores` varchar(100) NOT NULL,
  `altura` varchar(50) NOT NULL,
  `velocidad` varchar(50) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `descuento` decimal(5,2) DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre`, `marca`, `modelo`, `descripcion`, `precio`, `peso`, `duracionBateria`, `camara`, `tipoSensores`, `altura`, `velocidad`, `image`, `descuento`, `created_at`, `createdAt`, `updatedAt`, `category_id`) VALUES
(1, 'DJI Avata Pro-View Combo con gafas DJI 2 y controlador de movimiento con cámara de 48 MP, paquete de', 'DJI', 'Avata Pro-View Combo', 'El DJI Avata Pro-View Combo es un dron FPV (First-Person View) diseñado para ofrecer una experiencia de vuelo inmersiva y de alta calidad. Viene con el dron DJI Avata, las gafas DJI FPV Goggles 2 y el controlador de movimiento DJI, brindando un paquete completo para los entusiastas de los drones. La cámara del Avata captura video en 4K estabilizado y fotos de 48 MP, ofreciendo imágenes de alta resolución y calidad cinematográfica. La estabilización avanzada y la lente gran angular garantizan tomas fluidas, incluso durante vuelos rápidos y maniobras acrobáticas. Las gafas DJI FPV Goggles 2 proporcionan una experiencia de visualización sin latencia, lo que permite al piloto tener una vista en primera persona mientras controla el dron en tiempo real. El controlador de movimiento DJI es intuitivo, lo que facilita los movimientos precisos durante el vuelo.', '1900000.00', '410 g', '18 min', '48 MP 4K a 60fps', 'Sensores de visión, GPS y barómetro ', '6000 m', '57 km/h', 'dron-874b1231035f117d.png', '10.00', '2024-11-06 19:24:54', '2024-11-06 19:24:54', '2024-11-06 19:24:54', 3),
(2, 'Mini Dron RC para Niños - Dron con Tecnología Anticolisión Automática, Vuelo Seguro, Giro 360°, Modo', 'Loolinn', 'Drone X26', 'El Mini Dron RC para Niños es la opción perfecta para introducir a los más pequeños en el mundo de los drones. Con tecnología de anticolisión automática, este dron asegura un vuelo seguro y divertido para los niños, evitando accidentes y caídas. Su capacidad para realizar giros de 360° y su modo controlado a mano lo convierten en un juguete interactivo y emocionante que los niños podrán disfrutar fácilmente.\r\n\r\nEste dron es muy fácil de volar gracias a su diseño intuitivo y su sistema de control sencillo, lo que lo convierte en un regalo ideal para niños y niñas que quieran experimentar el vuelo sin complicaciones. Además, es un excelente regalo de cumpleaños o para cualquier ocasión especial.', '70000.00', '149 g', '10 min ', '720p', 'Sensores anticolision', '500 m', '2 m/s', 'dron-f63bc3ea27e210b4.png', '10.00', '2024-11-06 17:13:56', '2024-11-06 17:13:56', '2024-11-06 17:13:56', 1),
(3, 'Drones para niños, mini dron ACIXX RC para niños y principiantes, cuadricóptero RC para interiores c', 'ACIXX', '1', 'El Mini Dron ACIXX RC es un cuadricóptero especialmente diseñado para niños y principiantes que desean iniciarse en el mundo de los drones de manera fácil y divertida. Con un diseño compacto y características innovadoras, como el modo sin cabeza, giro 3D y flotación automática, este dron es ideal para volar en interiores y garantizar una experiencia de vuelo segura y emocionante.\r\n\r\nGracias a su modo sin cabeza, los pilotos novatos pueden volar el dron sin preocuparse por la orientación del mismo, lo que facilita su manejo. El giro 3D agrega un toque de dinamismo, permitiendo realizar maniobras espectaculares mientras mantiene la estabilidad del vuelo. Además, la flotación automática permite al dron mantenerse suspendido en el aire, facilitando su control incluso para los más pequeños.', '79000.00', '100 g', '13 min', '720p ', 'Sensor direccional', '500 m', '5 m/s', 'dron-6d0fcc3e6361f0cb.png', '10.00', '2024-11-06 16:54:58', '2024-11-06 16:54:58', '2024-11-06 16:54:58', 1),
(4, 'Drone Agricultura DJI Agras T50 3 Baterías de Vuelo Inteligente y Cargador', 'DJI', 'Agras T50', 'El DJI Agras T50 es un dron especializado para aplicaciones agrícolas, diseñado para la pulverización de cultivos y otros trabajos de agricultura de precisión. Equipado con 3 baterías de vuelo inteligente y un cargador, este dron optimiza la eficiencia en el uso de pesticidas, fertilizantes y otros líquidos. Su diseño robusto y su capacidad de carga lo hacen ideal para tareas agrícolas en grandes extensiones de terreno.', '17000000.00', '17 kg', '18 min', '4K HD 60 fps, sensores infrarrojos para cultivos', 'GPS, Sensores de visión hacia abajo (para estabilidad).', '100 m', '54 km/h', 'dron-8eb5cc98aba921ff.png', '8.00', '2024-11-06 19:53:40', '2024-11-06 19:53:40', '2024-11-06 19:53:40', 4),
(5, 'Dron 1080p FPV con Cámara HD, Dron Aéreo Cuadricóptero con Posicionamiento Óptico, Dron F196 con Cám', 'Potensic', 'F196', 'El Dron F196 es un cuadricóptero versátil y de alto rendimiento, diseñado tanto para adultos como para niños. Equipado con una cámara HD 1080p y tecnología FPV (First Person View), este dron permite una experiencia de vuelo inmersiva, con transmisión en vivo directamente a tu dispositivo. La función de posicionamiento óptico garantiza vuelos estables y precisos, incluso en interiores o en áreas con poca señal GPS.', '700000.00', '449 g', '13 min', '1080 p ', 'FPV Detección de obstáculos omnidireccional', '1000 m', '30 m/s', 'dron-be18cfb7ae93aa5a.png', '15.00', '2024-11-06 16:43:31', '2024-11-06 16:43:31', '2024-11-06 16:43:31', 2),
(7, 'Espaciador Hub De Carga Dji Mini 3, Mini 3 Pro Y Mini 4 Pro', 'DJI', 'Compatible con DJI Mini 3, Mini 3 Pro y Mini 4 Pro', 'El espaciador hub de carga es un accesorio diseñado para facilitar el proceso de carga de las baterías del DJI Mini 3, Mini 3 Pro y Mini 4 Pro. Este espaciador se coloca en el hub de carga, asegurando que las baterías estén correctamente alineadas y proporcionando un espacio adecuado para cargarlas de forma eficiente y segura. Ideal para mantener el orden y optimizar el proceso de carga cuando se usan varias baterías.', '36000.00', '60 g', '-', '-', '-', '-', '-', 'dron-1d4d2c77cce93332.png', '5.00', '2024-11-06 20:05:28', '2024-11-06 20:05:28', '2024-11-06 20:05:28', 6),
(8, '24 hélices mini 3 con tornillos compatibles con DJI Mini 3 aspas, accesorios de repuesto (naranja)', 'DJI', 'DJI mini 3', 'Juego de 24 hélices de repuesto (12 pares) para el DJI Mini 3, con tornillos incluidos. Estas hélices están diseñadas para ser un reemplazo perfecto y compatible con el dron DJI Mini 3. El color naranja mejora la visibilidad durante el vuelo, facilitando la localización del dron en el aire. Son ideales como repuesto para reemplazar hélices dañadas o desgastadas.', '69000.00', '30 g', '-', '-', '-', '4000 m', '-', 'dron-4398848e27a6a031.png', '5.00', '2024-11-06 20:01:27', '2024-11-06 20:01:27', '2024-11-06 20:01:27', 6),
(46, 'Sharper Image® X-Treme Aero Mini Dron, helicóptero de acrobacias RC de 4.6 pulgadas, control remoto ', 'Sharper Image', 'X-Treme Aero Mini Dron', 'Este mini dron de acrobacias RC de 4.6 pulgadas es ligero, duradero y tiene un alcance de control remoto de 2.4 GHz. Está diseñado para ofrecer una experiencia de vuelo silenciosa tanto en interiores como en exteriores. Con capacidad para realizar maniobras acrobáticas, es perfecto para principiantes y para aquellos que buscan diversión sin complicaciones. Su tamaño compacto lo hace ideal para un uso versátil y fácil almacenamiento.', '40000.00', '50 g', '13 min', 'No incluye camara', 'Cuenta con sensores básicos para estabilidad y control, como giroscopio y acelerómetro (para mantene', '30 m', '2 m/s', 'dron-eddbf36a594c1ca5.png', '10.00', '2024-11-06 19:17:07', '2024-11-06 19:17:07', '2024-11-06 19:17:07', 1),
(83, 'Six-Axis G620 de pulverización agrícola con aviones no tripulados Uav aviones no tripulados', 'Dongying Tianqi Technology', 'G620', 'El Six-Axis G620 es un dron avanzado diseñado específicamente para aplicaciones de pulverización agrícola. Equipado con tecnología de última generación, este vehículo aéreo no tripulado (UAV) combina alta precisión y eficiencia, lo que lo convierte en una herramienta ideal para mejorar el rendimiento y la sostenibilidad en la agricultura moderna.', '99000000.00', '20 kg', '20 Litros, autonomia 30km', 'Sensores frecuencia UV', 'omnidireccional alta precisión ', '1000m', '7 m/s', 'dron-40002747479538cb.png', '20.00', '2024-11-06 16:31:52', '2024-11-06 16:31:52', '2024-11-06 16:31:52', 4),
(767, 'Mini Dron con Cámara Dual 1080P HD para Principiantes Aficionados, FPV, RC Quadcopter Plegable', 'Eachine', 'F10', 'Este mini dron es ideal para principiantes y aficionados que buscan una experiencia de vuelo accesible pero con características avanzadas como cámara dual 1080P HD y función FPV (First Person View). Su diseño plegable lo hace extremadamente portátil y fácil de transportar. Ofrece modos de vuelo versátiles, lo que permite realizar acrobacias y vuelos estables. Además, su duración de batería extendida asegura que el disfrute del vuelo sea mucho más largo que otros drones similares. Es una opción popular para regalos de juguetes.', '80000.00', '200 g', '25 min', 'Cámara Dual 1080P HD', 'Giroscopio para estabilizar el vuelo', '500 m', '20 km/h', 'dron-036f5805fcb28d85.png', '40.00', '2024-11-06 19:20:23', '2024-11-06 19:20:23', '2024-11-06 22:36:03', 1),
(851, 'DJI Avata 2 FPV Drone Fly More Combo (1 batería) con gafas 3 y RC Motion 3', 'DJI', 'Avata 2 FPV Drone Fly More Combo', 'Dron FPV compacto y profesional con cámara 4K, diseñado para una experiencia de vuelo inmersiva. Incluye las gafas DJI FPV Goggles 3, el controlador RC Motion 3 para un control intuitivo, y accesorios adicionales como un protector de hélice integrado y paquete de contenido POV con Deco Gear. Perfecto para grabación aérea en primera persona.', '2100000.00', '410 g', '18 min', '4K HD 60 fps', 'GPS, Sensores de visión hacia abajo (para estabilidad).', '6000 m', '58 km/h', 'dron-5e13756dcec8cfb7.png', '12.00', '2024-11-06 19:41:21', '2024-11-06 19:41:21', '2024-11-06 19:41:21', 3),
(6554, 'DJI Mini 2 SE + Combo More Fly', 'DJI', 'Mini 2 SE', 'Dron compacto y ligero con cámara 4K, control remoto de largo alcance y funciones inteligentes, ideal para grabación aérea y viajes. El combo incluye accesorios adicionales como baterías extra y cargadores.', '500000.00', '249 g', '31 min', '12 MP 4K a 30 fps', 'GPS, Sensores de visión hacia abajo (para estabilidad).', '4000 m', '58 km/h', 'dron-c01f6ed20576a11a.png', '10.00', '2024-11-06 19:30:44', '2024-11-06 19:30:44', '2024-11-06 19:30:44', 5),
(9021, 'Drone Agrícola Fumigador Dji Agras T20p Pulverización Dual Color Gris', 'DJI', 'Agras T20P', 'El DJI Agras T20P es un dron agrícola avanzado diseñado para la pulverización de cultivos. Equipado con un sistema de pulverización dual, es capaz de aplicar pesticidas y fertilizantes de manera eficiente y precisa. Su diseño robusto y su capacidad de carga lo hacen ideal para grandes extensiones de terreno agrícola. Además, cuenta con un sistema de navegación inteligente y sensores avanzados para evitar obstáculos y garantizar una aplicación precisa.', '16000000.00', '15kg', '15 min', '4K HD 60 fps, sensores infrarrojos para cultivos', 'GPS, Sensores de visión hacia abajo (para estabilidad).', '30 m', '52 km/h', 'dron-b7ab730639bfa822.png', '8.00', '2024-11-06 19:56:09', '2024-11-06 19:56:09', '2024-11-06 19:56:09', 4),
(970000001, 'Dron DJI Mini 4 Pro', 'DJI', 'Mini 4 Pro', 'Los drones DJI se caracterizan por la mejor tecnología al servicio de cada tipo de usuario y escenario de disparo. Si buscas un dron para principiantes, un dron profesional o solamente quieres estar actualizado con las últimas innovaciones, es hora de elegir a esta marca.', '2500000.00', '249 g', '34 min', '4K HD 60 fps', 'Detección de obstáculos omnidireccional', '3000 msnm', '13 m/s', 'dron-ac3dbb25476ed671.png', '20.00', '2024-11-06 16:21:54', '2024-11-06 16:21:54', '2024-11-06 22:40:02', 2),
(970000002, '55MM Control remoto eléctrico, Robot volador, detección de gestos infrarrojos, avión remoto YONGSHEN', 'YONGSHENG', '8390613152121', 'El Robot Volador YONGSHENG 8390613152121 es un innovador avión controlado por remoto que combina tecnología avanzada de detección de gestos infrarrojos y control eléctrico. Con un diseño compacto de solo 55 mm, este avión remoto está especialmente diseñado para ofrecer una experiencia de vuelo interactiva y emocionante. Utilizando sensores de movimiento, puedes controlar el avión sin necesidad de un mando tradicional: solo con tus gestos. Ideal para niños y adultos que buscan diversión y nuevas formas de interacción con tecnología de drones.', '39000.00', '100 g', '13 min', 'No tiene', 'protección a caídas', '30 m', '2 m/s', 'dron-f80356c2f20743ea.png', '10.00', '2024-11-06 16:48:00', '2024-11-06 16:48:00', '2024-11-06 16:48:00', 1),
(970000003, 'Dron DJI Air 3 con Cámara 4K, Sensor Dual, Transmisión OcuSync 4.0, Autonomía de 46 Minutos - Dron C', 'DJI', 'Air 3', 'El DJI Air 3 es un dron compacto y de alto rendimiento, diseñado para entusiastas de la fotografía aérea y profesionales que buscan un equipo portátil sin comprometer la calidad. Equipado con una cámara de 4K, un sistema de sensores duales para mejorar la estabilidad y calidad de imagen, y una autonomía de hasta 46 minutos, el DJI Air 3 es perfecto para capturar imágenes y videos impresionantes desde el aire con facilidad.\r\n\r\nCon la tecnología OcuSync 4.0, el DJI Air 3 ofrece una transmisión de video en alta definición a largas distancias, mientras que sus avanzadas características de vuelo, como seguimiento automático, modos de vuelo inteligentes y evitación de obstáculos en 360 grados, hacen que sea extremadamente fácil de pilotar. Es ideal tanto para principiantes que desean adentrarse en la fotografía aérea, como para pilotos experimentados que buscan un dron confiable y versátil.', '2800000.00', '720 g', '40 min', 'HDR 4K/60 fps; 4K/100 fps', 'Detección de obstáculos omnidireccional', '4000 m', '19 m/s', 'dron-374563849331a965.png', '5.00', '2024-11-06 17:02:33', '2024-11-06 17:02:33', '2024-11-06 17:02:33', 2),
(970000004, 'DJI Mini 3 Pro Fly More Combo - Dron Compacto 4K con Sensor de 1/1.3\", Autonomía de 47 Minutos, OcuS', 'DJI', 'Mini 3 Pro', 'El DJI Mini 3 Pro Fly More Combo es el paquete completo para los entusiastas de los drones que buscan un dispositivo compacto, potente y lleno de características profesionales. El Mini 3 Pro lleva la serie Mini a un nuevo nivel con su impresionante cámara 4K, un sensor de 1/1.3\", OcuSync 3.0, y autonomía de hasta 47 minutos, lo que lo convierte en una opción perfecta para creadores de contenido, fotógrafos y videógrafos que necesitan un dron portátil pero con prestaciones avanzadas.', '900000.00', '249 g', '47 min', '4K HDR Sensor 1/1.3\"', 'Sensores de evitación de obstáculos en frontal, posterior e inferior.', '3000 m', '16 m/s (~58 km/h)', 'dron-d668d79b7f3e3a40.png', '5.00', '2024-11-06 17:09:07', '2024-11-06 17:09:07', '2024-11-06 17:09:07', 2),
(970000005, 'Drone Plegable Redrie X29 con Cámara FPV 1080P', 'Redrie', 'X29', 'El Redrie X29 es un drone plegable diseñado para adultos y entusiastas de la fotografía aérea que buscan una opción económica y versátil. Con su cámara FPV 1080P, este drone permite a los usuarios tener una vista en tiempo real de lo que está capturando el dron, lo que hace que sea ideal para principiantes y aficionados que desean explorar el mundo de los drones con cámara. Su diseño plegable lo hace fácil de transportar y almacenar, mientras que sus características avanzadas, como el modo de vuelo sin cabeza, el retorno automático y la estabilización electrónica, mejoran la experiencia de vuelo. La cámara FPV 1080P ofrece imágenes nítidas y claras para fotos y videos en alta definición.', '2000000.00', '249 g', '20 min', '1080 p HD', 'Giroscopio para estabilizar el vuelo', '1000m', '50 km/h', 'dron-4e0813cafbc88f97.png', '10.00', '2024-11-06 19:28:09', '2024-11-06 19:28:09', '2024-11-06 19:28:09', 5),
(970000006, 'DJI Avata Fly Pro-View Combo (con DJI Goggles 2)', 'DJI', 'Avata Fly Pro-View Combo', 'Dron FPV compacto y profesional con cámara 4K estabilizada, incluye gafas DJI FPV Goggles 2 para una experiencia de vuelo inmersiva, y controlador de movimiento para un control intuitivo.', '2100000.00', '410 g', '18 min', '48 MP (4K a 60 fps)', 'Sensores de visión hacia adelante, abajo y atrás. GPS', '6000', '58 km/h', 'dron-ed7e42598758cf6f.png', '10.00', '2024-11-06 19:33:49', '2024-11-06 19:33:49', '2024-11-06 19:33:49', 5),
(970000007, 'Dron SIMREX X700 con cámara HD de 720 fps, video FPV en vivo por WiFi, cuadricóptero RC de 6 ejes, r', 'SIMREX', 'X700', 'Dron con cámara HD de 720p y video FPV en vivo a través de WiFi. Equipado con un sistema de 6 ejes, retención de altitud, modo sin cabeza y control de despegue/aterrizaje con una tecla. Ideal para principiantes, con funciones como giro de 360° y posicionamiento de flujo óptico.', '170000.00', '200 g', '8 min', '720p HD', 'sensores 6 ejes.', '100 m', '30 km/h', 'dron-bc3da9842cf27000.png', '10.00', '2024-11-06 19:36:59', '2024-11-06 19:36:59', '2024-11-06 19:36:59', 3),
(970000008, 'Mini Dron Plegable para Adultos con Cámara FPV 1080P', 'Inporsa', 'x100', 'Dron plegable con cámara FPV 1080P, ideal para adultos. Cuenta con características como retención de altitud mejorada, modo sin cabeza, giro 3D y control de 3 velocidades. Viene con dos baterías para un vuelo más largo y un inicio de una tecla para facilitar el despegue.', '580000.00', '249 g', '18 min', '1080 p ', 'Giroscopio para estabilizar el vuelo', '1000m', '58 km/h', 'dron-cf20fa6e4efbf5d6.png', '40.00', '2024-11-06 19:50:53', '2024-11-06 19:50:53', '2024-11-06 22:36:18', 3),
(970000009, 'Drone Dji Combo Agras T40 Inteligente Pulverizador + Baterías Color Gris', 'DJI', 'Agras T40', 'El DJI Agras T40 es un dron pulverizador inteligente de alta capacidad diseñado para la agricultura de precisión. Equipado con un sistema avanzado de pulverización y navegación, el T40 optimiza la distribución de fertilizantes y pesticidas en terrenos agrícolas de grandes dimensiones. Viene con múltiples baterías para asegurar operaciones prolongadas, y su diseño robusto le permite manejar cargas pesadas. Es ideal para la aplicación eficiente de productos en cultivos a gran escala.', '16500000.00', '14 kg', '20 min', 'No incluye camara, pero está equipado con sensores', 'Sensores de flujo óptico para estabilización de vuelo. GPS', '30 m', '64 km/h', 'dron-5e7bc9518236d8e1.png', '7.00', '2024-11-06 19:59:24', '2024-11-06 19:59:24', '2024-11-06 19:59:24', 4),
(970000010, 'Soporte De Helice Para Drone Dji Mini 3 Pro Rc', 'DJI', 'Compatible Mini 3 y 4', 'Soporte de hélice diseñado específicamente para el DJI Mini 3 Pro. Este accesorio permite mantener las hélices del dron seguras y estables durante el transporte, evitando daños y facilitando el almacenamiento. El soporte está hecho para ser compatible con el control remoto RC del Mini 3 Pro y ayuda a organizar las hélices de manera eficiente.', '22000.00', '30 g', '-', '-', '-', '-', '-', 'dron-424abceef1d158a5.png', '5.00', '2024-11-06 20:03:33', '2024-11-06 20:03:33', '2024-11-06 20:03:33', 6),
(970000011, 'Tren de aterrizaje para DJI Mini 3/Mini 3 Pro Leg Kit extendido plegable para Mini 3 (2022)/DJI Mini', 'DJI', 'Mini 3 Pro', 'El tren de aterrizaje extendido plegable está diseñado para aumentar la altura del DJI Mini 3 y Mini 3 Pro, protegiendo las hélices y el cuerpo del dron de posibles daños al aterrizar sobre superficies irregulares. Este kit de piernas es fácil de instalar, ligero y plegable, lo que facilita su transporte sin comprometer la estabilidad del dron. Ideal para mejorar el rendimiento de aterrizaje en terrenos complicados.', '25000.00', '30 g', '-', '-', '-', '-', '-', 'dron-c778ca2fa3fa81ac.png', '3.00', '2024-11-06 20:07:55', '2024-11-06 20:07:55', '2024-11-06 20:07:55', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `rol` varchar(20) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_category` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=970000014;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80001;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
