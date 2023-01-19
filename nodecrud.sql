-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2023 at 02:15 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodecrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `email`, `phone`, `created_at`, `updated_at`) VALUES
(19, 'SubAdmin', 'Admin@gmail.com', '7745745754745', '2023-01-13 17:34:09', '2023-01-13 17:34:09'),
(20, 'SubAdmin', 'Admin@gmail.com', '6575674523', '2023-01-13 17:36:24', '2023-01-13 17:36:24'),
(22, 'SubAdmin', 'Admin@gmail.com', '6575674523', '2023-01-13 17:38:00', '2023-01-13 17:38:00'),
(23, 'SubAdmin', 'Admin@gmail.com', 'fghfg', '2023-01-13 17:38:52', '2023-01-13 17:38:52'),
(24, 'rtytr', 'Admin@gmail.com', 'rttryrt', '2023-01-13 17:39:28', '2023-01-13 17:39:28'),
(25, 'SubAdmin', 'Admijhkhn@gmail.com', '6575674523', '2023-01-13 17:40:38', '2023-01-13 17:40:38'),
(26, 'SubAdmin', 'Admin@gmail.com', '6575674523', '2023-01-13 17:42:38', '2023-01-13 17:42:38'),
(27, 'NewComapny', 'akhterh@gmail.com', '6575674523', '2023-01-13 17:43:52', '2023-01-13 17:43:52'),
(28, 'SubAdmin', 'Admin@gmail.com', 'dfg', '2023-01-13 17:46:09', '2023-01-13 17:46:09'),
(29, 'NewComapny', '', '6575674523', '2023-01-13 17:46:54', '2023-01-13 17:46:54'),
(30, 'SubAdmin', 'Admin@gmail.com', '+916005598533', '2023-01-13 17:47:41', '2023-01-13 17:47:41'),
(31, '', '', '+916005598533', '2023-01-13 17:48:01', '2023-01-13 17:48:01'),
(32, 'SubAdmin', 'akhterhussain216@gmail.com', '', '2023-01-13 17:50:01', '2023-01-13 17:50:01'),
(33, 'SubAdmin', '', '6575674523', '2023-01-13 17:50:30', '2023-01-13 17:50:30'),
(34, 'SubAdmin', 'akhterhussain216@gmail.com', 'jhkjh', '2023-01-13 17:53:24', '2023-01-13 17:53:24'),
(35, 'SubAdmin', 'Admin@gmail.com', '6575674523', '2023-01-13 17:56:13', '2023-01-13 17:56:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
