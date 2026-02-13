-- functions

create function emp_count()
returns int
language sql
as 
$$
	select count(*) from employees;
$$;


select emp_count();

create function delete_emp(emp_id int)
returns void
language sql
as 
$$
	delete from employees where id=$1;
$$;

select delete_emp(121);
