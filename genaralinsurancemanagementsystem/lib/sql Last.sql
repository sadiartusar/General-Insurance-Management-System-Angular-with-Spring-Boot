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
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `payment_date` datetime(6) DEFAULT NULL,
  `payment_mode` varchar(255) DEFAULT NULL,
  `car_policy_id` int DEFAULT NULL,
  `fire_policy_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKe4w4av1wrhanry7t6mxt42nou` (`user_id`),
  KEY `FK7itrmkyed65ltjrndu6ypp4d2` (`car_policy_id`),
  KEY `FKhp57t2qq2rb1k9rl691uh1y2e` (`fire_policy_id`),
  CONSTRAINT `FK7itrmkyed65ltjrndu6ypp4d2` FOREIGN KEY (`car_policy_id`) REFERENCES `cars` (`id`),
  CONSTRAINT `FKhp57t2qq2rb1k9rl691uh1y2e` FOREIGN KEY (`fire_policy_id`) REFERENCES `policies` (`id`),
  CONSTRAINT `FKnjuop33mo69pd79ctplkck40n` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,5600,'mdsadiar-10th-2015019057@dis.du.ac.bd','2025-09-20 12:18:56.837000',NULL,NULL,NULL,2);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `active` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_lock` bit(1) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','USER') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKc0r9atamxvbhjjvy5j8da1kam` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_tokens`
--

DROP TABLE IF EXISTS `admin_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_tokens` (
  `admin_id` int NOT NULL,
  `tokens_id` bigint NOT NULL,
  UNIQUE KEY `UK7t4xojp68de7ciays03f52rne` (`tokens_id`),
  KEY `FKp4hqr2d65c0vo26x1vwg9af6w` (`admin_id`),
  CONSTRAINT `FK1j8cshli7rkrcvi8rm6rvuxgh` FOREIGN KEY (`tokens_id`) REFERENCES `token` (`id`),
  CONSTRAINT `FKp4hqr2d65c0vo26x1vwg9af6w` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_tokens`
--

LOCK TABLES `admin_tokens` WRITE;
/*!40000 ALTER TABLE `admin_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_tokens` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (11,0.12,27600,24000,0,0.15,2),(12,0.13,17940,15600,0,0.15,3),(13,0.1,14950,13000,0,0.15,4),(14,0.15,51750,45000,0,0.15,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carbill`
--

LOCK TABLES `carbill` WRITE;
/*!40000 ALTER TABLE `carbill` DISABLE KEYS */;
INSERT INTO `carbill` VALUES (1,0.12,27600,24000,0,0.15,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carmoneyreceipt`
--

LOCK TABLES `carmoneyreceipt` WRITE;
/*!40000 ALTER TABLE `carmoneyreceipt` DISABLE KEYS */;
INSERT INTO `carmoneyreceipt` VALUES (1,'Car Insurance','2025-09-20','CAR POLICY NO.1','Dhaka','Cash',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'Khilgao','Islami Bank','1st class','Engine Damage Only','2025-09-20','Car Godown','Side of flyover, Mohakhali','Rohim','2025-09-20','2026-09-20','Rohim Car house','Engine',200000,'Godown Only'),(2,'Shamoli','Green Bank','1st class','Engine Damage Only','2025-09-20','Car Godown','Shisumela, Shamoli','Istiaq','2025-09-20','2026-09-20','Istiaq Car House','Engine',150000,'Godown Only'),(3,'Mohammadpur','Dhaka Bank','1st class','Engine Damage Only','2025-09-20','Car Godown','Mohammadpur','Parvej','2025-09-20','2026-09-20','Parvej Car House','Engine',180000,'Godown Only'),(4,'Dhanmondi, 27','Rupali Bank','2nd Class','Engine Damage only','2025-10-18','gghdsfx','Dhanmondi, 27','The Insured','2025-10-18','2026-10-18','Istiaq Car House','Engine',120000,'Godown Only');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_volt_account`
--

DROP TABLE IF EXISTS `company_volt_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_volt_account` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `balance` double DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_volt_account`
--

LOCK TABLES `company_volt_account` WRITE;
/*!40000 ALTER TABLE `company_volt_account` DISABLE KEYS */;
INSERT INTO `company_volt_account` VALUES (1,600,'Company Volt Account');
/*!40000 ALTER TABLE `company_volt_account` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moneyreceipts`
--

LOCK TABLES `moneyreceipts` WRITE;
/*!40000 ALTER TABLE `moneyreceipts` DISABLE KEYS */;
INSERT INTO `moneyreceipts` VALUES (6,'Fire Insurance','2025-09-20','POLICY NO. 2','Dhaka','Cash',11),(7,'Fire Insurance','2025-09-20','POLICY NO. 3','Dhaka','Cash',12),(8,'Fire Insurance','2025-09-20','POLICY NO. 4','Dhaka','Cash',13),(9,'Fire Insurance','2025-09-20','urtu','Dhaka','Cash',12);
/*!40000 ALTER TABLE `moneyreceipts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `payment_date` datetime(6) DEFAULT NULL,
  `payment_mode` varchar(255) DEFAULT NULL,
  `car_policy_id` int DEFAULT NULL,
  `fire_policy_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpl0o3b281p6x8vq88ky6kuxlv` (`car_policy_id`),
  KEY `FKco0wxsj2asrlkqqhcddns79xc` (`fire_policy_id`),
  KEY `FKj94hgy9v5fw1munb90tar2eje` (`user_id`),
  CONSTRAINT `FKco0wxsj2asrlkqqhcddns79xc` FOREIGN KEY (`fire_policy_id`) REFERENCES `policies` (`id`),
  CONSTRAINT `FKj94hgy9v5fw1munb90tar2eje` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKpl0o3b281p6x8vq88ky6kuxlv` FOREIGN KEY (`car_policy_id`) REFERENCES `cars` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,500,'2025-09-20 17:10:54.440000','ACCOUNT_TRANSFER',NULL,NULL,2),(2,100,'2025-10-20 16:48:43.995000','ACCOUNT_TRANSFER',NULL,NULL,2);
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policies`
--

LOCK TABLES `policies` WRITE;
/*!40000 ALTER TABLE `policies` DISABLE KEYS */;
INSERT INTO `policies` VALUES (1,'Dhanmondi','Islami Bank','1st class','Fire & Lightning Only','2025-09-20','Hotel & Resturent','Jigatola, Dhanmondi','Eiasin','2025-09-20','2026-09-20','Sultan Dains','Food',300000,'Shop Only'),(2,'Dhanmondi','Dhaka Bank','1st class','Fire & Lightning Only','2025-09-20','Hotel & Resturent','Jigatola, Dhanmondi','Sadiar','2025-09-20','2026-09-20','Kacci Vai','Food',200000,'Shop Only'),(3,'Dhanmondi','Islami Bank','1st class','Fire & Lightning Only','2025-09-20','Hotel & Resturent','Sankar, Dhanmondi','Atiq','2025-09-20','2026-09-20','Atiq Food House','Food',120000,'Shop Only'),(4,'Lalbag','Green Bank','1st class','Fire & Lightning Only','2025-09-20','Hotel & Resturent','Kellar Mor, Lalbag','Reja','2025-09-20','2026-09-20','Reja Food House','Food',130000,''),(5,'Mohammadpur','Green Bank','1st class','Fire & Lightning Only','2025-09-20','Hotel & Resturent','Bus Stand, Mohammadpur','Rakib','2025-09-20','2026-09-20','Rakib Food & Beverige','Food',120000,'Shop Only');
/*!40000 ALTER TABLE `policies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `is_log_out` bit(1) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `admin_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK126n2s3i5ofj65o6vd4v6eqm0` (`admin_id`),
  KEY `FKj8rfw4x0wjjyibfqq566j4qng` (`user_id`),
  CONSTRAINT `FK126n2s3i5ofj65o6vd4v6eqm0` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`),
  CONSTRAINT `FKj8rfw4x0wjjyibfqq566j4qng` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODM0OTEwNywiZXhwIjoxNzU4NDM1NTA3fQ.moPvQm01ACAzLpYK6bqpcsRDlbhlPpkRS6ySq2BtfQI',NULL,1),(2,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTgzNDkxMzYsImV4cCI6MTc1ODQzNTUzNn0.MIxYJlfAVnnAIbBsjQAwaTrtiXGOIyrPy4_1x7xRv50',NULL,2),(3,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTgzNDkxNTIsImV4cCI6MTc1ODQzNTU1Mn0.EwnjS_NyNVhC4nt9GPFj_Ot2YahOexzSTcOzdpPj8W0',NULL,2),(4,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODM0OTE4OSwiZXhwIjoxNzU4NDM1NTg5fQ.E7NFTh9TY1S17yrQdE5JsbpgAlG9QGwTe63tPx3NWag',NULL,1),(5,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODM1OTkzOSwiZXhwIjoxNzU4NDQ2MzM5fQ.y5djXUba5kP6CT58OgEW0JCzymDr0pRX4OUUlpKNUew',NULL,1),(6,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODM2MTA3NiwiZXhwIjoxNzU4NDQ3NDc2fQ.3MDiGRPcMGdulKl2YfpiniapPyNuEUNp7cZbrWM6lKU',NULL,1),(7,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTgzNzIyODIsImV4cCI6MTc1ODQ1ODY4Mn0.ey6xTPeNMsUQY2OFNldw1OeTNRcLPn-DBfr8d-aXwbY',NULL,2),(8,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODM3MjMzNSwiZXhwIjoxNzU4NDU4NzM1fQ.Qhyvg3gHKIaev17FlI5FGF2VwsZTaPNeEK_0caBp2yI',NULL,1),(9,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTc0MzU2MSwiZXhwIjoxNzU5ODI5OTYxfQ.97ElPErrk2LCYUJdIZKJ4-sYB73Fag259Kfb-4IXs1M',NULL,1),(10,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTgzMjQyNCwiZXhwIjoxNzU5OTE4ODI0fQ.geLCvC_U3_hAOsx8budQCxUAKAImNkfTD_tCiLNBfb0',NULL,1),(11,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTgzOTk4NSwiZXhwIjoxNzU5OTI2Mzg1fQ.8rmgkAPQVfyY3D2RtchKL7cdOa3-6WcyrN0zsWtAVD8',NULL,1),(12,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MDAxMywiZXhwIjoxNzU5OTI2NDEzfQ.cJ01uS0aZ18zsJJB6M_eYbhLNoSQ5apEr1EWe0Q2PdE',NULL,1),(13,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MDY5OCwiZXhwIjoxNzU5OTI3MDk4fQ.VknvsWsOtylB48VzaK5-HIuxnwwDe9slAMQtuPiipc4',NULL,1),(14,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MDkxNiwiZXhwIjoxNzU5OTI3MzE2fQ.acb2AdkHAE1sjhPTtrT8oyMg0-Ul1jPirefMEY3WbrU',NULL,1),(15,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MTIxOSwiZXhwIjoxNzU5OTI3NjE5fQ.zd3wl_XgumN9_Z7l0pKZibOnjSM_rHpIfy8o146dfo8',NULL,1),(16,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MTM0NSwiZXhwIjoxNzU5OTI3NzQ1fQ.ES5kIDSOkqL0QyV8xtWVxvCnyjlpr7-r6-aZDqavozI',NULL,1),(17,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MTQ2NywiZXhwIjoxNzU5OTI3ODY3fQ.fE_OZ41cVDMmdVD2oK_x4QWHwdBv7KGapyozB26wzBw',NULL,1),(18,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MTUwNCwiZXhwIjoxNzU5OTI3OTA0fQ.8A7HZYNzO42lbbGJoV9egBXgpb6DQPrUiTJEKCF_0qU',NULL,1),(19,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MTYxMSwiZXhwIjoxNzU5OTI4MDExfQ.VO8bsq8N02eXLFe4gAHu3AeTqGu5G3jW6Xc7TltsSGo',NULL,1),(20,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MTg5NSwiZXhwIjoxNzU5OTI4Mjk1fQ.gChNGQTwenEa90Uxrx0N-n9duNt_6-2-iQpx3ZK9OPc',NULL,1),(21,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MjEwNiwiZXhwIjoxNzU5OTI4NTA2fQ.JMjedeh35EH6GmiyScclT6R8PHYl_3Sdr_hm6zClNZA',NULL,1),(22,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTg0MjIxNCwiZXhwIjoxNzU5OTI4NjE0fQ.VBcmlpW9IWYL4eQNNUwA4ov_b6jdv2u4w7iZ-zC5nHI',NULL,1),(23,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTkxNzk4NiwiZXhwIjoxNzYwMDA0Mzg2fQ.qan29PWeaDa56YTtyTFNvwNr_Z9vWyhnJAtAQ4n522g',NULL,1),(24,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTkxODc0NywiZXhwIjoxNzYwMDA1MTQ3fQ.kQxIYLOiNa6FlsIEbJQAssRdps9SUkHeUvOO2Vbcdmk',NULL,1),(25,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTkyMDg4NCwiZXhwIjoxNzYwMDA3Mjg0fQ.5R7NnaaULBPiYMOXpcK_joqvZHiEenLPewMgrDabuFA',NULL,1),(26,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTkyNDEzOSwiZXhwIjoxNzYwMDEwNTM5fQ.lAo6RRpz_E_rTEV9D3qhVuUwCSFoFHYRSIU1y_w7QGM',NULL,1),(27,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTkyODA0MCwiZXhwIjoxNzYwMDE0NDQwfQ.V6z20zMXbW7dNCaT0uiKXXzvB-Q61DTRaslflDYa81Y',NULL,1),(28,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1OTkyOTU1NiwiZXhwIjoxNzYwMDE1OTU2fQ.EzFPLBlZysBgEvzytFM17RF26h1n2srwL72dr2RNyHs',NULL,1),(29,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwMjMxNCwiZXhwIjoxNzYwMDg4NzE0fQ.FUQRo78h3zpcmn-41igURMAq8lZJIY-mQeOEY4nfVHw',NULL,1),(30,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwMjU0OSwiZXhwIjoxNzYwMDg4OTQ5fQ.Hdonvt7-uQMy1ExyhmXXjGTC37SOlGeIh4VO2iVfDY8',NULL,1),(31,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwMjc1NCwiZXhwIjoxNzYwMDg5MTU0fQ.NsCl94g3IYoiyTXNUikREX5PmoFwG_VAoM4qOMCN9x4',NULL,1),(32,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwMjg4OSwiZXhwIjoxNzYwMDg5Mjg5fQ.5jACSzfNM1OSCabi_q1CNbfmQTfJ4AEDVbAWSlgf3KM',NULL,1),(33,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwMzA3NywiZXhwIjoxNzYwMDg5NDc3fQ.oXqPOyxdQqVTAJGdrGozCEdw00msbD7o4iMahH-OESk',NULL,1),(34,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwMzI1NiwiZXhwIjoxNzYwMDg5NjU2fQ.SAu26avoHy8MB7LUH2elPXoJQqZCRP_vKze613L7O3w',NULL,1),(35,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwMzc5MywiZXhwIjoxNzYwMDkwMTkzfQ.k8EVFVPQb86YlAg3PzwDSSZPzCr1ZM5_Izu6E4QmjRc',NULL,1),(36,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwNDIzNSwiZXhwIjoxNzYwMDkwNjM1fQ.XyjDmWF9J78UCQXyqJckstLOZckz7Zg6BeznbSfwTtc',NULL,1),(37,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwNjEzMywiZXhwIjoxNzYwMDkyNTMzfQ.V1vS0SuP9fSB0v_jHynmdPIkERCdNlzpMFMGemGJlec',NULL,1),(38,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDAwNzAwNywiZXhwIjoxNzYwMDkzNDA3fQ.Iytd2Nz8HzGGKJwCFXS6mze_kV09BE5CyZ4v53VrlVA',NULL,1),(39,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2MDE1OCwiZXhwIjoxNzYwMzQ2NTU4fQ.-4kZLJFQ3sKqi0M7LOcQOAYbEy3CZgO5s1aOowCwa2E',NULL,1),(40,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2Mjc0OSwiZXhwIjoxNzYwMzQ5MTQ5fQ.SC9vxTkoKhd5Ph7YX5vDASQbNT20HxOTopiE2JrwzPI',NULL,1),(41,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2Mjc2NCwiZXhwIjoxNzYwMzQ5MTY0fQ.ocmQ7jFDqiN3VAc5Mb5WB_-VN70u47Gy6JSFHUKWr14',NULL,1),(42,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2MzAyNiwiZXhwIjoxNzYwMzQ5NDI2fQ.2jhj4S1SI6FyrgD3dDLjdXiOaAZ6r2TtHDmBpxh6EqY',NULL,1),(43,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2NDE2NCwiZXhwIjoxNzYwMzUwNTY0fQ.Jy1niKH9p8Q6CIt1GIguEtyLGdBCn_olzhiGgeN5Vuk',NULL,1),(44,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjAyNjQ5MzEsImV4cCI6MTc2MDM1MTMzMX0.ml9QvY9gbh845zyAJiiWPRczV5427Mt6Tmpx06qolEg',NULL,2),(45,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjAyNjUwODcsImV4cCI6MTc2MDM1MTQ4N30.6tAR-bnKAQf_Q-7DFORMNrbpGLyaoAGq79OEELhML-g',NULL,2),(46,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjAyNjUyODEsImV4cCI6MTc2MDM1MTY4MX0.IaEMyTsRMWWh3PzTYAfXfWp30fzwWJ6AIx9Vq1mbMi0',NULL,2),(47,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjAyNjUzMTgsImV4cCI6MTc2MDM1MTcxOH0.XbmvaiD8TPk1IoPYUglCR9K24cSOxQDbuv1rb69us0E',NULL,2),(48,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2NTM0MiwiZXhwIjoxNzYwMzUxNzQyfQ.KlEAV7Q2ff5I1KxYDRIcBKDwzsxshHGYP91I1HPOAMY',NULL,1),(49,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2NTQyNCwiZXhwIjoxNzYwMzUxODI0fQ.ptzj1uraz6YKrB_AXIddmcSSPWQr1Lsh3BcagABR6g8',NULL,1),(50,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2NTQ0OCwiZXhwIjoxNzYwMzUxODQ4fQ.70aLHyi9G4X-KV9NSjMBr-5bm90WdVrNt9-IIQtgoSA',NULL,1),(51,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2NTU3NCwiZXhwIjoxNzYwMzUxOTc0fQ.Nnvwa1XXgBsd5fsOf4AF0jAmJdXyNuydlSlYStF6XRY',NULL,1),(52,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2NTY5MiwiZXhwIjoxNzYwMzUyMDkyfQ.IcCk12lj4i01IEpK95e4w5QCGPUyqm5l_CCra82bgr8',NULL,1),(53,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2NTc4MiwiZXhwIjoxNzYwMzUyMTgyfQ.uLUl1vAjSLV0GgGzCHlUBLrtQsSyvVS8o4hKLbZ2Sas',NULL,1),(54,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2NjA0MCwiZXhwIjoxNzYwMzUyNDQwfQ.TzRJQqVipl5fOtcHaT42K6ZxKeoo0zBXsVocA_RYZhg',NULL,1),(55,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2Njk4NywiZXhwIjoxNzYwMzUzMzg3fQ.A0xnFTHP6ff0kMercGPQmo3yegHvAwn_3KtB_4gcGsQ',NULL,1),(56,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2NzIzNiwiZXhwIjoxNzYwMzUzNjM2fQ.wc76bnV9X8JkyVps1oIjAvk8c7NyDI-g_CGjbiqhR18',NULL,1),(57,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI2OTE1MSwiZXhwIjoxNzYwMzU1NTUxfQ.ZwSiQXn-YksJntUBWjlNLVog2RRDvFOwdJVRqAQh9hY',NULL,1),(58,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI3MjY0NSwiZXhwIjoxNzYwMzU5MDQ1fQ.SoTT-8ezDAIeYp_07esd1PWhf6fTcxZ8P_z_bQug63w',NULL,1),(59,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI3MzAwNSwiZXhwIjoxNzYwMzU5NDA1fQ.3g3D3UOHsGny3R1asuGNoPHM3ucxoUOmx821WP820us',NULL,1),(60,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI3MzI3OCwiZXhwIjoxNzYwMzU5Njc4fQ.IpqVFkFmEivYy52APysYrBrWQhei2b4f79AdW_QO5iQ',NULL,1),(61,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI3MzU5NSwiZXhwIjoxNzYwMzU5OTk1fQ.F0PwrX2Row2UWp79lGVaLogbpmbTyVLG_pr31GoBtUw',NULL,1),(62,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDI3NDE1OCwiZXhwIjoxNzYwMzYwNTU4fQ.yyLpIEzqXiGvUn28OcIHdjYIFkRuAGBBtWz7nf0EUrw',NULL,1),(63,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDYwNjA5NSwiZXhwIjoxNzYwNjkyNDk1fQ.QzfUdJM8F4R7VdwmCZAuUAH0UI9g92-rqDjZJcm_k-8',NULL,1),(64,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDc4MTA0MCwiZXhwIjoxNzYwODY3NDQwfQ._KHQt4b-sOdRdCxnlNX7CzzvsplZFOvkjcJJ2ts00Z8',NULL,1),(65,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDc4MjA3OSwiZXhwIjoxNzYwODY4NDc5fQ.edUcL47Rqzkqi61pv4OnYD8orgx9VInx9oaH3FlwJB8',NULL,1),(66,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDc4MjQyMiwiZXhwIjoxNzYwODY4ODIyfQ.PulM5TZJxCB1tQc33TctWqOhyJAE4Nparb-_AzZLiAg',NULL,1),(67,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDc4MjcyMywiZXhwIjoxNzYwODY5MTIzfQ.hsAgypU5fbh3xkBc2i5CpQiYz0hMCsBf_Ypn_lnH9Uo',NULL,1),(68,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDg2NTA5NSwiZXhwIjoxNzYwOTUxNDk1fQ.kOnd8nQ7mTgcVrSVke-qtPqNUW862FtUD_RmfHQo0E0',NULL,1),(69,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDg2NjIxNiwiZXhwIjoxNzYwOTUyNjE2fQ.hHNamC15-Izy3YfwdbTmWWz2S0iH1Y9P60ocdhbLE_A',NULL,1),(70,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDg2Njc0NiwiZXhwIjoxNzYwOTUzMTQ2fQ.JlCTnfzILVxdPshFayJCHZc-Bi9R1iYyFxx4YwomJas',NULL,1),(71,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDg2Njk5NiwiZXhwIjoxNzYwOTUzMzk2fQ.dxgRWc5yCrn-IHfY1_8rcJtt1-3_FJPEm5jnvst3l08',NULL,1),(72,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDg2NzE3MCwiZXhwIjoxNzYwOTUzNTcwfQ.DRsSVD-QBTu2uw14eWMldghzizBuxF2t3iBiPnRTnAc',NULL,1),(73,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDg2NzQ4MSwiZXhwIjoxNzYwOTUzODgxfQ.-2XJoJGKh2WjtoYfm49tNTUoHsMSVdWX8WwBu51S2bY',NULL,1),(74,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDk1MjQ3MSwiZXhwIjoxNzYxMDM4ODcxfQ.75LkpxpxqQ2VeNIE2F5L-5t3dmHakjanJSUANPF31sY',NULL,1),(75,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA5NTQwMjcsImV4cCI6MTc2MTA0MDQyN30.BZ5dvDEGqvkMliSEPS4d0NfSXKku_70p4qOu9S-hPR0',NULL,2),(76,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA5NTUxOTksImV4cCI6MTc2MTA0MTU5OX0.u0GqXj400ytGish6u32zbifwiPIdLEDVndUo-G9vUzA',NULL,2),(77,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA5NTUyNjIsImV4cCI6MTc2MTA0MTY2Mn0.4wh4CtdL5cCo957RnZlawaCvK5sEx0jJx1a7A5UdGPs',NULL,2),(78,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDk1NTYwMSwiZXhwIjoxNzYxMDQyMDAxfQ.1ZqqFQei-awSL0HmuxDbkcTDbBW1f0S3ohX3_MaknzE',NULL,1),(79,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA5NTU2MTYsImV4cCI6MTc2MTA0MjAxNn0.r9Db-9YwmLIItqB9elY7p0FraJVnVG_rsz8UamAzoUM',NULL,2),(80,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA5NTYwNjMsImV4cCI6MTc2MTA0MjQ2M30.Yi8mVvO4oZGc8uVIA_-AWxtKGy4wwjTN-gQcSe64VKk',NULL,2),(81,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDk1Njk3MSwiZXhwIjoxNzYxMDQzMzcxfQ.VmdsPuU_ouylOIwYHWbRjdpMK7jMMIO5hYBGVOk8Dd0',NULL,1),(82,_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA5NTcwNTksImV4cCI6MTc2MTA0MzQ1OX0.c28vSPO3g8twKSMNvzgyzzHWIEzB94XKmKEzXwvBd3o',NULL,2),(83,_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MDk1NzI1MywiZXhwIjoxNzYxMDQzNjUzfQ.P1dUpsAmOGxXwKermTXvzg8DiCqe3epqLGGp1xaPNuE',NULL,1);
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,_binary '','sadiar.rahman970@gmail.com',_binary '\0','Sadiar Rahman','$2a$10$9H2hbPvw0myh22rWf8A9JuqqwtxncdViRFoRmsLnQLXD4/gN3LMba','01722652595','Sadiar Rahman_f8131f25-5afe-42fe-909a-57e60aa361c2','ADMIN'),(2,_binary '','mdsadiar-10th-2015019057@dis.du.ac.bd',_binary '\0','Sadiar Rahman','$2a$10$oq.gj4QOqjqcyeK9HWGzae/jklMyOupbbmFs6DpiUhWm4llrT3OZG','01722652595','Sadiar Rahman_3de697bd-f6c1-4f0f-bf95-4e31611eed0e','USER');
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

-- Dump completed on 2025-10-21 17:35:40
