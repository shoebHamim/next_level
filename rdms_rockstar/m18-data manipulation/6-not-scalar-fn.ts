/*


select * from students where not first_name like 'M__';



-- scalar functions
-- upper,lower,concat,length


-- aggregate function
-- avg,max,min,sum,count

select UPPER(first_name) as first_name_upper, concat(first_name,' ',last_name) as "Full name" from students;

*/