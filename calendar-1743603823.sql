	

CREATE TABLE IF NOT EXISTS `courses` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	`username` varchar(100) NOT NULL,
	`password` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`type_id` int NOT NULL,
	`tz` varchar(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `user_types` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `study_data` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`user_id` int NOT NULL,
	`study_date` date NOT NULL,
	`course` int NOT NULL,
	`start_time` time NOT NULL,
	`end_time` time NOT NULL,
	`is_plan` int NOT NULL,
	`notes` text NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `students_to_teachers` (
	`student_id` int NOT NULL,
	`teacher_id` int NOT NULL,
	PRIMARY KEY (`student_id`, `teacher_id`)
);




ALTER TABLE `users` ADD CONSTRAINT `users_fk5` FOREIGN KEY (`type_id`) REFERENCES `user_types`(`id`);

ALTER TABLE `study_data` ADD CONSTRAINT `study_data_fk1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `study_data` ADD CONSTRAINT `study_data_fk3` FOREIGN KEY (`course`) REFERENCES `courses`(`id`);
ALTER TABLE `students_to_teachers` ADD CONSTRAINT `students_to_teachers_fk0` FOREIGN KEY (`student_id`) REFERENCES `users`(`id`);

ALTER TABLE `students_to_teachers` ADD CONSTRAINT `students_to_teachers_fk1` FOREIGN KEY (`teacher_id`) REFERENCES `users`(`id`);