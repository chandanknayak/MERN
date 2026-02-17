db.employees.find(
    {email:"john@gmail.com"}
).explain("executionStats");
db.employees.createIndex({email:1});
db.employees.getIndexes();
db.employees.dropIndex("email_1")
db.employees.find({},{_id:0,name:1}).collation({locale:"en",strength:2}).sort({name:1})