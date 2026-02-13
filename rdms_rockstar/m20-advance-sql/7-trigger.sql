
CREATE TABLE employee_logs(
id SERIAL PRIMARY key,
employee_id int,
action varchar(34),
action_time TIMESTAMP DEFAULT now()
);

alter table employee_logs rename column employee_id to employee_name;
alter table employee_logs alter column employee_name type VARCHAR(50);

create trigger save_employee_delete_logs
after delete 
on employees
for each row
EXECUTE FUNCTION save_employee_delete_logs();

create FUNCTION save_employee_delete_logs()
returns TRIGGER
LANGUAGE plpgsql
as 
$$
BEGIN
	insert into employee_logs(employee_name,action) values(old.name,'DELETE');
	return old;
END
$$;


delete from employees where id=123;

-- check the log!







