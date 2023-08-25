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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `distance` float NOT NULL,
  `destination_station_id` bigint NOT NULL,
  `origin_station_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsd70ui9cltwy9r0i91bxivuv0` (`destination_station_id`),
  KEY `FKfhho6grepljrty4tny3y3itvn` (`origin_station_id`),
  CONSTRAINT `FKfhho6grepljrty4tny3y3itvn` FOREIGN KEY (`origin_station_id`) REFERENCES `stations` (`id`),
  CONSTRAINT `FKsd70ui9cltwy9r0i91bxivuv0` FOREIGN KEY (`destination_station_id`) REFERENCES `stations` (`id`)
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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `class_type` varchar(30) DEFAULT NULL,
  `fair` float NOT NULL,
  `dist_for_fair` double DEFAULT NULL,
  `train_no` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfl6lqafat3qb9pxncquiew5b3` (`train_no`),
  CONSTRAINT `FKfl6lqafat3qb9pxncquiew5b3` FOREIGN KEY (`train_no`) REFERENCES `trains` (`id`)
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
-- Table structure for table `live_seats`
--

DROP TABLE IF EXISTS `live_seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `live_seats` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `available_seats` int DEFAULT NULL,
  `boogie` varchar(255) DEFAULT NULL,
  `class_type` varchar(20) DEFAULT NULL,
  `destination_time` datetime(6) DEFAULT NULL,
  `seat_type` varchar(20) DEFAULT NULL,
  `train_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6qlbvvari65r2ysv22nh3wm1t` (`train_id`),
  CONSTRAINT `FK6qlbvvari65r2ysv22nh3wm1t` FOREIGN KEY (`train_id`) REFERENCES `trains` (`id`)
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
-- Table structure for table `passenger_history`
--

DROP TABLE IF EXISTS `passenger_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passenger_history` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `pnr` varchar(10) DEFAULT NULL,
  `boogie_no` varchar(255) DEFAULT NULL,
  `booking_date` date NOT NULL,
  `gender` varchar(6) NOT NULL,
  `name` varchar(100) NOT NULL,
  `seat_no` int DEFAULT NULL,
  `seat_status` varchar(10) DEFAULT NULL,
  `train_departure_date` date NOT NULL,
  `destination_station` bigint NOT NULL,
  `origin_station` bigint NOT NULL,
  `train_no` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_p9nxrlv1ycn1uwv55xq13a433` (`pnr`),
  KEY `FKe9vn6qbcks7ncdw6dm0url3f3` (`destination_station`),
  KEY `FK7r1wg7ehtlhvtxhcif93wjeb3` (`origin_station`),
  KEY `FKdu4joy8aiuxhy8tv1pxnlfcqn` (`train_no`),
  KEY `FK20km9u1wf45p7juyiipq7efr7` (`user_id`),
  CONSTRAINT `FK20km9u1wf45p7juyiipq7efr7` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK7r1wg7ehtlhvtxhcif93wjeb3` FOREIGN KEY (`origin_station`) REFERENCES `stations` (`id`),
  CONSTRAINT `FKdu4joy8aiuxhy8tv1pxnlfcqn` FOREIGN KEY (`train_no`) REFERENCES `trains` (`id`),
  CONSTRAINT `FKe9vn6qbcks7ncdw6dm0url3f3` FOREIGN KEY (`destination_station`) REFERENCES `stations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passenger_history`
--

LOCK TABLES `passenger_history` WRITE;
/*!40000 ALTER TABLE `passenger_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `passenger_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passengers`
--

DROP TABLE IF EXISTS `passengers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passengers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `pnr` varchar(10) DEFAULT NULL,
  `boogie_no` varchar(255) DEFAULT NULL,
  `booking_date` date NOT NULL,
  `gender` varchar(6) NOT NULL,
  `name` varchar(100) NOT NULL,
  `seat_no` int DEFAULT NULL,
  `seat_status` varchar(10) DEFAULT NULL,
  `train_departure_date` date NOT NULL,
  `destination_station` bigint NOT NULL,
  `origin_station` bigint NOT NULL,
  `train_no` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_tej3mudmp2obwdbc5sl3gi5mk` (`pnr`),
  KEY `FK5glnv34ctly32nk6v896psml2` (`destination_station`),
  KEY `FK5hpcvix76remv3ojw5jy1ucb8` (`origin_station`),
  KEY `FK5xdvj4g427oghhroh2tjdehc5` (`train_no`),
  KEY `FKk6i9bj5temsus004aaaagqwmd` (`user_id`),
  CONSTRAINT `FK5glnv34ctly32nk6v896psml2` FOREIGN KEY (`destination_station`) REFERENCES `stations` (`id`),
  CONSTRAINT `FK5hpcvix76remv3ojw5jy1ucb8` FOREIGN KEY (`origin_station`) REFERENCES `stations` (`id`),
  CONSTRAINT `FK5xdvj4g427oghhroh2tjdehc5` FOREIGN KEY (`train_no`) REFERENCES `trains` (`id`),
  CONSTRAINT `FKk6i9bj5temsus004aaaagqwmd` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passengers`
--

LOCK TABLES `passengers` WRITE;
/*!40000 ALTER TABLE `passengers` DISABLE KEYS */;
/*!40000 ALTER TABLE `passengers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `payment_date_time` datetime(6) NOT NULL,
  `status` varchar(255) NOT NULL,
  `transaction_id` bigint DEFAULT NULL,
  `passenger_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKslpsnu6cg0kt7yn6mdplud6rc` (`passenger_id`),
  KEY `FKj94hgy9v5fw1munb90tar2eje` (`user_id`),
  CONSTRAINT `FKj94hgy9v5fw1munb90tar2eje` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKslpsnu6cg0kt7yn6mdplud6rc` FOREIGN KEY (`passenger_id`) REFERENCES `passengers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `running_trains`
--

DROP TABLE IF EXISTS `running_trains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `running_trains` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `delay` bigint DEFAULT NULL,
  `origin_date` date DEFAULT NULL,
  `current_station_id` bigint DEFAULT NULL,
  `train_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKji89oxdcj5b0st7xdeket9uty` (`current_station_id`),
  KEY `FKtmmecomnvfnmjkp5i7dicsqur` (`train_id`),
  CONSTRAINT `FKji89oxdcj5b0st7xdeket9uty` FOREIGN KEY (`current_station_id`) REFERENCES `stations` (`id`),
  CONSTRAINT `FKtmmecomnvfnmjkp5i7dicsqur` FOREIGN KEY (`train_id`) REFERENCES `trains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `running_trains`
--

LOCK TABLES `running_trains` WRITE;
/*!40000 ALTER TABLE `running_trains` DISABLE KEYS */;
INSERT INTO `running_trains` VALUES (1,0,'2023-08-20',1,1),(2,0,'2023-08-20',2,2),(3,0,'2023-08-19',1,3),(4,0,'2023-08-19',2,4);
/*!40000 ALTER TABLE `running_trains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat_history`
--

DROP TABLE IF EXISTS `seat_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat_history` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `boogie_no` varchar(255) DEFAULT NULL,
  `class_type` varchar(20) DEFAULT NULL,
  `end_time` datetime(6) DEFAULT NULL,
  `seat_type` varchar(20) DEFAULT NULL,
  `vacant_seat` int NOT NULL,
  `train_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK29xbyy776dfrfnbo60ef2rau` (`train_id`),
  CONSTRAINT `FK29xbyy776dfrfnbo60ef2rau` FOREIGN KEY (`train_id`) REFERENCES `trains` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat_history`
--

LOCK TABLES `seat_history` WRITE;
/*!40000 ALTER TABLE `seat_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `seat_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seats`
--

DROP TABLE IF EXISTS `seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seats` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `boogie` varchar(255) DEFAULT NULL,
  `class_type` varchar(20) DEFAULT NULL,
  `seat_type` varchar(20) DEFAULT NULL,
  `total_seat` int DEFAULT NULL,
  `train_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKthnax36uccd771sdt7fped2p1` (`train_id`),
  CONSTRAINT `FKthnax36uccd771sdt7fped2p1` FOREIGN KEY (`train_id`) REFERENCES `trains` (`id`)
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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city_name` varchar(30) NOT NULL,
  `code` varchar(10) NOT NULL,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_a5jb873kqd0gpggavx5n5l2gd` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stations`
--

LOCK TABLES `stations` WRITE;
/*!40000 ALTER TABLE `stations` DISABLE KEYS */;
INSERT INTO `stations` VALUES (1,'Indore','INDB','Indore Junction'),(2,'Bhopal','BPL','Bhopal Junction'),(3,'pune','pune','pune juntion');
/*!40000 ALTER TABLE `stations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trains`
--

DROP TABLE IF EXISTS `trains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trains` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fri` bit(1) DEFAULT NULL,
  `mon` bit(1) DEFAULT NULL,
  `origin_dest_distance` double DEFAULT NULL,
  `origin_time` time DEFAULT NULL,
  `sat` bit(1) DEFAULT NULL,
  `sun` bit(1) DEFAULT NULL,
  `thu` bit(1) DEFAULT NULL,
  `train_name` varchar(100) NOT NULL,
  `train_no` bigint NOT NULL,
  `train_speed` bigint DEFAULT NULL,
  `train_type` varchar(15) DEFAULT NULL,
  `tue` bit(1) DEFAULT NULL,
  `wed` bit(1) DEFAULT NULL,
  `destination_station` bigint NOT NULL,
  `origin_station` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_nhjr1sugwicx6ejujpopspffr` (`train_no`),
  KEY `FKtjb4wq3kmnv7oa54o0spim8md` (`destination_station`),
  KEY `FKa9j0r896evnssaw1d8hipga4v` (`origin_station`),
  CONSTRAINT `FKa9j0r896evnssaw1d8hipga4v` FOREIGN KEY (`origin_station`) REFERENCES `stations` (`id`),
  CONSTRAINT `FKtjb4wq3kmnv7oa54o0spim8md` FOREIGN KEY (`destination_station`) REFERENCES `stations` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trains`
--

LOCK TABLES `trains` WRITE;
/*!40000 ALTER TABLE `trains` DISABLE KEYS */;
INSERT INTO `trains` VALUES (1,_binary '',_binary '',1000,'08:00:00',_binary '',_binary '',_binary '','amarkantak Express',1238455,NULL,'INTERCITY',_binary '',_binary '',1,2),(2,_binary '\0',_binary '',500,'12:00:00',_binary '',_binary '',_binary '','jan Shatabdi Express',6758901,NULL,'INTERCITY',_binary '',_binary '',1,2),(3,_binary '',_binary '',300,'20:00:00',_binary '',_binary '\0',_binary '','namrada Express',9876153,NULL,'INTERCITY',_binary '',_binary '\0',1,2),(4,_binary '',_binary '\0',700,'16:00:00',_binary '\0',_binary '',_binary '','ambikapur jabalpur Express',4645675,NULL,'INTERCITY',_binary '\0',_binary '',1,2),(5,_binary '',_binary '',700,'12:00:00',_binary '',_binary '',_binary '','durando',123456,NULL,'INTERCITY',_binary '',_binary '',1,2);
/*!40000 ALTER TABLE `trains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trains_stations`
--

DROP TABLE IF EXISTS `trains_stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trains_stations` (
  `station_id` bigint NOT NULL,
  `train_no` bigint NOT NULL,
  PRIMARY KEY (`station_id`,`train_no`),
  KEY `FKhckmmx4rnsftfd7ta47jnlrc3` (`train_no`),
  CONSTRAINT `FKhckmmx4rnsftfd7ta47jnlrc3` FOREIGN KEY (`train_no`) REFERENCES `trains` (`id`),
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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(70) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `last_name` varchar(50) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `password` varchar(100) NOT NULL,
  `reg_date` date DEFAULT NULL,
  `role` varchar(25) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UK_63cf888pmqtt5tipcne79xsbm` (`mobile`),
  UNIQUE KEY `UK_r43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pune','n@gmail.com','nilesh sir','female','pawar','123456789','12345','2023-08-19',NULL,'nilesh');
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

-- Dump completed on 2023-08-19 19:37:17
