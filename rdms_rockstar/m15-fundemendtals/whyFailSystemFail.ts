
//! issues with storing data using file system
// 1. Multiple formats(txt,json,csv,..), no standard to store data
// 2. Searching data is hard and slow as data is unstructured(no indices)
// 3. no concurrent protocol(multiple users updates the same data) - DBMS
//    provides locks, transactions, isolation levels
// 4. No transactions and rollbacks(fails to maintain ACID property) 
// 5. Data integrity and constrains is not maintained
// 6. No relationships between data
// 7. Scalability problems: DBMS provides replications, sharding, clustering, distributed storage
// 8. Backup and recovery: easier in DBMS
// 4. Security issue: Robust security in DBMS

// ! What DBMS provides
/*
1. indexing
2. Query Language
3. Transactions
3. Concurrency protocol
4. Integrity constraints
5. Backup and recovery
6. Security
7. Optimization
*/

