/*

Normalization is a process/set of rules of organizing tables so that

1. data is not duplicated unnecessarily
2. updates don’t cause inconsistencies
3. inserts and deletes don’t accidentally destroy facts

All those ugly problems are called anomalies.


!Normalization golden line
Every non-key attribute must depend on the key, the whole key, and nothing but the key


!1NF:No repeating groups, Atomic values only.
-> anomalies still remains.
!2NF: Be in 1NF AND no partial dependency on a composite key

!3NF: Be in 2NF AND no transitive dependency: column depending on non key attribute

*/