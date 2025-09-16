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
INSERT INTO `accounts` VALUES (1,752,'mdsadiar-10th-2015019057@dis.du.ac.bd','2025-09-11 22:57:13.175000',NULL,NULL,NULL,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (4,0.1,11500,10000,0,0.15,2),(5,0.1,69000,60000,0.15,0.15,2),(6,10,13941.45,12123,0,0.15,4);
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
INSERT INTO `carbill` VALUES (1,10,127777777777.65,111111111111,0,0.15,1);
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
INSERT INTO `carmoneyreceipt` VALUES (1,'Car Insurance','2025-09-16','dfsdgbdf','Dhaka','Cash',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'xgbhfdhb231342','sdgsg','2nd Class','Engine Damage Only','2025-09-16','sdgsdg','sdfgsdg','sdgdrg','2025-09-16','2026-09-16','dgsdfbg','dsfgsdg',111111111111,'');
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
INSERT INTO `company_volt_account` VALUES (1,1550,'Company Volt Account');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moneyreceipts`
--

LOCK TABLES `moneyreceipts` WRITE;
/*!40000 ALTER TABLE `moneyreceipts` DISABLE KEYS */;
INSERT INTO `moneyreceipts` VALUES (3,'Fire Insurance','2025-09-12','','Dhaka','Bank Transfer',4),(5,'Fire Insurance','2025-09-16','dfsdgbdf','Dhaka','Cash',4);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,200,'2025-09-11 23:02:31.457000','ACCOUNT_TRANSFER',NULL,NULL,2),(2,500,'2025-09-15 22:10:23.877000','ACCOUNT_TRANSFER',NULL,NULL,2),(3,300,'2025-09-15 22:17:59.716000','ACCOUNT_TRANSFER',NULL,NULL,2),(4,50,'2025-09-15 22:38:13.946000','ACCOUNT_TRANSFER',NULL,NULL,2),(5,500,'2025-09-16 13:56:32.362000','ACCOUNT_TRANSFER',NULL,NULL,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policies`
--

LOCK TABLES `policies` WRITE;
/*!40000 ALTER TABLE `policies` DISABLE KEYS */;
INSERT INTO `policies` VALUES (2,'Dhanmondi','Islami Bank','2nd Class','Fire & Lightning Only','2025-09-12','gfjasdg','Dhanmondi, 27','Atiq','2025-09-12','2026-09-12','Atiq Food House','Food',300000,'Shop Only'),(4,'xdbxfbdf','dsgdgb','2nd class','Fire & Lightning Only','2025-09-16','sgshbd','sbghsfbhd','gserghrdeg','2025-09-16','2026-09-16','sdbghsdb','sdgsghb',12123,'Shop Only');
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1NzYwODY0MCwiZXhwIjoxNzU3Njk1MDQwfQ.ImigubATxPBv9-_P7xrnHdLGe8ZoTu6wmxMWtSyV8os',NULL,1),(2,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1NzYwODcwNiwiZXhwIjoxNzU3Njk1MTA2fQ.VeVbb_pYdjbNVFSmwqAOmtAHrM_u9QRfGUGVYpSI0fQ',NULL,1),(3,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTc2MDk4MzMsImV4cCI6MTc1NzY5NjIzM30.2zCeWpiURv5H5CzFX5JbnkS8e4-eM2yQjgNCmH_U1YA',NULL,2),(4,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1NzYwOTg1MywiZXhwIjoxNzU3Njk2MjUzfQ.b1mrnmMjQIp-S49BdZlA8-TLFsz84jYMCp4rKQiYxIo',NULL,1),(5,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1NzYxNDAwNywiZXhwIjoxNzU3NzAwNDA3fQ.M36M5p7HAGmny0phOwstsQmq6QDS9oSgHldsA1Mwt1I',NULL,1),(6,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1NzY4OTU0NCwiZXhwIjoxNzU3Nzc1OTQ0fQ.LhKLPZe6vrqdSbHvYF7_W97kQi5GaXTTMcho1TUObVI',NULL,1),(7,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1NzY5NTI2MywiZXhwIjoxNzU3NzgxNjYzfQ.lwQfoFem6JmeIirnuwE_L_GKZ01ZzRAH8RL0DxjbQxc',NULL,1),(8,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1Nzk1MDQ1MywiZXhwIjoxNzU4MDM2ODUzfQ.6MkEffsarf2ZdpX-w6UXOvl8zHrOcXbwvZQJbXXP93Y',NULL,1),(9,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1Nzk1NjY3NiwiZXhwIjoxNzU4MDQzMDc2fQ.RK3z7xOfdl_iuQ7QmT4XOzOLpgRARZk-50_Ho28kAF8',NULL,1),(10,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1Nzk1NjcxNSwiZXhwIjoxNzU4MDQzMTE1fQ.yApYSkOOZaqXj6gs1VDTDtxCyUrapt_riDP3q5I9E8M',NULL,1),(11,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1Nzk2NDEyMiwiZXhwIjoxNzU4MDUwNTIyfQ.Gc8PLEq_SOwQ6tPF6X00_wBfIptf2QgrSW5SLr5WLxY',NULL,1),(12,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1Nzk2NDczNywiZXhwIjoxNzU4MDUxMTM3fQ.l6zmF6ts3uMURIj2Y-T41tRZJfi4lt6G5RKV4-nHopw',NULL,1),(13,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODAwNjI3MiwiZXhwIjoxNzU4MDkyNjcyfQ.fQEJqtBub7dVvIBscNX-yqOiXksJQ_d1w2y0GWOjUTA',NULL,1),(14,_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRpYXIucmFobWFuOTcwQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1ODAwOTk3OCwiZXhwIjoxNzU4MDk2Mzc4fQ.EAHoZAnHssB71de-bKOxAl3nb5kD6TozSksUbLs41J8',NULL,1),(15,_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZHNhZGlhci0xMHRoLTIwMTUwMTkwNTdAZGlzLmR1LmFjLmJkIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTgwMTAwMDUsImV4cCI6MTc1ODA5NjQwNX0.THkoXu1isZgYwUUaN_kDCxAXYGwDNRLxnNVTldRnZp4',NULL,2);
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
INSERT INTO `users` VALUES (1,_binary '','sadiar.rahman970@gmail.com',_binary '\0','Sadiar Rahman','$2a$10$3I/OQxJ/YjSNVOc8UiC.5uQu2lZYblhFUBlYtO1huJfDSlDHmwTJm','01722652595','Sadiar Rahman_fff14df1-fec3-4095-a647-a1ff91d75fd9','ADMIN'),(2,_binary '','mdsadiar-10th-2015019057@dis.du.ac.bd',_binary '\0','Sadiar Rahman','$2a$10$F/lv4DPY0ziudBWq3mSX8Olmc7XXn/j7uJoCYYWhoMvpiczqnnJUW','01722652595','Sadiar Rahman_35bf339d-68c0-4d0c-91a1-c1cdbad23fd1','USER');
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

-- Dump completed on 2025-09-16 14:18:58
