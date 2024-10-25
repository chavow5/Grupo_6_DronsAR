-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2024 a las 01:08:43
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
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `categoria` enum('Consumer','Profesional') NOT NULL,
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
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre`, `marca`, `modelo`, `descripcion`, `categoria`, `precio`, `peso`, `duracionBateria`, `camara`, `tipoSensores`, `altura`, `velocidad`, `image`, `descuento`, `created_at`, `createdAt`, `updatedAt`) VALUES
(1, 'dron1', 'marca1', 'modelo1', 'desc1', 'Consumer', '1000.00', '500g', '1hora', 'camara 4k', 'tipo1', '500 mts', '500kxh', 'dron-15577c765d6570d7.png', '50.00', '2024-10-02 22:45:49', '2024-10-02 22:45:49', '2024-10-02 22:45:49'),
(259, 'dron2', 'marca2', 'models2', 'desc2', 'Profesional', '2000.00', '500g', '1hora', 'camara 4k', 'tipo1', '500 mts', '500kxh', 'dron-405d75661da1b855.png', '10.00', '2024-10-02 23:01:15', '2024-10-02 23:01:15', '2024-10-02 23:01:15'),
(343, 'dron3', 'marca3', 'models3', 'desc3', 'Consumer', '3000.00', '500g', '1hora', 'camara 4k', 'tipo1', '500 mts', '500kxh', 'dron-626190862c6af583.png', '5.00', '2024-10-02 23:01:57', '2024-10-02 23:01:57', '2024-10-02 23:01:57'),
(344, 'dron4', 'marca4', 'models4', 'desc4', 'Consumer', '4000.00', '500g', '1hora', 'camara 4k', 'tipo1', '500 mts', '500kxh', 'dron-62d3ef1c5c2385d4.png', '20.00', '2024-10-02 23:02:55', '2024-10-02 23:02:55', '2024-10-15 21:41:34');

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
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombres`, `apellidos`, `email`, `password`, `profileImage`, `createdAt`, `updatedAt`) VALUES
(2, 'david', 'ramirez', 'david@gmail.com', '$2a$10$60waSfotqUoxE3CugXjhK.Ud/5TWvq9LIwcokjf10AjYTUtZlEk9W', 'default.png', '2024-10-01 23:15:19', '2024-10-01 23:15:19'),
(5, 'David', 'Garcia', 'davidleogarcia@gmail.com', '$2a$10$znX5rOCObJAp.y2NIpbHYOGOyF/rMi3OjKFxxdN4kXb0xPejdgggK', 'default.png', '2024-10-02 00:27:11', '2024-10-02 00:27:11');

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
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78692;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
