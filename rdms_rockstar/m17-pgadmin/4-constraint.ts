/*

constraints
1. not null
2. unique
3. pk: primary key
4. fk: references table(column_name)
5. default
6. check



drop table if exists students;
create TABLE students(
id SERIAL,
user_name varchar(150) not null unique,
name VARCHAR(50) not null,
is_active BOOLEAN DEFAULT true

primary key(id,username)

);




*/