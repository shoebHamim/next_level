TRUNCATE employee;
DROP TABLE employee;
DROP TABLE students;
DROP TABLE users;

CREATE TABLE departments(
id SERIAL PRIMARY KEY,
name VARCHAR(50)
); 

CREATE TABLE employees(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
department_id INT REFERENCES departmentS(id),
salary DECIMAL(10,2),
hire_date DATE
);


alter table employees ALTER COLUMN name TYPE VARCHAR(50);


-- Insert 30 Employees with varied data for practice
INSERT INTO employees (name, department_id, salary, hire_date) VALUES
-- Engineering (8 employees)
('Alice', 1, 95000.00, '2020-01-15'),
('Bob', 1, 87000.00, '2021-03-22'),
('Carol', 1, 102000.00, '2019-06-10'),
('David', 1, 78000.00, '2022-09-01'),
('Eve', 1, 91000.00, '2020-11-05'),
('Frank', 1, 85000.00, '2021-07-18'),
('Grace', 1, 98000.00, '2019-12-03'),
('Henry', 1, 72000.00, '2023-02-14'),

-- Sales (7 employees)
('Ivy', 2, 65000.00, '2021-04-12'),
('Jack', 2, 71000.00, '2020-08-25'),
('Karen', 2, 68000.00, '2022-01-30'),
('Leo', 2, 62000.00, '2023-05-08'),
('Maya', 2, 75000.00, '2019-10-17'),
('Nina', 2, 69000.00, '2021-11-22'),
('Oscar', 2, 73000.00, '2020-06-15'),

-- Marketing (5 employees)
('Paul', 3, 67000.00, '2021-02-28'),
('Quinn', 3, 71000.00, '2020-05-19'),
('Rita', 3, 64000.00, '2022-08-11'),
('Sam', 3, 70000.00, '2021-09-07'),
('Tina', 3, 66000.00, '2023-01-25'),

-- Human Resources (3 employees)
('Uma', 4, 61000.00, '2020-03-14'),
('Vic', 4, 59000.00, '2022-07-20'),
('Wendy', 4, 63000.00, '2021-12-09'),

-- Finance (4 employees)
('Xander', 5, 82000.00, '2019-11-30'),
('Yara', 5, 88000.00, '2020-04-16'),
('Zoe', 5, 79000.00, '2022-10-05'),
('Aaron', 5, 85000.00, '2021-06-28'),

-- Customer Support (2 employees)
('Beth', 6, 52000.00, '2022-03-17'),
('Chris', 6, 54000.00, '2023-04-22'),

-- Operations (1 employee)
('Dana', 7, 76000.00, '2020-12-11');


insert into departments(name) values('R&D');
