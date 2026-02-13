-- 1. retrieve employee and department information

select * from employees e 
join departments d 
on e.department_id=d.id;

-- 2. Show department Name with Average Salary;

select d.name as department_name,coalesce(round(avg(e.salary),2),0) as average_salary from departments d
left join employees e
on d.id=e.department_id
GROUP by(d."name")
ORDER by average_salary desc
;

-- 3. count employees in each department
select d."name",count(e."name") from departments d
left join employees e 
on d.id=e.department_id
GROUP by(d."name");

--4. find the department name with highest average salary
select 
d.name as department_name,
coalesce(round(avg(e.salary),2),0) as average_salary from departments d
left join employees e
on d.id=e.department_id
GROUP by(d."name")
ORDER by average_salary desc
limit 1
;