-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: insurancepolicy
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fire` double NOT NULL,
  `gross_premium` double NOT NULL,
  `net_premium` double NOT NULL,
  `rsd` double NOT NULL,
  `tax` double NOT NULL,
  `policy_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK12cs3o8e3uekh5o6ssnr0ka8m` (`policy_id`),
  CONSTRAINT `FK12cs3o8e3uekh5o6ssnr0ka8m` FOREIGN KEY (`policy_id`) REFERENCES `policies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carbill`
--

DROP TABLE IF EXISTS `carbill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carbill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_rate` double NOT NULL,
  `gross_premium` double NOT NULL,
  `net_premium` double NOT NULL,
  `rsd` double NOT NULL,
  `tax` double NOT NULL,
  `car_policy_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKg08hwi1qqjnwi1erq4a30qbsq` (`car_policy_id`),
  CONSTRAINT `FKg08hwi1qqjnwi1erq4a30qbsq` FOREIGN KEY (`car_policy_id`) REFERENCES `cars` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carbill`
--

LOCK TABLES `carbill` WRITE;
/*!40000 ALTER TABLE `carbill` DISABLE KEYS */;
INSERT INTO `carbill` VALUES (1,10,151800,132000,10,0.15,1),(2,10,138000,120000,0,0.15,2);
/*!40000 ALTER TABLE `carbill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carmoneyreceipt`
--

DROP TABLE IF EXISTS `carmoneyreceipt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carmoneyreceipt` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class_of_insurance` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `issued_against` varchar(255) DEFAULT NULL,
  `issuing_office` varchar(255) DEFAULT NULL,
  `mode_of_payment` varchar(255) DEFAULT NULL,
  `car_bill_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKp2wfotjceru20pk54l14q3pvf` (`car_bill_id`),
  CONSTRAINT `FKp2wfotjceru20pk54l14q3pvf` FOREIGN KEY (`car_bill_id`) REFERENCES `carbill` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carmoneyreceipt`
--

LOCK TABLES `carmoneyreceipt` WRITE;
/*!40000 ALTER TABLE `carmoneyreceipt` DISABLE KEYS */;
/*!40000 ALTER TABLE `carmoneyreceipt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `construction` varchar(255) DEFAULT NULL,
  `coverage` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `interest_insured` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `owner` varchar(255) DEFAULT NULL,
  `period_from` date DEFAULT NULL,
  `period_to` date DEFAULT NULL,
  `policyholder` varchar(255) DEFAULT NULL,
  `stock_insured` varchar(255) DEFAULT NULL,
  `sum_insured` double NOT NULL,
  `used_as` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'Dhanmondi','Pubali Bank','2nd class','Engine Damage Only','2025-08-14','dfgsdg','dhanmondi, 27','Atiq','2025-08-14','2026-08-14','Atiq Car house','Engine',12000,'Shop-Cum-Godown Only'),(2,'Lalbag','Dhaka Bank','2nd class','Engine Damage Only','2025-08-14','jksdg','Lalbag,12','Reja','2025-08-14','2026-08-14','Reja Car shop','Engine',120000,'Shop Only');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moneyreceipts`
--

DROP TABLE IF EXISTS `moneyreceipts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moneyreceipts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class_of_insurance` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `issued_against` varchar(255) DEFAULT NULL,
  `issuing_office` varchar(255) DEFAULT NULL,
  `mode_of_payment` varchar(255) DEFAULT NULL,
  `bill_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1jcxl9ufxqcvqhvnx8q9ylh3v` (`bill_id`),
  CONSTRAINT `FK1jcxl9ufxqcvqhvnx8q9ylh3v` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moneyreceipts`
--

LOCK TABLES `moneyreceipts` WRITE;
/*!40000 ALTER TABLE `moneyreceipts` DISABLE KEYS */;
/*!40000 ALTER TABLE `moneyreceipts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policies`
--

DROP TABLE IF EXISTS `policies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `construction` varchar(255) DEFAULT NULL,
  `coverage` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `interest_insured` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `owner` varchar(255) DEFAULT NULL,
  `period_from` date DEFAULT NULL,
  `period_to` date DEFAULT NULL,
  `policyholder` varchar(255) DEFAULT NULL,
  `stock_insured` varchar(255) DEFAULT NULL,
  `sum_insured` double NOT NULL,
  `used_as` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policies`
--

LOCK TABLES `policies` WRITE;
/*!40000 ALTER TABLE `policies` DISABLE KEYS */;
/*!40000 ALTER TABLE `policies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_lock` bit(1) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','USER') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
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

-- Dump completed on 2025-08-14 13:56:28
