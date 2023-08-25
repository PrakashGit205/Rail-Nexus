-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: irctc
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
  `id` int NOT NULL AUTO_INCREMENT,
  `startSId` int DEFAULT NULL,
  `endSid` int DEFAULT NULL,
  `distBtwStn` float DEFAULT NULL,
  `timeBtwStn` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `startSId` (`startSId`),
  KEY `endSid` (`endSid`),
  CONSTRAINT `Distance_ibfk_1` FOREIGN KEY (`startSId`) REFERENCES `stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Distance_ibfk_2` FOREIGN KEY (`endSid`) REFERENCES `stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distance`
--

LOCK TABLES `distance` WRITE;
/*!40000 ALTER TABLE `distance` DISABLE KEYS */;
INSERT INTO `distance` VALUES (11,31,32,230,'04:36:00'),(12,31,33,320,'06:24:00'),(13,31,34,170,'03:24:00'),(14,31,36,420,'08:24:00'),(15,32,33,390,'07:48:00'),(16,32,34,410,'08:12:00'),(17,32,36,340,'06:48:00'),(18,33,34,310,'06:12:00'),(19,33,36,500,'10:00:00'),(20,34,36,380,'07:36:00');
/*!40000 ALTER TABLE `distance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fairs`
--

DROP TABLE IF EXISTS `fairs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fairs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Fair` float DEFAULT NULL,
  `SeatType` varchar(15) DEFAULT NULL,
  `TrainNum` int DEFAULT NULL,
  `DistForFair` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `TrainNum` (`TrainNum`),
  KEY `fairsIndex` (`id`),
  CONSTRAINT `fairs_ibfk_1` FOREIGN KEY (`TrainNum`) REFERENCES `trains` (`trnNo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=861 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fairs`
--

LOCK TABLES `fairs` WRITE;
/*!40000 ALTER TABLE `fairs` DISABLE KEYS */;
INSERT INTO `fairs` VALUES (798,1200,'1AC',12367,100),(799,800,'2AC',12367,100),(800,500,'3AC',12367,100),(801,500,'3AC',12367,100),(802,100,'General',12367,100),(803,100,'General',12367,100),(804,100,'General',12367,100),(805,100,'General',12367,100),(806,100,'General',12367,100),(807,100,'General',12367,100),(808,1200,'1AC',12489,100),(809,800,'2AC',12489,100),(810,500,'3AC',12489,100),(811,500,'3AC',12489,100),(812,130,'General',12489,100),(813,130,'General',12489,100),(814,130,'General',12489,100),(815,130,'General',12489,100),(816,130,'General',12489,100),(817,130,'General',12489,100),(818,1300,'1AC',12835,100),(819,900,'2AC',12835,100),(820,500,'3AC',12835,100),(821,500,'3AC',12835,100),(822,150,'General',12835,100),(823,150,'General',12835,100),(824,150,'General',12835,100),(825,150,'General',12835,100),(826,150,'General',12835,100),(827,150,'General',12835,100),(828,1500,'1AC',12945,100),(829,1100,'2AC',12945,100),(830,500,'3AC',12945,100),(831,500,'3AC',12945,100),(832,200,'General',12945,100),(833,200,'General',12945,100),(834,200,'General',12945,100),(835,200,'General',12945,100),(836,200,'General',12945,100),(837,200,'General',12945,100);
/*!40000 ALTER TABLE `fairs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `liveseats`
--

DROP TABLE IF EXISTS `liveseats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `liveseats` (
  `STrainNo` int DEFAULT NULL,
  `BoogieNo` varchar(4) NOT NULL,
  `CurrentBogie` tinyint DEFAULT '0',
  `SeatType` varchar(15) DEFAULT NULL,
  `SeatAvlbl` int DEFAULT NULL,
  `DepartDate` datetime NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `STrainNo` (`STrainNo`,`BoogieNo`,`SeatType`),
  CONSTRAINT `LiveSeats_ibfk_1` FOREIGN KEY (`STrainNo`) REFERENCES `trains` (`trnNo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `LiveSeats_ibfk_2` FOREIGN KEY (`STrainNo`, `BoogieNo`, `SeatType`) REFERENCES `seats` (`STrainNo`, `BoogieNo`, `SeatType`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=757 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `liveseats`
--

LOCK TABLES `liveseats` WRITE;
/*!40000 ALTER TABLE `liveseats` DISABLE KEYS */;
INSERT INTO `liveseats` VALUES (12367,'A1',1,'1AC',80,'2023-05-28 14:04:45',64),(12367,'B1',1,'2AC',80,'2023-05-28 14:04:45',65),(12367,'C1',1,'3AC',80,'2023-05-28 14:04:45',66),(12367,'C2',0,'3AC',80,'2023-05-28 14:04:45',67),(12367,'S1',1,'General',80,'2023-05-28 14:04:45',68),(12367,'S2',0,'General',80,'2023-05-28 14:04:45',69),(12367,'S3',0,'General',80,'2023-05-28 14:04:45',70),(12367,'S4',0,'General',80,'2023-05-28 14:04:45',71),(12367,'S5',0,'General',80,'2023-05-28 14:04:45',72),(12367,'S6',0,'General',80,'2023-05-28 14:04:45',73),(12489,'A1',1,'1AC',80,'2023-05-28 14:04:45',74),(12489,'B1',1,'2AC',80,'2023-05-28 14:04:45',75),(12489,'C1',1,'3AC',80,'2023-05-28 14:04:45',76),(12489,'C2',0,'3AC',80,'2023-05-28 14:04:45',77),(12489,'S1',1,'General',80,'2023-05-28 14:04:45',78),(12489,'S2',0,'General',80,'2023-05-28 14:04:45',79),(12489,'S3',0,'General',80,'2023-05-28 14:04:45',80),(12489,'S4',0,'General',80,'2023-05-28 14:04:45',81),(12489,'S5',0,'General',80,'2023-05-28 14:04:45',82),(12489,'S6',0,'General',80,'2023-05-28 14:04:45',83),(12835,'A1',1,'1AC',80,'2023-05-28 14:04:45',84),(12835,'B1',1,'2AC',80,'2023-05-28 14:04:45',85),(12835,'C1',1,'3AC',80,'2023-05-28 14:04:45',86),(12835,'C2',0,'3AC',80,'2023-05-28 14:04:45',87),(12835,'S1',1,'General',80,'2023-05-28 14:04:45',88),(12835,'S2',0,'General',80,'2023-05-28 14:04:45',89),(12835,'S3',0,'General',80,'2023-05-28 14:04:45',90),(12835,'S4',0,'General',80,'2023-05-28 14:04:45',91),(12835,'S5',0,'General',80,'2023-05-28 14:04:45',92),(12835,'S6',0,'General',80,'2023-05-28 14:04:45',93),(12945,'A1',1,'1AC',80,'2023-05-28 14:04:45',94),(12945,'B1',1,'2AC',80,'2023-05-28 14:04:45',95),(12945,'C1',1,'3AC',80,'2023-05-28 14:04:45',96),(12945,'C2',0,'3AC',80,'2023-05-28 14:04:45',97),(12945,'S1',1,'General',80,'2023-05-28 14:04:45',98),(12945,'S2',0,'General',80,'2023-05-28 14:04:45',99),(12945,'S3',0,'General',80,'2023-05-28 14:04:45',100),(12945,'S4',0,'General',80,'2023-05-28 14:04:45',101),(12945,'S5',0,'General',80,'2023-05-28 14:04:45',102),(12945,'S6',0,'General',80,'2023-05-28 14:04:45',103),(12367,'A1',1,'1AC',80,'2023-05-29 14:04:49',127),(12367,'B1',1,'2AC',80,'2023-05-29 14:04:49',128),(12367,'C1',1,'3AC',80,'2023-05-29 14:04:49',129),(12367,'C2',0,'3AC',80,'2023-05-29 14:04:49',130),(12367,'S1',1,'General',80,'2023-05-29 14:04:49',131),(12367,'S2',0,'General',80,'2023-05-29 14:04:49',132),(12367,'S3',0,'General',80,'2023-05-29 14:04:49',133),(12367,'S4',0,'General',80,'2023-05-29 14:04:49',134),(12367,'S5',0,'General',80,'2023-05-29 14:04:49',135),(12367,'S6',0,'General',80,'2023-05-29 14:04:49',136),(12489,'A1',1,'1AC',80,'2023-05-29 14:04:49',137),(12489,'B1',1,'2AC',80,'2023-05-29 14:04:49',138),(12489,'C1',1,'3AC',80,'2023-05-29 14:04:49',139),(12489,'C2',0,'3AC',80,'2023-05-29 14:04:49',140),(12489,'S1',1,'General',80,'2023-05-29 14:04:49',141),(12489,'S2',0,'General',80,'2023-05-29 14:04:49',142),(12489,'S3',0,'General',80,'2023-05-29 14:04:49',143),(12489,'S4',0,'General',80,'2023-05-29 14:04:49',144),(12489,'S5',0,'General',80,'2023-05-29 14:04:49',145),(12489,'S6',0,'General',80,'2023-05-29 14:04:49',146),(12835,'A1',1,'1AC',80,'2023-05-29 14:04:49',147),(12835,'B1',1,'2AC',80,'2023-05-29 14:04:49',148),(12835,'C1',1,'3AC',80,'2023-05-29 14:04:49',149),(12835,'C2',0,'3AC',80,'2023-05-29 14:04:49',150),(12835,'S1',1,'General',80,'2023-05-29 14:04:49',151),(12835,'S2',0,'General',80,'2023-05-29 14:04:49',152),(12835,'S3',0,'General',80,'2023-05-29 14:04:49',153),(12835,'S4',0,'General',80,'2023-05-29 14:04:49',154),(12835,'S5',0,'General',80,'2023-05-29 14:04:49',155),(12835,'S6',0,'General',80,'2023-05-29 14:04:49',156),(12945,'A1',1,'1AC',80,'2023-05-29 14:04:49',157),(12945,'B1',1,'2AC',80,'2023-05-29 14:04:49',158),(12945,'C1',1,'3AC',80,'2023-05-29 14:04:49',159),(12945,'C2',0,'3AC',80,'2023-05-29 14:04:49',160),(12945,'S1',1,'General',80,'2023-05-29 14:04:49',161),(12945,'S2',0,'General',80,'2023-05-29 14:04:49',162),(12945,'S3',0,'General',80,'2023-05-29 14:04:49',163),(12945,'S4',0,'General',80,'2023-05-29 14:04:49',164),(12945,'S5',0,'General',80,'2023-05-29 14:04:49',165),(12945,'S6',0,'General',80,'2023-05-29 14:04:49',166),(12367,'A1',1,'1AC',80,'2023-05-30 14:05:16',190),(12367,'B1',1,'2AC',80,'2023-05-30 14:05:16',191),(12367,'C1',1,'3AC',80,'2023-05-30 14:05:16',192),(12367,'C2',0,'3AC',80,'2023-05-30 14:05:16',193),(12367,'S1',1,'General',80,'2023-05-30 14:05:16',194),(12367,'S2',0,'General',80,'2023-05-30 14:05:16',195),(12367,'S3',0,'General',80,'2023-05-30 14:05:16',196),(12367,'S4',0,'General',80,'2023-05-30 14:05:16',197),(12367,'S5',0,'General',80,'2023-05-30 14:05:16',198),(12367,'S6',0,'General',80,'2023-05-30 14:05:16',199),(12489,'A1',1,'1AC',80,'2023-05-30 14:05:16',200),(12489,'B1',1,'2AC',80,'2023-05-30 14:05:16',201),(12489,'C1',1,'3AC',80,'2023-05-30 14:05:16',202),(12489,'C2',0,'3AC',80,'2023-05-30 14:05:16',203),(12489,'S1',1,'General',80,'2023-05-30 14:05:16',204),(12489,'S2',0,'General',80,'2023-05-30 14:05:16',205),(12489,'S3',0,'General',80,'2023-05-30 14:05:16',206),(12489,'S4',0,'General',80,'2023-05-30 14:05:16',207),(12489,'S5',0,'General',80,'2023-05-30 14:05:16',208),(12489,'S6',0,'General',80,'2023-05-30 14:05:16',209),(12835,'A1',1,'1AC',80,'2023-05-30 14:05:16',210),(12835,'B1',1,'2AC',80,'2023-05-30 14:05:16',211),(12835,'C1',1,'3AC',80,'2023-05-30 14:05:16',212),(12835,'C2',0,'3AC',80,'2023-05-30 14:05:16',213),(12835,'S1',1,'General',80,'2023-05-30 14:05:16',214),(12835,'S2',0,'General',80,'2023-05-30 14:05:16',215),(12835,'S3',0,'General',80,'2023-05-30 14:05:16',216),(12835,'S4',0,'General',80,'2023-05-30 14:05:16',217),(12835,'S5',0,'General',80,'2023-05-30 14:05:16',218),(12835,'S6',0,'General',80,'2023-05-30 14:05:16',219),(12945,'A1',1,'1AC',80,'2023-05-30 14:05:16',220),(12945,'B1',1,'2AC',80,'2023-05-30 14:05:16',221),(12945,'C1',1,'3AC',80,'2023-05-30 14:05:16',222),(12945,'C2',0,'3AC',80,'2023-05-30 14:05:16',223),(12945,'S1',1,'General',80,'2023-05-30 14:05:16',224),(12945,'S2',0,'General',80,'2023-05-30 14:05:16',225),(12945,'S3',0,'General',80,'2023-05-30 14:05:16',226),(12945,'S4',0,'General',80,'2023-05-30 14:05:16',227),(12945,'S5',0,'General',80,'2023-05-30 14:05:16',228),(12945,'S6',0,'General',80,'2023-05-30 14:05:16',229),(12367,'A1',1,'1AC',80,'2023-05-31 14:05:19',253),(12367,'B1',1,'2AC',80,'2023-05-31 14:05:19',254),(12367,'C1',1,'3AC',80,'2023-05-31 14:05:19',255),(12367,'C2',0,'3AC',80,'2023-05-31 14:05:19',256),(12367,'S1',1,'General',80,'2023-05-31 14:05:19',257),(12367,'S2',0,'General',80,'2023-05-31 14:05:19',258),(12367,'S3',0,'General',80,'2023-05-31 14:05:19',259),(12367,'S4',0,'General',80,'2023-05-31 14:05:19',260),(12367,'S5',0,'General',80,'2023-05-31 14:05:19',261),(12367,'S6',0,'General',80,'2023-05-31 14:05:19',262),(12489,'A1',1,'1AC',80,'2023-05-31 14:05:19',263),(12489,'B1',1,'2AC',80,'2023-05-31 14:05:19',264),(12489,'C1',1,'3AC',80,'2023-05-31 14:05:19',265),(12489,'C2',0,'3AC',80,'2023-05-31 14:05:19',266),(12489,'S1',1,'General',80,'2023-05-31 14:05:19',267),(12489,'S2',0,'General',80,'2023-05-31 14:05:19',268),(12489,'S3',0,'General',80,'2023-05-31 14:05:19',269),(12489,'S4',0,'General',80,'2023-05-31 14:05:19',270),(12489,'S5',0,'General',80,'2023-05-31 14:05:19',271),(12489,'S6',0,'General',80,'2023-05-31 14:05:19',272),(12835,'A1',1,'1AC',80,'2023-05-31 14:05:19',273),(12835,'B1',1,'2AC',80,'2023-05-31 14:05:19',274),(12835,'C1',1,'3AC',80,'2023-05-31 14:05:19',275),(12835,'C2',0,'3AC',80,'2023-05-31 14:05:19',276),(12835,'S1',1,'General',80,'2023-05-31 14:05:19',277),(12835,'S2',0,'General',80,'2023-05-31 14:05:19',278),(12835,'S3',0,'General',80,'2023-05-31 14:05:19',279),(12835,'S4',0,'General',80,'2023-05-31 14:05:19',280),(12835,'S5',0,'General',80,'2023-05-31 14:05:19',281),(12835,'S6',0,'General',80,'2023-05-31 14:05:19',282),(12945,'A1',1,'1AC',80,'2023-05-31 14:05:19',283),(12945,'B1',1,'2AC',80,'2023-05-31 14:05:19',284),(12945,'C1',1,'3AC',80,'2023-05-31 14:05:19',285),(12945,'C2',0,'3AC',80,'2023-05-31 14:05:19',286),(12945,'S1',1,'General',80,'2023-05-31 14:05:19',287),(12945,'S2',0,'General',80,'2023-05-31 14:05:19',288),(12945,'S3',0,'General',80,'2023-05-31 14:05:19',289),(12945,'S4',0,'General',80,'2023-05-31 14:05:19',290),(12945,'S5',0,'General',80,'2023-05-31 14:05:19',291),(12945,'S6',0,'General',80,'2023-05-31 14:05:19',292),(12367,'A1',1,'1AC',80,'2023-06-01 14:05:21',316),(12367,'B1',1,'2AC',80,'2023-06-01 14:05:21',317),(12367,'C1',1,'3AC',80,'2023-06-01 14:05:21',318),(12367,'C2',0,'3AC',80,'2023-06-01 14:05:21',319),(12367,'S1',1,'General',80,'2023-06-01 14:05:21',320),(12367,'S2',0,'General',80,'2023-06-01 14:05:21',321),(12367,'S3',0,'General',80,'2023-06-01 14:05:21',322),(12367,'S4',0,'General',80,'2023-06-01 14:05:21',323),(12367,'S5',0,'General',80,'2023-06-01 14:05:21',324),(12367,'S6',0,'General',80,'2023-06-01 14:05:21',325),(12489,'A1',1,'1AC',80,'2023-06-01 14:05:21',326),(12489,'B1',1,'2AC',80,'2023-06-01 14:05:21',327),(12489,'C1',1,'3AC',80,'2023-06-01 14:05:21',328),(12489,'C2',0,'3AC',80,'2023-06-01 14:05:21',329),(12489,'S1',1,'General',80,'2023-06-01 14:05:21',330),(12489,'S2',0,'General',80,'2023-06-01 14:05:21',331),(12489,'S3',0,'General',80,'2023-06-01 14:05:21',332),(12489,'S4',0,'General',80,'2023-06-01 14:05:21',333),(12489,'S5',0,'General',80,'2023-06-01 14:05:21',334),(12489,'S6',0,'General',80,'2023-06-01 14:05:21',335),(12835,'A1',1,'1AC',80,'2023-06-01 14:05:21',336),(12835,'B1',1,'2AC',80,'2023-06-01 14:05:21',337),(12835,'C1',1,'3AC',80,'2023-06-01 14:05:21',338),(12835,'C2',0,'3AC',80,'2023-06-01 14:05:21',339),(12835,'S1',1,'General',80,'2023-06-01 14:05:21',340),(12835,'S2',0,'General',80,'2023-06-01 14:05:21',341),(12835,'S3',0,'General',80,'2023-06-01 14:05:21',342),(12835,'S4',0,'General',80,'2023-06-01 14:05:21',343),(12835,'S5',0,'General',80,'2023-06-01 14:05:21',344),(12835,'S6',0,'General',80,'2023-06-01 14:05:21',345),(12945,'A1',1,'1AC',80,'2023-06-01 14:05:21',346),(12945,'B1',1,'2AC',80,'2023-06-01 14:05:21',347),(12945,'C1',1,'3AC',80,'2023-06-01 14:05:21',348),(12945,'C2',0,'3AC',80,'2023-06-01 14:05:21',349),(12945,'S1',1,'General',80,'2023-06-01 14:05:21',350),(12945,'S2',0,'General',80,'2023-06-01 14:05:21',351),(12945,'S3',0,'General',80,'2023-06-01 14:05:21',352),(12945,'S4',0,'General',80,'2023-06-01 14:05:21',353),(12945,'S5',0,'General',80,'2023-06-01 14:05:21',354),(12945,'S6',0,'General',80,'2023-06-01 14:05:21',355),(12367,'A1',1,'1AC',80,'2023-06-02 14:05:22',379),(12367,'B1',1,'2AC',80,'2023-06-02 14:05:22',380),(12367,'C1',1,'3AC',80,'2023-06-02 14:05:22',381),(12367,'C2',0,'3AC',80,'2023-06-02 14:05:22',382),(12367,'S1',1,'General',80,'2023-06-02 14:05:22',383),(12367,'S2',0,'General',80,'2023-06-02 14:05:22',384),(12367,'S3',0,'General',80,'2023-06-02 14:05:22',385),(12367,'S4',0,'General',80,'2023-06-02 14:05:22',386),(12367,'S5',0,'General',80,'2023-06-02 14:05:22',387),(12367,'S6',0,'General',80,'2023-06-02 14:05:22',388),(12489,'A1',1,'1AC',80,'2023-06-02 14:05:22',389),(12489,'B1',1,'2AC',80,'2023-06-02 14:05:22',390),(12489,'C1',1,'3AC',80,'2023-06-02 14:05:22',391),(12489,'C2',0,'3AC',80,'2023-06-02 14:05:22',392),(12489,'S1',1,'General',80,'2023-06-02 14:05:22',393),(12489,'S2',0,'General',80,'2023-06-02 14:05:22',394),(12489,'S3',0,'General',80,'2023-06-02 14:05:22',395),(12489,'S4',0,'General',80,'2023-06-02 14:05:22',396),(12489,'S5',0,'General',80,'2023-06-02 14:05:22',397),(12489,'S6',0,'General',80,'2023-06-02 14:05:22',398),(12835,'A1',1,'1AC',80,'2023-06-02 14:05:22',399),(12835,'B1',1,'2AC',80,'2023-06-02 14:05:22',400),(12835,'C1',1,'3AC',80,'2023-06-02 14:05:22',401),(12835,'C2',0,'3AC',80,'2023-06-02 14:05:22',402),(12835,'S1',1,'General',80,'2023-06-02 14:05:22',403),(12835,'S2',0,'General',80,'2023-06-02 14:05:22',404),(12835,'S3',0,'General',80,'2023-06-02 14:05:22',405),(12835,'S4',0,'General',80,'2023-06-02 14:05:22',406),(12835,'S5',0,'General',80,'2023-06-02 14:05:22',407),(12835,'S6',0,'General',80,'2023-06-02 14:05:22',408),(12945,'A1',1,'1AC',80,'2023-06-02 14:05:22',409),(12945,'B1',1,'2AC',80,'2023-06-02 14:05:22',410),(12945,'C1',1,'3AC',80,'2023-06-02 14:05:22',411),(12945,'C2',0,'3AC',80,'2023-06-02 14:05:22',412),(12945,'S1',1,'General',80,'2023-06-02 14:05:22',413),(12945,'S2',0,'General',80,'2023-06-02 14:05:22',414),(12945,'S3',0,'General',80,'2023-06-02 14:05:22',415),(12945,'S4',0,'General',80,'2023-06-02 14:05:22',416),(12945,'S5',0,'General',80,'2023-06-02 14:05:22',417),(12945,'S6',0,'General',80,'2023-06-02 14:05:22',418),(12367,'A1',1,'1AC',80,'2023-06-03 14:05:25',442),(12367,'B1',1,'2AC',80,'2023-06-03 14:05:25',443),(12367,'C1',1,'3AC',80,'2023-06-03 14:05:25',444),(12367,'C2',0,'3AC',80,'2023-06-03 14:05:25',445),(12367,'S1',1,'General',80,'2023-06-03 14:05:25',446),(12367,'S2',0,'General',80,'2023-06-03 14:05:25',447),(12367,'S3',0,'General',80,'2023-06-03 14:05:25',448),(12367,'S4',0,'General',80,'2023-06-03 14:05:25',449),(12367,'S5',0,'General',80,'2023-06-03 14:05:25',450),(12367,'S6',0,'General',80,'2023-06-03 14:05:25',451),(12489,'A1',1,'1AC',80,'2023-06-03 14:05:25',452),(12489,'B1',1,'2AC',80,'2023-06-03 14:05:25',453),(12489,'C1',1,'3AC',80,'2023-06-03 14:05:25',454),(12489,'C2',0,'3AC',80,'2023-06-03 14:05:25',455),(12489,'S1',1,'General',80,'2023-06-03 14:05:25',456),(12489,'S2',0,'General',80,'2023-06-03 14:05:25',457),(12489,'S3',0,'General',80,'2023-06-03 14:05:25',458),(12489,'S4',0,'General',80,'2023-06-03 14:05:25',459),(12489,'S5',0,'General',80,'2023-06-03 14:05:25',460),(12489,'S6',0,'General',80,'2023-06-03 14:05:25',461),(12835,'A1',1,'1AC',80,'2023-06-03 14:05:25',462),(12835,'B1',1,'2AC',80,'2023-06-03 14:05:25',463),(12835,'C1',1,'3AC',80,'2023-06-03 14:05:25',464),(12835,'C2',0,'3AC',80,'2023-06-03 14:05:25',465),(12835,'S1',1,'General',80,'2023-06-03 14:05:25',466),(12835,'S2',0,'General',80,'2023-06-03 14:05:25',467),(12835,'S3',0,'General',80,'2023-06-03 14:05:25',468),(12835,'S4',0,'General',80,'2023-06-03 14:05:25',469),(12835,'S5',0,'General',80,'2023-06-03 14:05:25',470),(12835,'S6',0,'General',80,'2023-06-03 14:05:25',471),(12945,'A1',1,'1AC',80,'2023-06-03 14:05:25',472),(12945,'B1',1,'2AC',80,'2023-06-03 14:05:25',473),(12945,'C1',1,'3AC',80,'2023-06-03 14:05:25',474),(12945,'C2',0,'3AC',80,'2023-06-03 14:05:25',475),(12945,'S1',1,'General',80,'2023-06-03 14:05:25',476),(12945,'S2',0,'General',80,'2023-06-03 14:05:25',477),(12945,'S3',0,'General',80,'2023-06-03 14:05:25',478),(12945,'S4',0,'General',80,'2023-06-03 14:05:25',479),(12945,'S5',0,'General',80,'2023-06-03 14:05:25',480),(12945,'S6',0,'General',80,'2023-06-03 14:05:25',481),(12367,'A1',1,'1AC',80,'2023-06-04 14:05:27',505),(12367,'B1',1,'2AC',80,'2023-06-04 14:05:27',506),(12367,'C1',1,'3AC',80,'2023-06-04 14:05:27',507),(12367,'C2',0,'3AC',80,'2023-06-04 14:05:27',508),(12367,'S1',1,'General',80,'2023-06-04 14:05:27',509),(12367,'S2',0,'General',80,'2023-06-04 14:05:27',510),(12367,'S3',0,'General',80,'2023-06-04 14:05:27',511),(12367,'S4',0,'General',80,'2023-06-04 14:05:27',512),(12367,'S5',0,'General',80,'2023-06-04 14:05:27',513),(12367,'S6',0,'General',80,'2023-06-04 14:05:27',514),(12489,'A1',1,'1AC',80,'2023-06-04 14:05:27',515),(12489,'B1',1,'2AC',80,'2023-06-04 14:05:27',516),(12489,'C1',1,'3AC',80,'2023-06-04 14:05:27',517),(12489,'C2',0,'3AC',80,'2023-06-04 14:05:27',518),(12489,'S1',1,'General',80,'2023-06-04 14:05:27',519),(12489,'S2',0,'General',80,'2023-06-04 14:05:27',520),(12489,'S3',0,'General',80,'2023-06-04 14:05:27',521),(12489,'S4',0,'General',80,'2023-06-04 14:05:27',522),(12489,'S5',0,'General',80,'2023-06-04 14:05:27',523),(12489,'S6',0,'General',80,'2023-06-04 14:05:27',524),(12835,'A1',1,'1AC',80,'2023-06-04 14:05:27',525),(12835,'B1',1,'2AC',80,'2023-06-04 14:05:27',526),(12835,'C1',1,'3AC',80,'2023-06-04 14:05:27',527),(12835,'C2',0,'3AC',80,'2023-06-04 14:05:27',528),(12835,'S1',1,'General',80,'2023-06-04 14:05:27',529),(12835,'S2',0,'General',80,'2023-06-04 14:05:27',530),(12835,'S3',0,'General',80,'2023-06-04 14:05:27',531),(12835,'S4',0,'General',80,'2023-06-04 14:05:27',532),(12835,'S5',0,'General',80,'2023-06-04 14:05:27',533),(12835,'S6',0,'General',80,'2023-06-04 14:05:27',534),(12945,'A1',1,'1AC',80,'2023-06-04 14:05:27',535),(12945,'B1',1,'2AC',80,'2023-06-04 14:05:27',536),(12945,'C1',1,'3AC',80,'2023-06-04 14:05:27',537),(12945,'C2',0,'3AC',80,'2023-06-04 14:05:27',538),(12945,'S1',1,'General',80,'2023-06-04 14:05:27',539),(12945,'S2',0,'General',80,'2023-06-04 14:05:27',540),(12945,'S3',0,'General',80,'2023-06-04 14:05:27',541),(12945,'S4',0,'General',80,'2023-06-04 14:05:27',542),(12945,'S5',0,'General',80,'2023-06-04 14:05:27',543),(12945,'S6',0,'General',80,'2023-06-04 14:05:27',544),(12367,'A1',1,'1AC',80,'2023-06-04 00:00:00',568),(12367,'B1',1,'2AC',80,'2023-06-04 00:00:00',569),(12367,'C1',1,'3AC',80,'2023-06-04 00:00:00',570),(12367,'C2',0,'3AC',80,'2023-06-04 00:00:00',571),(12367,'S1',1,'General',80,'2023-06-04 00:00:00',572),(12367,'S2',0,'General',80,'2023-06-04 00:00:00',573),(12367,'S3',0,'General',80,'2023-06-04 00:00:00',574),(12367,'S4',0,'General',80,'2023-06-04 00:00:00',575),(12367,'S5',0,'General',80,'2023-06-04 00:00:00',576),(12367,'S6',0,'General',80,'2023-06-04 00:00:00',577),(12489,'A1',1,'1AC',80,'2023-06-04 00:00:00',578),(12489,'B1',1,'2AC',80,'2023-06-04 00:00:00',579),(12489,'C1',1,'3AC',80,'2023-06-04 00:00:00',580),(12489,'C2',0,'3AC',80,'2023-06-04 00:00:00',581),(12489,'S1',1,'General',80,'2023-06-04 00:00:00',582),(12489,'S2',0,'General',80,'2023-06-04 00:00:00',583),(12489,'S3',0,'General',80,'2023-06-04 00:00:00',584),(12489,'S4',0,'General',80,'2023-06-04 00:00:00',585),(12489,'S5',0,'General',80,'2023-06-04 00:00:00',586),(12489,'S6',0,'General',80,'2023-06-04 00:00:00',587),(12835,'A1',1,'1AC',80,'2023-06-04 00:00:00',588),(12835,'B1',1,'2AC',80,'2023-06-04 00:00:00',589),(12835,'C1',1,'3AC',80,'2023-06-04 00:00:00',590),(12835,'C2',0,'3AC',80,'2023-06-04 00:00:00',591),(12835,'S1',1,'General',80,'2023-06-04 00:00:00',592),(12835,'S2',0,'General',80,'2023-06-04 00:00:00',593),(12835,'S3',0,'General',80,'2023-06-04 00:00:00',594),(12835,'S4',0,'General',80,'2023-06-04 00:00:00',595),(12835,'S5',0,'General',80,'2023-06-04 00:00:00',596),(12835,'S6',0,'General',80,'2023-06-04 00:00:00',597),(12945,'A1',1,'1AC',80,'2023-06-04 00:00:00',598),(12945,'B1',1,'2AC',80,'2023-06-04 00:00:00',599),(12945,'C1',1,'3AC',80,'2023-06-04 00:00:00',600),(12945,'C2',0,'3AC',80,'2023-06-04 00:00:00',601),(12945,'S1',1,'General',80,'2023-06-04 00:00:00',602),(12945,'S2',0,'General',80,'2023-06-04 00:00:00',603),(12945,'S3',0,'General',80,'2023-06-04 00:00:00',604),(12945,'S4',0,'General',80,'2023-06-04 00:00:00',605),(12945,'S5',0,'General',80,'2023-06-04 00:00:00',606),(12945,'S6',0,'General',80,'2023-06-04 00:00:00',607),(12367,'A1',1,'1AC',80,'2023-06-04 00:00:00',694),(12367,'B1',1,'2AC',80,'2023-06-04 00:00:00',695),(12367,'C1',1,'3AC',80,'2023-06-04 00:00:00',696),(12367,'C2',0,'3AC',80,'2023-06-04 00:00:00',697),(12367,'S1',1,'General',80,'2023-06-04 00:00:00',698),(12367,'S2',0,'General',80,'2023-06-04 00:00:00',699),(12367,'S3',0,'General',80,'2023-06-04 00:00:00',700),(12367,'S4',0,'General',80,'2023-06-04 00:00:00',701),(12367,'S5',0,'General',80,'2023-06-04 00:00:00',702),(12367,'S6',0,'General',80,'2023-06-04 00:00:00',703),(12489,'A1',1,'1AC',80,'2023-06-04 00:00:00',704),(12489,'B1',1,'2AC',80,'2023-06-04 00:00:00',705),(12489,'C1',1,'3AC',80,'2023-06-04 00:00:00',706),(12489,'C2',0,'3AC',80,'2023-06-04 00:00:00',707),(12489,'S1',1,'General',80,'2023-06-04 00:00:00',708),(12489,'S2',0,'General',80,'2023-06-04 00:00:00',709),(12489,'S3',0,'General',80,'2023-06-04 00:00:00',710),(12489,'S4',0,'General',80,'2023-06-04 00:00:00',711),(12489,'S5',0,'General',80,'2023-06-04 00:00:00',712),(12489,'S6',0,'General',80,'2023-06-04 00:00:00',713),(12835,'A1',1,'1AC',80,'2023-06-04 00:00:00',714),(12835,'B1',1,'2AC',80,'2023-06-04 00:00:00',715),(12835,'C1',1,'3AC',80,'2023-06-04 00:00:00',716),(12835,'C2',0,'3AC',80,'2023-06-04 00:00:00',717),(12835,'S1',1,'General',80,'2023-06-04 00:00:00',718),(12835,'S2',0,'General',80,'2023-06-04 00:00:00',719),(12835,'S3',0,'General',80,'2023-06-04 00:00:00',720),(12835,'S4',0,'General',80,'2023-06-04 00:00:00',721),(12835,'S5',0,'General',80,'2023-06-04 00:00:00',722),(12835,'S6',0,'General',80,'2023-06-04 00:00:00',723),(12945,'A1',1,'1AC',80,'2023-06-04 00:00:00',724),(12945,'B1',1,'2AC',80,'2023-06-04 00:00:00',725),(12945,'C1',1,'3AC',80,'2023-06-04 00:00:00',726),(12945,'C2',0,'3AC',80,'2023-06-04 00:00:00',727),(12945,'S1',1,'General',80,'2023-06-04 00:00:00',728),(12945,'S2',0,'General',80,'2023-06-04 00:00:00',729),(12945,'S3',0,'General',80,'2023-06-04 00:00:00',730),(12945,'S4',0,'General',80,'2023-06-04 00:00:00',731),(12945,'S5',0,'General',80,'2023-06-04 00:00:00',732),(12945,'S6',0,'General',80,'2023-06-04 00:00:00',733);
/*!40000 ALTER TABLE `liveseats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `randomtable`
--

DROP TABLE IF EXISTS `randomtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `randomtable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `randomtable`
--

LOCK TABLES `randomtable` WRITE;
/*!40000 ALTER TABLE `randomtable` DISABLE KEYS */;
INSERT INTO `randomtable` VALUES (1,46613),(2,23566),(3,57992),(4,29261),(5,52332),(8,73877),(9,22389),(10,60316),(11,44412),(12,31114),(15,0);
/*!40000 ALTER TABLE `randomtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `runningtrains`
--

DROP TABLE IF EXISTS `runningtrains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `runningtrains` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trnNo` int NOT NULL,
  `trnName` varchar(100) NOT NULL,
  `startSid` int NOT NULL,
  `endSid` int NOT NULL,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `srcDestDist` double DEFAULT NULL,
  `trainType` varchar(15) DEFAULT NULL,
  `runningDate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_runningDate_trnNo` (`runningDate`,`trnNo`),
  KEY `startSid` (`startSid`),
  KEY `endSid` (`endSid`),
  CONSTRAINT `RunningTrains_ibfk_1` FOREIGN KEY (`startSid`) REFERENCES `stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `RunningTrains_ibfk_2` FOREIGN KEY (`endSid`) REFERENCES `stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `runningtrains`
--

LOCK TABLES `runningtrains` WRITE;
/*!40000 ALTER TABLE `runningtrains` DISABLE KEYS */;
INSERT INTO `runningtrains` VALUES (1,12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express','2023-05-28'),(2,12945,'Jabalpur Superfast',32,33,'09:30:00','13:00:00',390,'Superfast','2023-05-28'),(4,12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express','2023-05-29'),(5,12945,'Jabalpur Superfast',32,33,'09:30:00','13:00:00',390,'Superfast','2023-05-29'),(7,12367,'Ujjain Intercity',34,31,'10:45:00','12:55:00',170,'Intercity','2023-05-30'),(8,12489,'Indore Rajdhani',36,33,'14:30:00','20:50:00',500,'Rajdhani','2023-05-30'),(9,12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express','2023-05-30'),(10,12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express','2023-05-31'),(11,12945,'Jabalpur Superfast',32,33,'09:30:00','13:00:00',390,'Superfast','2023-05-31'),(13,12367,'Ujjain Intercity',34,31,'10:45:00','12:55:00',170,'Intercity','2023-06-01'),(14,12489,'Indore Rajdhani',36,33,'14:30:00','20:50:00',500,'Rajdhani','2023-06-01'),(15,12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express','2023-06-01'),(16,12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express','2023-06-02'),(17,12945,'Jabalpur Superfast',32,33,'09:30:00','13:00:00',390,'Superfast','2023-06-02'),(19,12367,'Ujjain Intercity',34,31,'10:45:00','12:55:00',170,'Intercity','2023-06-03'),(20,12489,'Indore Rajdhani',36,33,'14:30:00','20:50:00',500,'Rajdhani','2023-06-03'),(21,12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express','2023-06-03'),(28,12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express','2023-06-05'),(29,12945,'Jabalpur Superfast',32,33,'09:30:00','13:00:00',390,'Superfast','2023-06-05'),(34,12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express','2023-06-04'),(35,12945,'Jabalpur Superfast',32,33,'09:30:00','13:00:00',390,'Superfast','2023-06-04');
/*!40000 ALTER TABLE `runningtrains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seats`
--

DROP TABLE IF EXISTS `seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seats` (
  `STrainNo` int NOT NULL,
  `BoogieNo` varchar(4) NOT NULL,
  `CurrentBogie` tinyint DEFAULT '0',
  `SeatType` varchar(15) DEFAULT NULL,
  `SeatAvlbl` int DEFAULT NULL,
  PRIMARY KEY (`STrainNo`,`BoogieNo`),
  UNIQUE KEY `uqSTrainNoBoogieNo` (`STrainNo`,`BoogieNo`),
  UNIQUE KEY `UC_Seats` (`STrainNo`,`BoogieNo`,`SeatType`),
  KEY `SeatIndex` (`STrainNo`,`BoogieNo`),
  CONSTRAINT `Seats_ibfk_1` FOREIGN KEY (`STrainNo`) REFERENCES `trains` (`trnNo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seats`
--

LOCK TABLES `seats` WRITE;
/*!40000 ALTER TABLE `seats` DISABLE KEYS */;
INSERT INTO `seats` VALUES (12367,'A1',1,'1AC',80),(12367,'B1',1,'2AC',80),(12367,'C1',1,'3AC',80),(12367,'C2',0,'3AC',80),(12367,'S1',1,'General',80),(12367,'S2',0,'General',80),(12367,'S3',0,'General',80),(12367,'S4',0,'General',80),(12367,'S5',0,'General',80),(12367,'S6',0,'General',80),(12489,'A1',1,'1AC',80),(12489,'B1',1,'2AC',80),(12489,'C1',1,'3AC',80),(12489,'C2',0,'3AC',80),(12489,'S1',1,'General',80),(12489,'S2',0,'General',80),(12489,'S3',0,'General',80),(12489,'S4',0,'General',80),(12489,'S5',0,'General',80),(12489,'S6',0,'General',80),(12835,'A1',1,'1AC',80),(12835,'B1',1,'2AC',80),(12835,'C1',1,'3AC',80),(12835,'C2',0,'3AC',80),(12835,'S1',1,'General',80),(12835,'S2',0,'General',80),(12835,'S3',0,'General',80),(12835,'S4',0,'General',80),(12835,'S5',0,'General',80),(12835,'S6',0,'General',80),(12945,'A1',1,'1AC',80),(12945,'B1',1,'2AC',80),(12945,'C1',1,'3AC',80),(12945,'C2',0,'3AC',80),(12945,'S1',1,'General',80),(12945,'S2',0,'General',80),(12945,'S3',0,'General',80),(12945,'S4',0,'General',80),(12945,'S5',0,'General',80),(12945,'S6',0,'General',80);
/*!40000 ALTER TABLE `seats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seatshistory`
--

DROP TABLE IF EXISTS `seatshistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seatshistory` (
  `STrainNo` int NOT NULL,
  `BoogieNo` varchar(4) NOT NULL,
  `CurrentBogie` tinyint DEFAULT '0',
  `SeatType` varchar(15) DEFAULT NULL,
  `SeatAvlbl` int DEFAULT NULL,
  `DepartedDate` datetime NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`STrainNo`,`BoogieNo`,`DepartedDate`),
  UNIQUE KEY `id` (`id`),
  CONSTRAINT `SeatsHistory_ibfk_1` FOREIGN KEY (`STrainNo`) REFERENCES `trains` (`trnNo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seatshistory`
--

LOCK TABLES `seatshistory` WRITE;
/*!40000 ALTER TABLE `seatshistory` DISABLE KEYS */;
INSERT INTO `seatshistory` VALUES (12367,'A1',1,'1AC',80,'2023-05-27 14:10:27',1),(12367,'B1',1,'2AC',80,'2023-05-27 14:10:27',2),(12367,'C1',1,'3AC',80,'2023-05-27 14:10:27',3),(12367,'C2',0,'3AC',80,'2023-05-27 14:10:27',4),(12367,'S1',1,'General',80,'2023-05-27 14:10:27',5),(12367,'S2',0,'General',80,'2023-05-27 14:10:27',6),(12367,'S3',0,'General',80,'2023-05-27 14:10:27',7),(12367,'S4',0,'General',80,'2023-05-27 14:10:27',8),(12367,'S5',0,'General',80,'2023-05-27 14:10:27',9),(12367,'S6',0,'General',80,'2023-05-27 14:10:27',10),(12489,'A1',1,'1AC',80,'2023-05-27 14:10:27',11),(12489,'B1',1,'2AC',80,'2023-05-27 14:10:27',12),(12489,'C1',1,'3AC',80,'2023-05-27 14:10:27',13),(12489,'C2',0,'3AC',80,'2023-05-27 14:10:27',14),(12489,'S1',1,'General',80,'2023-05-27 14:10:27',15),(12489,'S2',0,'General',80,'2023-05-27 14:10:27',16),(12489,'S3',0,'General',80,'2023-05-27 14:10:27',17),(12489,'S4',0,'General',80,'2023-05-27 14:10:27',18),(12489,'S5',0,'General',80,'2023-05-27 14:10:27',19),(12489,'S6',0,'General',80,'2023-05-27 14:10:27',20),(12835,'A1',1,'1AC',80,'2023-05-27 14:10:27',21),(12835,'B1',1,'2AC',80,'2023-05-27 14:10:27',22),(12835,'C1',1,'3AC',80,'2023-05-27 14:10:27',23),(12835,'C2',0,'3AC',80,'2023-05-27 14:10:27',24),(12835,'S1',1,'General',80,'2023-05-27 14:10:27',25),(12835,'S2',0,'General',80,'2023-05-27 14:10:27',26),(12835,'S3',0,'General',80,'2023-05-27 14:10:27',27),(12835,'S4',0,'General',80,'2023-05-27 14:10:27',28),(12835,'S5',0,'General',80,'2023-05-27 14:10:27',29),(12835,'S6',0,'General',80,'2023-05-27 14:10:27',30),(12945,'A1',1,'1AC',80,'2023-05-27 14:10:27',31),(12945,'B1',1,'2AC',80,'2023-05-27 14:10:27',32),(12945,'C1',1,'3AC',80,'2023-05-27 14:10:27',33),(12945,'C2',0,'3AC',80,'2023-05-27 14:10:27',34),(12945,'S1',1,'General',80,'2023-05-27 14:10:27',35),(12945,'S2',0,'General',80,'2023-05-27 14:10:27',36),(12945,'S3',0,'General',80,'2023-05-27 14:10:27',37),(12945,'S4',0,'General',80,'2023-05-27 14:10:27',38),(12945,'S5',0,'General',80,'2023-05-27 14:10:27',39),(12945,'S6',0,'General',80,'2023-05-27 14:10:27',40);
/*!40000 ALTER TABLE `seatshistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stations`
--

DROP TABLE IF EXISTS `stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stations` (
  `name` varchar(40) NOT NULL,
  `id` int NOT NULL,
  `code` varchar(5) DEFAULT NULL,
  `cityName` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StationsIndex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stations`
--

LOCK TABLES `stations` WRITE;
/*!40000 ALTER TABLE `stations` DISABLE KEYS */;
INSERT INTO `stations` VALUES ('Bhopal Junction',31,'BPL','Bhopal'),('Jabalpur Junction',32,'JBP','Jabalpur'),('Gwalior Junction',33,'GWL','Gwalior'),('Ujjain Junction',34,'UJN','Ujjain'),('Habibganj',35,'HBJ','Bhopal Habibganj'),('Indore Junction',36,'INDB','Indore');
/*!40000 ALTER TABLE `stations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trainroute`
--

DROP TABLE IF EXISTS `trainroute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trainroute` (
  `trainNo` int DEFAULT NULL,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `startSid` int DEFAULT NULL,
  `endSid` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainroute`
--

LOCK TABLES `trainroute` WRITE;
/*!40000 ALTER TABLE `trainroute` DISABLE KEYS */;
INSERT INTO `trainroute` VALUES (12835,'17:20:00','25:43:45',33,34),(12835,'17:20:00','30:52:30',33,36),(12945,'26:00:00','36:20:00',33,34),(12945,'26:00:00','42:40:00',33,36);
/*!40000 ALTER TABLE `trainroute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trains`
--

DROP TABLE IF EXISTS `trains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trains` (
  `trnNo` int NOT NULL,
  `trnName` varchar(100) NOT NULL,
  `startSid` int NOT NULL,
  `endSid` int NOT NULL,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `srcDestDist` double DEFAULT NULL,
  `trainType` varchar(15) DEFAULT NULL,
  `mon` tinyint(1) NOT NULL DEFAULT '0',
  `tue` tinyint(1) NOT NULL DEFAULT '0',
  `wed` tinyint(1) NOT NULL DEFAULT '0',
  `thu` tinyint(1) NOT NULL DEFAULT '0',
  `fri` tinyint(1) NOT NULL DEFAULT '0',
  `sat` tinyint(1) NOT NULL DEFAULT '0',
  `sun` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`trnNo`),
  KEY `startSid` (`startSid`),
  KEY `endSid` (`endSid`),
  KEY `trainIndex` (`trnNo`),
  CONSTRAINT `trains_ibfk_1` FOREIGN KEY (`startSid`) REFERENCES `stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `trains_ibfk_2` FOREIGN KEY (`endSid`) REFERENCES `stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trains`
--

LOCK TABLES `trains` WRITE;
/*!40000 ALTER TABLE `trains` DISABLE KEYS */;
INSERT INTO `trains` VALUES (12367,'Ujjain Intercity',34,31,'10:45:00','12:55:00',170,'Intercity',0,1,0,1,0,1,0),(12489,'Indore Rajdhani',36,33,'14:30:00','20:50:00',500,'Rajdhani',0,1,0,1,0,1,0),(12835,'Bhopal Express',31,33,'06:00:00','08:40:00',320,'Express',1,1,1,1,1,1,1),(12945,'Jabalpur Superfast',32,33,'09:30:00','13:00:00',390,'Superfast',1,0,1,0,1,0,1);
/*!40000 ALTER TABLE `trains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fName` varchar(20) DEFAULT NULL,
  `lName` varchar(20) DEFAULT NULL,
  `address` varchar(60) DEFAULT NULL,
  `mobile` varchar(15) NOT NULL,
  `eMail` varchar(30) NOT NULL,
  `gender` varchar(15) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `registerDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobile` (`mobile`),
  UNIQUE KEY `eMail` (`eMail`),
  UNIQUE KEY `userName` (`userName`),
  KEY `UsersIndex` (`id`),
  CONSTRAINT `check_password_length` CHECK ((length(`password`) >= 5)),
  CONSTRAINT `check_username_length` CHECK ((length(`userName`) >= 5)),
  CONSTRAINT `Users_chk_1` CHECK ((substr(`eMail`,-(4)) = _utf8mb4'.com'))
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Aarav','Patel','123 Street, Mumbai','9876543210','aarav@example.com','Male','aaravp','2023-05-27 12:26:55','password1'),(2,'Aditi','Sharma','456 Road, Delhi','9876543211','aditi@example.com','Female','aditis','2023-05-27 12:26:55','password2'),(3,'Aryan','Singh','789 Avenue, Bangalore','9876543212','aryan@example.com','Male','aryans','2023-05-27 12:26:55','password3'),(32,'Aakash','Gupta','10 Lane, Kolkata','9876543213','aakash@example.com','Male','aakashg','2023-05-27 12:27:52','password4'),(33,'Aishwarya','Reddy','20 Road, Hyderabad','9876543214','aishwarya@example.com','Female','aishwaryar','2023-05-27 12:27:52','password5'),(34,'Akshay','Verma','30 Street, Pune','9876543215','akshay@example.com','Male','akshayv','2023-05-27 12:27:52','password6'),(35,'Amrita','Chopra','40 Avenue, Chandigarh','9876543216','amrita@example.com','Female','amritac','2023-05-27 12:27:52','password7'),(36,'Aniket','Sinha','50 Road, Jaipur','9876543217','aniket@example.com','Male','anikets','2023-05-27 12:27:52','password8'),(37,'Anjali','Rajput','60 Lane, Ahmedabad','9876543218','anjali@example.com','Female','anjalir','2023-05-27 12:27:52','password9'),(38,'Arjun','Malhotra','70 Street, Lucknow','9876543219','arjun@example.com','Male','arjunm','2023-05-27 12:27:52','password10'),(39,'Bhavya','Mehta','80 Road, Chennai','9876543220','bhavya@example.com','Female','bhavyam','2023-05-27 12:27:52','password11'),(40,'Deepak','Sharma','90 Avenue, Surat','9876543221','deepak@example.com','Male','deepaks','2023-05-27 12:27:52','password12'),(41,'Divya','Joshi','100 Lane, Indore','9876543222','divya@example.com','Female','divyaj','2023-05-27 12:27:52','password13'),(42,'Amit','Kumar','789 First St, Kolkata','9876543412','amit.kumar@example.com','Male','amitkumar','2023-05-27 12:27:52','password789'),(43,'Priya','Patel','321 Second Ave, Bengaluru','9877543213','priya.patel@example.com','Female','priyapatel','2023-05-27 12:27:52','passwordabc'),(44,'Rahul','Sharma','654 Third St, Hyderabad','9876843214','rahul.sharma@example.com','Male','rahulsharma','2023-05-27 12:27:52','passworddef'),(45,'Anita','Verma','987 Fourth Ave, Chennai','9876043215','anita.verma@example.com','Female','anitaverma','2023-05-27 12:27:52','passwordxyz');
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

-- Dump completed on 2023-08-17 22:56:48
