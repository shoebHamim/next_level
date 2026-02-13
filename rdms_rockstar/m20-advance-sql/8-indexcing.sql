-- indexing

EXPLAIN ANALYSE
select * from employees where name='Oscar';

CREATE INDEX idx_employees_name
on employees(name);

EXPLAIN ANALYSE
select * from employees where id=125;


DROP INDEX
idx_employees_name;