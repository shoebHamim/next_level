/*

--It's like sorting your data into buckets and then calculating statistics for each bucket.

select country,count(*)  from students group by country;

select course,count(*) from students GROUP by course having count(*)>3;

-- Average salary by department and job title
SELECT department, job_title, AVG(salary) as avg_salary
FROM employees
GROUP BY department, job_title;


COUNT() - counts rows
SUM() - adds up values
AVG() - calculates average
MAX() - finds maximum
MIN() - finds minimum

*/