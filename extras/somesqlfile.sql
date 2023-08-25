-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: rail_nexus
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `distance`
--

DROP TABLE IF EXISTS `distance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distance` (
  `id` bigint NOT NULL,
  `distance` float NOT NULL,
  `destination_station` int NOT NULL,
  `origin_station` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn6x35qcn6bq0fseoh6pgyp4d6` (`destination_station`),
  KEY `FKs1bl9gkn7ei5vxlup8vrcxf5v` (`origin_station`),
  CONSTRAINT `FKn6x35qcn6bq0fseoh6pgyp4d6` FOREIGN KEY (`destination_station`) REFERENCES `stations` (`id`),
  CONSTRAINT `FKs1bl9gkn7ei5vxlup8vrcxf5v` FOREIGN KEY (`origin_station`) REFERENCES `stations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distance`
--

LOCK TABLES `distance` WRITE;
/*!40000 ALTER TABLE `distance` DISABLE KEYS */;
/*!40000 ALTER TABLE `distance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fair`
--

DROP TABLE IF EXISTS `fair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fair` (
  `id` bigint NOT NULL,
  `seat_type` varchar(30) DEFAULT NULL,
  `fair` float NOT NULL,
  `dist_for_fair` double DEFAULT NULL,
  `train_no` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfl6lqafat3qb9pxncquiew5b3` (`train_no`),
  CONSTRAINT `FKfl6lqafat3qb9pxncquiew5b3` FOREIGN KEY (`train_no`) REFERENCES `trains` (`train_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fair`
--

LOCK TABLES `fair` WRITE;
/*!40000 ALTER TABLE `fair` DISABLE KEYS */;
/*!40000 ALTER TABLE `fair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `live_seats`
--

DROP TABLE IF EXISTS `live_seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `live_seats` (
  `id` bigint NOT NULL,
  `available_seats` int DEFAULT NULL,
  `boogie` varchar(255) DEFAULT NULL,
  `class_type` varchar(20) DEFAULT NULL,
  `destination_time` datetime(6) DEFAULT NULL,
  `seat_type` varchar(20) DEFAULT NULL,
  `train_train_no` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcqfp93blv89jbnbrwg897m2hi` (`train_train_no`),
  CONSTRAINT `FKcqfp93blv89jbnbrwg897m2hi` FOREIGN KEY (`train_train_no`) REFERENCES `trains` (`train_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `live_seats`
--

LOCK TABLES `live_seats` WRITE;
/*!40000 ALTER TABLE `live_seats` DISABLE KEYS */;
/*!40000 ALTER TABLE `live_seats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seats`
--

DROP TABLE IF EXISTS `seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seats` (
  `id` bigint NOT NULL,
  `boogie` varchar(255) DEFAULT NULL,
  `class_type` varchar(20) DEFAULT NULL,
  `seat_type` varchar(20) DEFAULT NULL,
  `total_seat` int DEFAULT NULL,
  `train_train_no` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKp9iqi3cl5y7243fkjnnykwefh` (`train_train_no`),
  CONSTRAINT `FKp9iqi3cl5y7243fkjnnykwefh` FOREIGN KEY (`train_train_no`) REFERENCES `trains` (`train_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seats`
--

LOCK TABLES `seats` WRITE;
/*!40000 ALTER TABLE `seats` DISABLE KEYS */;
/*!40000 ALTER TABLE `seats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stations`
--

DROP TABLE IF EXISTS `stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(30) NOT NULL,
  `code` varchar(10) NOT NULL,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stations`
--

LOCK TABLES `stations` WRITE;
/*!40000 ALTER TABLE `stations` DISABLE KEYS */;
INSERT INTO `stations` VALUES (1,'Indore','INDB','Indore Junction'),(2,'Bhopal','BPL','Bhopal Junction');
/*!40000 ALTER TABLE `stations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trains`
--

DROP TABLE IF EXISTS `trains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trains` (
  `train_no` bigint NOT NULL,
  `fri` bit(1) DEFAULT NULL,
  `mon` bit(1) DEFAULT NULL,
  `origin_dest_distance` double DEFAULT NULL,
  `origin_time` time DEFAULT NULL,
  `sat` bit(1) DEFAULT NULL,
  `sun` bit(1) DEFAULT NULL,
  `thu` bit(1) DEFAULT NULL,
  `train_name` varchar(100) NOT NULL,
  `train_type` varchar(15) DEFAULT NULL,
  `tue` bit(1) DEFAULT NULL,
  `wed` bit(1) DEFAULT NULL,
  `destination_station` int NOT NULL,
  `origin_station` int NOT NULL,
  PRIMARY KEY (`train_no`),
  KEY `FKtjb4wq3kmnv7oa54o0spim8md` (`destination_station`),
  KEY `FKa9j0r896evnssaw1d8hipga4v` (`origin_station`),
  CONSTRAINT `FKa9j0r896evnssaw1d8hipga4v` FOREIGN KEY (`origin_station`) REFERENCES `stations` (`id`),
  CONSTRAINT `FKtjb4wq3kmnv7oa54o0spim8md` FOREIGN KEY (`destination_station`) REFERENCES `stations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trains`
--

LOCK TABLES `trains` WRITE;
/*!40000 ALTER TABLE `trains` DISABLE KEYS */;
/*!40000 ALTER TABLE `trains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trains_stations`
--

DROP TABLE IF EXISTS `trains_stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trains_stations` (
  `station_id` int NOT NULL,
  `train_no` bigint NOT NULL,
  PRIMARY KEY (`station_id`,`train_no`),
  KEY `FKhckmmx4rnsftfd7ta47jnlrc3` (`train_no`),
  CONSTRAINT `FKhckmmx4rnsftfd7ta47jnlrc3` FOREIGN KEY (`train_no`) REFERENCES `trains` (`train_no`),
  CONSTRAINT `FKogef4uji82fd1lc2b4v7t1s73` FOREIGN KEY (`station_id`) REFERENCES `stations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trains_stations`
--

LOCK TABLES `trains_stations` WRITE;
/*!40000 ALTER TABLE `trains_stations` DISABLE KEYS */;
/*!40000 ALTER TABLE `trains_stations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(70) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `last_name` varchar(50) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `password` varchar(100) NOT NULL,
  `reg_date` date DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2023-08-14 10:41:18
