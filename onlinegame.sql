-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Cze 06, 2026 at 07:10 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinegame`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `account`
--

CREATE TABLE `account` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `isValid` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `adminaccount`
--

CREATE TABLE `adminaccount` (
  `ID` int(11) NOT NULL,
  `login` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `pin` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `avatar`
--

CREATE TABLE `avatar` (
  `ID` int(11) NOT NULL,
  `accountID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `class` varchar(100) NOT NULL,
  `hitPoints` int(11) NOT NULL,
  `intelligence` int(11) NOT NULL,
  `dexterity` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `luck` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `character_item`
--

CREATE TABLE `character_item` (
  `ID` int(11) NOT NULL,
  `avatarID` int(11) NOT NULL,
  `itemID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `enemy`
--

CREATE TABLE `enemy` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `hitPoints` int(11) NOT NULL,
  `intelligence` int(11) NOT NULL,
  `dexterity` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `enemy_drop`
--

CREATE TABLE `enemy_drop` (
  `ID` int(11) NOT NULL,
  `enemyID` int(11) NOT NULL,
  `itemID` int(11) NOT NULL,
  `chance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `item`
--

CREATE TABLE `item` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `hitPoints` int(11) DEFAULT NULL,
  `defense` int(11) DEFAULT NULL,
  `attack` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `class` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `place`
--

CREATE TABLE `place` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `minLevel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `place_enemy`
--

CREATE TABLE `place_enemy` (
  `ID` int(11) NOT NULL,
  `placeID` int(11) NOT NULL,
  `EnemyID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `adminaccount`
--
ALTER TABLE `adminaccount`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `avatar`
--
ALTER TABLE `avatar`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `accountID` (`accountID`);

--
-- Indeksy dla tabeli `character_item`
--
ALTER TABLE `character_item`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `avatarID` (`avatarID`),
  ADD KEY `itemID` (`itemID`);

--
-- Indeksy dla tabeli `enemy`
--
ALTER TABLE `enemy`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `enemy_drop`
--
ALTER TABLE `enemy_drop`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `enemyID` (`enemyID`),
  ADD KEY `itemID` (`itemID`);

--
-- Indeksy dla tabeli `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `place_enemy`
--
ALTER TABLE `place_enemy`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `placeID` (`placeID`),
  ADD KEY `EnemyID` (`EnemyID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `adminaccount`
--
ALTER TABLE `adminaccount`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `avatar`
--
ALTER TABLE `avatar`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `character_item`
--
ALTER TABLE `character_item`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `enemy`
--
ALTER TABLE `enemy`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `enemy_drop`
--
ALTER TABLE `enemy_drop`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `place`
--
ALTER TABLE `place`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `place_enemy`
--
ALTER TABLE `place_enemy`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `avatar`
--
ALTER TABLE `avatar`
  ADD CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`ID`);

--
-- Constraints for table `character_item`
--
ALTER TABLE `character_item`
  ADD CONSTRAINT `character_item_ibfk_1` FOREIGN KEY (`avatarID`) REFERENCES `avatar` (`ID`),
  ADD CONSTRAINT `character_item_ibfk_2` FOREIGN KEY (`itemID`) REFERENCES `item` (`ID`);

--
-- Constraints for table `enemy_drop`
--
ALTER TABLE `enemy_drop`
  ADD CONSTRAINT `enemy_drop_ibfk_1` FOREIGN KEY (`enemyID`) REFERENCES `enemy` (`ID`),
  ADD CONSTRAINT `enemy_drop_ibfk_2` FOREIGN KEY (`itemID`) REFERENCES `item` (`ID`);

--
-- Constraints for table `place_enemy`
--
ALTER TABLE `place_enemy`
  ADD CONSTRAINT `place_enemy_ibfk_1` FOREIGN KEY (`placeID`) REFERENCES `place` (`ID`),
  ADD CONSTRAINT `place_enemy_ibfk_2` FOREIGN KEY (`EnemyID`) REFERENCES `enemy` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
