
-- function retunrs type must be delcared


-- procedure benifit
-- we can use transaction rollback

-- example 1: 
-- delete an employee
create PROCEDURE 
delete_emp_by_id(emp_id int)
LANGUAGE plpgsql
as $$
BEGIN
delete from employees where id=emp_id;
END
$$;

call delete_emp_by_id(122);

-- example 2:
-- increase the salary of employee of each department by 10% who is receiving less than average salary
CREATE PROCEDURE increase_low_salary(department_name VARCHAR(50))
LANGUAGE plpgsql
as 
$$
	DECLARE 
	avg_salary int;
	BEGIN
		select avg(e.salary) into avg_salary from employees e 
		join departments d
		on e.department_id=d.id
		WHERE d.name= department_name;
		
		UPDATE employees e
		SET salary=salary*1.1 
		from departments d	
		where e.department_id=d.id
		and e.salary<avg_salary;
	END
$$;

call increase_low_salary('Sales');


-- testing
select 
--avg(e.salary) 
*
from employees e
join departments d
on e.department_id=d.id
where d."name"='Sales';
