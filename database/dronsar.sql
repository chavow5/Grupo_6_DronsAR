-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dronsar
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Juegos y Diversión','2024-10-30 15:33:07','2024-10-30 15:33:07'),(2,'Fotografía Profesional','2024-10-30 15:33:07','2024-10-30 15:33:07'),(3,'Carreras','2024-10-30 15:33:07','2024-10-30 15:33:07'),(4,'Agrícolas','2024-10-30 15:33:07','2024-10-30 15:33:07'),(5,'Larga Distancia','2024-10-30 15:33:07','2024-10-30 15:33:07'),(6,'Accesorios','2024-10-30 15:33:07','2024-10-30 15:33:07');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'dron1','marca1','modelo1','desc1',1000.00,'500g','1hora','camara 4k','tipo1','500 mts','500kxh','dron-15577c765d6570d7.png',50.00,'2024-10-02 22:45:49','2024-10-02 22:45:49','2024-10-30 12:28:04',1),(259,'dron2','marca2','models2','desc2',2000.00,'500g','1hora','camara 4k','tipo1','500 mts','500kxh','dron-405d75661da1b855.png',10.00,'2024-10-02 23:01:15','2024-10-02 23:01:15','2024-10-30 12:28:04',2),(343,'dron3','marca3','models3','desc3',3000.00,'500g','1hora','camara 4k','tipo1','500 mts','500kxh','dron-626190862c6af583.png',5.00,'2024-10-02 23:01:57','2024-10-02 23:01:57','2024-10-30 12:28:04',3),(344,'dron4','marca4','models4','desc4',4000.00,'500g','1hora','camara 4k','tipo1','500 mts','500kxh','dron-62d3ef1c5c2385d4.png',20.00,'2024-10-02 23:02:55','2024-10-02 23:02:55','2024-10-31 22:57:11',3),(6062,'dron5','marca 5','model5','desc5',1000.00,'500g','1hora','camara 4k','tipo1','500 mts','500kxh','dron-94a17eb3af9cfed6.png',10.00,'2024-11-05 14:55:21','2024-11-05 14:55:21','2024-11-05 14:55:57',3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (18,'Leonardo','Garcia','davidleogarcia993@gmail.com','$2a$10$rBRHAumYKWHFLq6R.tmbde64NJ45.x9qNn3Il8.2Or0jrSPbwkHBu','default.png','2024-11-05 15:33:05','2024-11-05 15:40:26','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-05 20:17:07
