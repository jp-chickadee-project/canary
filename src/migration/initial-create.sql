-- MySQL dump 10.16  Distrib 10.1.31-MariaDB, for Linux (x86_64)
--
CREATE TABLE `bands` (
  `band` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `birds` (
  `logTimestamp` bigint(20) unsigned DEFAULT NULL,
  `captureTimestamp` bigint(20) unsigned DEFAULT NULL,
  `species` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `captureSite` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bandNumber` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rfid` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legRightTop` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `legRightBottom` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `legLeftTop` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `legLeftBottom` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tailLength` int(10) unsigned DEFAULT NULL,
  `wingChordLength` int(10) unsigned DEFAULT NULL,
  `longestSecondary` int(10) unsigned DEFAULT NULL,
  `billDepth` decimal(5,2) unsigned DEFAULT NULL,
  `billWidth` decimal(5,2) unsigned DEFAULT NULL,
  `billLength` decimal(5,2) unsigned DEFAULT NULL,
  `bibWidth` decimal(5,2) unsigned DEFAULT NULL,
  `capLength` decimal(5,2) unsigned DEFAULT NULL,
  `tarsusLength` decimal(5,2) unsigned DEFAULT NULL,
  `bagWeight` decimal(10,4) unsigned DEFAULT NULL,
  `bagAndBirdWeight` decimal(10,4) unsigned DEFAULT NULL,
  `birdWeight` decimal(10,4) unsigned DEFAULT NULL,
  `tissueSample` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suspectedSex` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `netEnterTimestamp` bigint(20) unsigned DEFAULT NULL,
  `netExitTimestamp` bigint(20) unsigned DEFAULT NULL,
  `releasedTimestamp` bigint(20) unsigned DEFAULT NULL,
  `notes` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `weather` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banders` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bandCombo` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` mediumblob,
  PRIMARY KEY (`rfid`),
  UNIQUE KEY `rfid` (`rfid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `feeders` (
  `id` char(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastPath` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `battery` int(10) unsigned DEFAULT NULL,
  `latitude` decimal(10,7) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `lastStatus` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastContact` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `visits` (
  `rfid` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `feederID` char(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `visitTimestamp` bigint(20) unsigned DEFAULT NULL,
  `temperature` int(10) unsigned DEFAULT NULL,
  `mass` int(10) unsigned DEFAULT NULL,
  `bandCombo` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  KEY `rfid` (`rfid`),
  KEY `feederID` (`feederID`),
  CONSTRAINT `visits_ibfk_1` FOREIGN KEY (`rfid`) REFERENCES `birds` (`rfid`),
  CONSTRAINT `visits_ibfk_2` FOREIGN KEY (`feederID`) REFERENCES `feeders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
