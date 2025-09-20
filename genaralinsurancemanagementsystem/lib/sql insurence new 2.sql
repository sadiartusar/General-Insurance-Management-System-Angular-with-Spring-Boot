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
INSERT INTO `accounts` VALUES (1,0,'mdsadiar-10th-2015019057@dis.du.ac.bd','2025-09-20 12:18:56.837000',NULL,NULL,NULL,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (1,0.1,34500,30000,0,0.15,1),(2,0.12,23000,20000,0,0.15,2),(3,0.14,13800,12000,0,0.15,3),(4,0.18,14950,13000,0,0.15,4);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carbill`
--

LOCK TABLES `carbill` WRITE;
/*!40000 ALTER TABLE `carbill` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
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
INSERT INTO `company_volt_account` VALUES (1,0,'Company Volt Account');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moneyreceipts`
--

LOCK TABLES `moneyreceipts` WRITE;
/*!40000 ALTER TABLE `moneyreceipts` DISABLE KEYS */;
INSERT INTO `moneyreceipts` VALUES (1,'Fire Insurance','2025-09-20','Policy No. FI/2025/00456','Dhaka','Cash',1),(2,'Fire Insurance','2025-09-20','Policy No. FI/2025/00457','Dhaka','Cash',2),(3,'Fire Insurance','2025-09-20','Policy No. FI/2025/00458','Dhaka','Cash',3),(4,'Fire Insurance','2025-09-20','Policy No. FI/2025/00459','Dhaka','Cash',4);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODM0OTEwNywiZXhwIjoxNzU4NDM1NTA3fQ.moPvQm01ACAzLpYK6bqpcsRDlbhlPpkRS6ySq2BtfQI',NULL,1),(2,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTgzNDkxMzYsImV4cCI6MTc1ODQzNTUzNn0.MIxYJlfAVnnAIbBsjQAwaTrtiXGOIyrPy4_1x7xRv50',NULL,2),(3,_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTgzNDkxNTIsImV4cCI6MTc1ODQzNTU1Mn0.EwnjS_NyNVhC4nt9GPFj_Ot2YahOexzSTcOzdpPj8W0',NULL,2),(4,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODM0OTE4OSwiZXhwIjoxNzU4NDM1NTg5fQ.E7NFTh9TY1S17yrQdE5JsbpgAlG9QGwTe63tPx3NWag',NULL,1),(5,_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODM1OTkzOSwiZXhwIjoxNzU4NDQ2MzM5fQ.y5djXUba5kP6CT58OgEW0JCzymDr0pRX4OUUlpKNUew',NULL,1);
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

-- Dump completed on 2025-09-20 15:31:34
