/*


clauses used with SELECT
1. GROUP BY
2. JOIN
3. ORDER
4. FROM
5. OFFSET
6. HAVING
7. DISTINCT
8.WHERE
9.LIMIT



CREATE TABLE students (
student_id SERIAL PRIMARY KEY,
first_name VARCHAR(50) not null,
last_name VARCHAR(50) not null,
age INT,
grade CHAR(2),
course VARCHAR(50),
email VARCHAR(100) unique,
dob DATE,
blood_group VARCHAR(5),
country VARCHAR(50));

INSERT INTO students 
(first_name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES
('Rahim', 'Ahmed', 20, 'A+', 'Computer Science', 'rahim.ahmed1@example.com', '2004-02-12', 'O+', 'Bangladesh'),
('Nusrat', 'Jahan', 22, 'A ', 'Software Engineering', 'nusrat.jahan2@example.com', '2002-07-25', 'A+', 'Bangladesh'),
('John', 'Smith', 19, 'B+', 'Mathematics', 'john.smith3@example.com', '2005-03-14', 'B+', 'USA'),
('Emma', 'Wilson', 21, 'A-', 'Physics', 'emma.wilson4@example.com', '2003-09-05', 'O-', 'UK'),
('Liam', 'Brown', 23, 'B ', 'Chemistry', 'liam.brown5@example.com', '2001-11-19', 'AB+', 'Canada'),
('Olivia', 'Davis', 20, 'A+', 'Biology', 'olivia.davis6@example.com', '2004-01-30', 'A-', 'Australia'),
('Noah', 'Miller', 24, 'C+', 'Statistics', 'noah.miller7@example.com', '2000-06-17', 'O+', 'USA'),
('Sophia', 'Taylor', 18, 'A ', 'Computer Science', 'sophia.taylor8@example.com', '2006-04-22', 'B-', 'India'),
('Mason', 'Anderson', 22, 'B+', 'Economics', 'mason.anderson9@example.com', '2002-12-11', 'A+', 'Germany'),
('Isabella', 'Thomas', 21, 'A-', 'Software Engineering', 'isabella.thomas10@example.com', '2003-05-09', 'O+', 'France'),

('Ethan', 'Jackson', 20, 'B ', 'Physics', 'ethan.jackson11@example.com', '2004-08-18', 'AB-', 'USA'),
('Ava', 'White', 19, 'A+', 'Mathematics', 'ava.white12@example.com', '2005-02-27', 'O+', 'Bangladesh'),
('James', 'Harris', 23, 'C ', 'Chemistry', 'james.harris13@example.com', '2001-10-03', 'B+', 'UK'),
('Mia', 'Martin', 20, 'B+', 'Biology', 'mia.martin14@example.com', '2004-06-15', 'A-', 'India'),
('Benjamin', 'Thompson', 22, 'A ', 'Statistics', 'ben.thompson15@example.com', '2002-01-08', 'O-', 'Canada'),
('Charlotte', 'Garcia', 21, 'B-', 'Computer Science', 'charlotte.garcia16@example.com', '2003-07-29', 'AB+', 'Spain'),
('Lucas', 'Martinez', 24, 'A+', 'Economics', 'lucas.martinez17@example.com', '2000-03-02', 'O+', 'Mexico'),
('Amelia', 'Robinson', 18, 'A ', 'Software Engineering', 'amelia.robinson18@example.com', '2006-09-13', 'B+', 'Australia'),
('Henry', 'Clark', 19, 'B+', 'Physics', 'henry.clark19@example.com', '2005-11-21', 'A+', 'USA'),
('Harper', 'Rodriguez', 22, 'C+', 'Chemistry', 'harper.rodriguez20@example.com', '2002-04-01', 'O-', 'Brazil'),

('Alexander', 'Lewis', 20, 'A-', 'Mathematics', 'alex.lewis21@example.com', '2004-12-10', 'AB-', 'Germany'),
('Evelyn', 'Lee', 23, 'B ', 'Statistics', 'evelyn.lee22@example.com', '2001-05-16', 'O+', 'South Korea'),
('Daniel', 'Walker', 21, 'A+', 'Biology', 'daniel.walker23@example.com', '2003-02-19', 'A+', 'USA'),
('Abigail', 'Hall', 19, 'B+', 'Economics', 'abigail.hall24@example.com', '2005-08-07', 'O+', 'UK'),
('Matthew', 'Allen', 22, 'A ', 'Computer Science', 'matthew.allen25@example.com', '2002-03-30', 'B-', 'Canada'),
('Emily', 'Young', 20, 'C ', 'Software Engineering', 'emily.young26@example.com', '2004-06-02', 'A+', 'Bangladesh'),
('Joseph', 'Hernandez', 24, 'B+', 'Physics', 'joseph.hernandez27@example.com', '2000-09-14', 'O-', 'USA'),
('Ella', 'King', 18, 'A+', 'Biology', 'ella.king28@example.com', '2006-01-26', 'AB+', 'Australia'),
('David', 'Wright', 21, 'B-', 'Chemistry', 'david.wright29@example.com', '2003-11-05', 'B+', 'India'),
('Scarlett', 'Lopez', 23, 'A ', 'Economics', 'scarlett.lopez30@example.com', '2001-07-12', 'O+', 'Spain');









*/