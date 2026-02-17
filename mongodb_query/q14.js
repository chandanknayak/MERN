db.employees.find({name:1,dept:"$department"});

db.users.insertOne(
    {name:"priyanshu",
    age:21,
    address:{addr1:"402 Handa Complex",city:"Phagwara",state:"Punjab"}}
);
db.users.insertOne(
    {name:"puneet",
    age:21,
    address:{addr1:"312 Handa Complex",city:"Phagwara",state:"Punjab"}}
);
db.users.insertOne(
    {name:"sami",
    age:21,
    address:{addr1:"402 satnampura",city:"Phagwara",state:"Punjab"}}
);
db.users.find({},{age:1,name:1,city:"$address.city",_id:0});
db.users.updateMany({},{$set:{skills:["java","python","mongodb"]}});
db.users.updateOne({name:"Chandan"},{$addToSet:{skills:".NET"}});
db.users.aggregate([{
    $project:{
        _id:0,
        name:1,
        skills:1
}
},
{$unwind:"$skills"}])