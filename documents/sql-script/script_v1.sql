CREATE TABLE `patterns` (
`id` int(11) NOT NULL AUTO_INCREMENT,  PRIMARY KEY (`id`),
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pattern` varchar(255) DEFAULT NULL,
  `domain` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;