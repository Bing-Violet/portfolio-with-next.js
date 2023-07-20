---
title: 'ACID'
date: 'July 19, 2023'
excerpt: 'This is my notes in learning database internals.'
cover_image: '/images/posts/database-logo.png'
alt: 'image'
tags: ['database','relational database', 'postgreSQL']
---

## Background

A transaction in a database management system is an indivisible and coherent unit of work that combines multiple operations into a single step. Its essential characteristics include atomicity, consistency, isolation, and durability, collectively known as ACID properties.\

PostgreSQL stands as a fully ACID-compliant system, emphasizing robust data integrity and efficient concurrency handling. To facilitate code reusability, PostgreSQL offers PL/pgSQL, a procedural language enabling the creation of functions, routines, as well as support for before and after triggers, views, materialized views, and partitioned tables. Concurrency Control is a critical mechanism within PostgreSQL, ensuring both atomicity and isolation—key aspects of the ACID properties.\

Here are the definition of ACID from *[Database Internals](https://learning.oreilly.com/library/view/database-internals/9781492040330/):\

### Atomicity
Transaction steps are indivisible, which means that either all the steps associated with the transaction execute successfully or none of them do. In other words, transactions should not be applied partially. Each transaction can either commit (make all changes from write operations executed during the transaction visible), or abort (roll back all transaction side effects that haven’t yet been made visible). Commit is a final operation. After an abort, the transaction can be retried.

### Consistency
Consistency is an application-specific guarantee; a transaction should only bring the database from one valid state to another valid state, maintaining all database invariants (such as constraints, referential integrity, and others). Consistency is the most weakly defined property, possibly because it is the only property that is controlled by the user and not only by the database itself.

### Isolation
Multiple concurrently executing transactions should be able to run without interference, as if there were no other transactions executing at the same time. Isolation defines when the changes to the database state may become visible, and what changes may become visible to the concurrent transactions. Many databases use isolation levels that are weaker than the given definition of isolation for performance reasons. Depending on the methods and approaches used for concurrency control, changes made by a transaction may or may not be visible to other concurrent transactions (see “Isolation Levels”).

### Durability
Once a transaction has been committed, all database state modifications have to be persisted on disk and be able to survive power outages, system failures, and crashes.

## References

*[Database Internals](https://learning.oreilly.com/library/view/database-internals/9781492040330/)
*[The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html)
*[Learn PostgreSQL: Build and manage high-performance database solutions using PostgreSQL 12 and 13](https://www.amazon.com.au/Learn-PostgreSQL-Luca-Ferrari/dp/183898528X)

