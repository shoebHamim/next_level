-- subquery
-- find the highest salary
select * from employees where salary=(select max(salary) from employees);


-- find employees who earn more than the average salary

-- find the avg

select * from employees where salary>(select avg(salary) from employees);

--name the employee who gets the highest salary in Human Resources

select * from employees e
join departments d
on e.department_id=d.id
where e.salary=(
select max(e.salary) from employees e
join departments d
on e.department_id=d.id
where d."name"='Human Resources'
) 

and d."name"='Human Resources'
;