//db.employees.find({filter},{column name})
db.employees.find({department:"Operations"})
db.employees.find(
    {department:"Operations"},
    {_id:0, name:1,salary:1}
)
db.employees.find().limit(3)
db.employees.find().skip(2)
db.employees.find().limit(3).skip(1)
db.employees.find().sort({name:1})
db.employees.find().sort({name:-1})
db.employees.find().skip(1).limit(2).sort({name:-1})   