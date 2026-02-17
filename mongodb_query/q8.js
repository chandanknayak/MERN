
db.employees.find(
    {department:{$nin:["IT","HR"]}}
)


db.createCollection("students" );
show collections
db.students.renameCollection("mystudents")
db.mystudents.drop()
db.dropDatabase("lpu26b")