-- count employees hired each year
-- 1. just show the employee's hire year 
select EXTRACT(year from '2021-12-24'::date); -- type coerscing 
select name,EXTRACT(year from hire_date) from employees;
-- now show the count of hired employee each year
select  EXTRACT(YEAR from hire_date) as hiring_year, count(*) from employees
GROUP by EXTRACT(YEAR from hire_date)
order by hiring_year 
;