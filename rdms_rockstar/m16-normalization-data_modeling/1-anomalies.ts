
// anomalies- inconsistency: the why behind normalization

// Anomalies are undesirable situations/inconsistency that happen when a database table is poorly designed (usually not normalized).

/*
/ There are three classic anomalies:

1. Insertion anomaly
Problem: You can't insert some data unless other unrelated data exists.


2. Update anomaly
Problem: The same data appears in multiple rows, and updating it everywhere is risky.

Deletion anomaly
Problem: Deleting one fact unintentionally deletes another important fact.


Why anomalies happen?
!1. Multiple entities are stored in one table
!2. Attributes depend on non-key columns: transitive dependency.
-> example:
Orders
------------------------------------------------
order_id (PK) | customer_id | customer_name | city

here customer_name an attribute that depends on customer_id(which is a non-key column in this table), this dependency is also called transitive dependency.this causes anomalies- 
1. insert- can't add a new customer unless they make an order
2. update- any update on customer info is repeated
3. delete- deleting customer/order also deletes order/customer

!3. Data is repeated




/*
SOLUTION?
!Anomalies are symptoms. Normalization is the cure.

*/