-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2021 at 08:04 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `username` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `passcode` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `email`, `passcode`) VALUES
('chandra_1234', '', '1234'),
('ham_1234', '', '1234'),
('shubh_1234', '', '1234'),
('sumit_1234', '', '1234'),
('vanshi_1234', '', '1234'),
('yadav_1234', '', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `make_quiz`
--

CREATE TABLE `make_quiz` (
  `quiz_id` int(100) NOT NULL,
  `role_id` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `make_quiz`
--

INSERT INTO `make_quiz` (`quiz_id`, `role_id`) VALUES
(12, 'teacherchandra_1234'),
(13, 'teachervanshi_1234'),
(14, 'teacherchandra_1234'),
(16, 'teacheryadav_1234');

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `que_id` int(150) NOT NULL,
  `option_id` int(250) NOT NULL,
  `option_descript` varchar(250) NOT NULL,
  `answer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`que_id`, `option_id`, `option_descript`, `answer`) VALUES
(7, 25, 'Manmonhan Singh', 0),
(7, 26, 'Narendra Modi', 1),
(7, 27, 'Rahul Gandhi', 0),
(7, 28, 'Arvind kejriwal', 0),
(8, 29, 'Manmonhan Singh', 0),
(8, 30, 'Narendra Modi', 0),
(8, 31, 'Rahul Gandhi', 0),
(8, 32, 'Mahatma Gandhi', 1),
(10, 37, 'Narendra Modi', 0),
(10, 38, 'Mahatma Gandhi', 0),
(10, 39, 'Subhash Chandra Bose', 0),
(10, 40, 'Pt. Jawaharlal Nehru', 1),
(11, 41, '1', 0),
(11, 42, '3', 0),
(11, 43, '5', 0),
(11, 44, '6', 1),
(12, 45, '9', 0),
(12, 46, '0', 1),
(12, 47, '4', 0),
(12, 48, '1', 0),
(13, 49, '1', 0),
(13, 50, '3', 0),
(13, 51, '1.5', 0),
(13, 52, '2/3', 1),
(14, 53, 'Mumbai', 1),
(14, 54, 'Chennai', 0),
(14, 55, 'Kolkata', 0),
(14, 56, 'New Delhi', 0),
(15, 57, 'MP', 1),
(15, 58, 'Gujarat', 0),
(15, 59, 'Tamil Nadu', 0),
(15, 60, 'Punjab', 0),
(16, 61, 'Mughal emperor', 1),
(16, 62, 'Maratha emperor', 0),
(16, 63, 'British emperor', 0),
(16, 64, 'Cholla emperor ', 0),
(17, 65, '<h2>', 1),
(17, 66, '<p>', 0),
(17, 67, '<a>', 0),
(17, 68, 'none', 0),
(18, 69, '1', 0),
(18, 70, '2', 0),
(18, 71, '3', 0),
(18, 72, '4', 1),
(19, 73, '18', 1),
(19, 74, '12', 0),
(19, 75, '1', 0),
(19, 76, '2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `quiz_id` int(100) NOT NULL,
  `que_id` int(150) NOT NULL,
  `que_descript` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`quiz_id`, `que_id`, `que_descript`) VALUES
(12, 7, 'Who is PM of India'),
(12, 8, 'who is father of nation of India'),
(12, 10, 'who is the first PM of India?'),
(13, 11, '2+3'),
(13, 12, '9x0'),
(13, 13, '3/2'),
(14, 14, 'which is capital of India'),
(14, 15, 'where is Jabalpur located'),
(15, 16, 'who was Akbar'),
(16, 17, 'which of the following is html heading tag'),
(16, 18, '2+2'),
(16, 19, '3*6');

-- --------------------------------------------------------

--
-- Table structure for table `question_attempt`
--

CREATE TABLE `question_attempt` (
  `role_id` varchar(30) NOT NULL,
  `quiz_id` int(100) NOT NULL,
  `que_id` int(150) NOT NULL,
  `attempt_id` int(250) DEFAULT NULL,
  `attempt_detail` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question_attempt`
--

INSERT INTO `question_attempt` (`role_id`, `quiz_id`, `que_id`, `attempt_id`, `attempt_detail`) VALUES
('studentshubh_1234', 12, 7, 26, 1),
('studentshubh_1234', 12, 8, 31, 0),
('studentshubh_1234', 12, 10, 40, 1),
('studentshubh_1234', 13, 11, 44, 1),
('studentshubh_1234', 13, 12, 46, 1),
('studentshubh_1234', 13, 13, 52, 1),
('studentshubh_1234', 14, 14, 56, 0),
('studentshubh_1234', 14, 15, 57, 1),
('studentham_1234', 14, 14, 53, 1),
('studentham_1234', 15, 16, 61, 1),
('studentsumit_1234', 16, 17, 65, 1),
('studentsumit_1234', 16, 18, 71, 0),
('studentsumit_1234', 16, 19, 73, 1);

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `quiz_id` int(100) NOT NULL,
  `quiz_name` varchar(20) NOT NULL,
  `quiz_descript` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`quiz_id`, `quiz_name`, `quiz_descript`) VALUES
(12, 'GK Quiz.', 'This a a simple general knowledge quiz for testing.'),
(13, 'Maths Quiz !!!', 'This a a simple Maths Quiz for testing'),
(14, 'Geography', 'this is a simple geography quiz for testing'),
(15, 'History and Civics', 'this is a simple history and civics quiz created for demonstration'),
(16, 'DBMS QUIZ', 'This a a simple DBMS quiz for testing');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_given`
--

CREATE TABLE `quiz_given` (
  `role_id` varchar(30) NOT NULL,
  `quiz_id` int(100) NOT NULL,
  `marks` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz_given`
--

INSERT INTO `quiz_given` (`role_id`, `quiz_id`, `marks`, `total`) VALUES
('studentshubh_1234', 12, 2, 3),
('studentshubh_1234', 13, 3, 3),
('studentshubh_1234', 14, 1, 2),
('studentham_1234', 14, 1, 2),
('studentham_1234', 15, 1, 1),
('studentsumit_1234', 16, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `role_id` varchar(20) DEFAULT NULL,
  `class` int(11) DEFAULT NULL,
  `interest` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `about` varchar(200) DEFAULT NULL,
  `role_id` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `role_id` varchar(30) NOT NULL,
  `role_name` varchar(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `username` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`role_id`, `role_name`, `name`, `username`) VALUES
('studentham_1234', 'student', 'bhamshu', 'ham_1234'),
('studentshubh_1234', 'student', 'Shubham Chandravanshi', 'shubh_1234'),
('studentsumit_1234', 'student', 'yadav ', 'sumit_1234'),
('teacherchandra_1234', 'teacher', 'Chandravanshi Shubham', 'chandra_1234'),
('teachervanshi_1234', 'teacher', 'bhamshu', 'vanshi_1234'),
('teacheryadav_1234', 'teacher', 'sumit', 'yadav_1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`,`email`);

--
-- Indexes for table `make_quiz`
--
ALTER TABLE `make_quiz`
  ADD KEY `make_quiz_ibfk_1` (`role_id`),
  ADD KEY `make_quiz_ibfk_2` (`quiz_id`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`option_id`),
  ADD KEY `options_ibfk_1` (`que_id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`que_id`),
  ADD KEY `question_ibfk_1` (`quiz_id`);

--
-- Indexes for table `question_attempt`
--
ALTER TABLE `question_attempt`
  ADD KEY `question_attempt_ibfk_1` (`role_id`),
  ADD KEY `question_attempt_ibfk_2` (`quiz_id`),
  ADD KEY `question_attempt_ibfk_3` (`que_id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`quiz_id`);

--
-- Indexes for table `quiz_given`
--
ALTER TABLE `quiz_given`
  ADD KEY `quiz_given_ibfk_1` (`role_id`),
  ADD KEY `quiz_given_ibfk_2` (`quiz_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD KEY `student_ibfk_1` (`role_id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`role_id`),
  ADD KEY `users_ibfk_1` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `option_id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `que_id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `quiz_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `make_quiz`
--
ALTER TABLE `make_quiz`
  ADD CONSTRAINT `make_quiz_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `users` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `make_quiz_ibfk_2` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `options_ibfk_1` FOREIGN KEY (`que_id`) REFERENCES `question` (`que_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `question_attempt`
--
ALTER TABLE `question_attempt`
  ADD CONSTRAINT `question_attempt_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `users` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `question_attempt_ibfk_2` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `question_attempt_ibfk_3` FOREIGN KEY (`que_id`) REFERENCES `question` (`que_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quiz_given`
--
ALTER TABLE `quiz_given`
  ADD CONSTRAINT `quiz_given_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `users` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_given_ibfk_2` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `users` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `users` (`role_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`username`) REFERENCES `login` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
