/*


create table employe (id serial, name varchar(100));


-- rename table name
alter table employe
rename to employee;

-- add column
alter table employee add column name VARCHAR(100);

-- drop column
alter table employee add column is_active boolean;
alter table employee drop column is_active;
 
-- rename column name
alter table employee rename column name to user_name;

-- modify constraint
alter table employee alter column user_name 
type VARCHAR(50);


-- add constraint(column level)
alter table employee alter column user_name
set not null;

ALTER TABLE employee
ADD CONSTRAINT employee_user_name_min_length
CHECK (char_length(user_name) >= 2);

insert into employee(age,user_name,email)
values(10,'abcdd','asdf');

alter table employee alter COLUMN is_active set DEFAULT true;

-- add constraint(table level)
alter table employee add CONSTRAINT unique_employee_user_name PRIMARY KEY(user_name);

alter table employee add COLUMN email VARCHAR(100);

alter table employee add CONSTRAINT 
unique_employee_email UNIQUE(email);


-- remove constraint
alter table employee drop CONSTRAINT unique_employee_user_name;
*/