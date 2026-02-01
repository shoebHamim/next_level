/*
Database Models
!1. Hierarchical Model (core problem: child node can't have multiple parents )
 -Structure: Tree(parent--> child)
 - No Many to Many relation
 - Modern Analogy: Folder structure
!2. Network Model (core problem: complex, hard to maintain, lack of standard)
- Structure: Graph-like 

!3. Relational Model ⭐
- Structure: Tables(rows & columns)
Strength:
1. Strong Consistency(ACID)
2. Powerful Querying (SQL)
3. Data Integrity

Weakness:
1. Harder to scale horizontally
2. Schema changes are costly

!4. Object-Based Model
- Structure: Objects (like OOP)
Strengths
1. Matches OOP languages
3. No ORM needed
Problems
1. Poor querying
2. Weak standardization

!5. NoSQL Model - not only SQL/ non-SQL
!5.1 Key-Value Model
Structure: Key-Value Pair
Redis, DynamoDB


!5.2 Document Model
Structure: JSON documents
MongoDB


*/