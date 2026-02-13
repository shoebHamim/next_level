/*


select * from students WHERE age IS NULL;


UPDATE students set age=100;

select * from students where grade='F';

BEGIN;
update students set grade='A+' where grade='F';
commit;
ROLLBACK;
select * from students where grade='A+';



*/