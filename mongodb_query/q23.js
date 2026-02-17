//create a folder mongo-replica
//create folder -Us,uk,india
//inside mongo-replica folder
// mongod -replSet rs1 --dbpath  "d:\mongo-replica\india" --port 27018
// mongod -replSet rs1 --dbpath  "d:\mongo-replica\UK" --port 27019
// mongod -replSet rs1 --dbpath  "d:\mongo-replica\India" --port 27020
//mongosh  --port 27018 login in new tab
rs.initiate({
    _id:"rs1",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"},
        {_id:2,host:"127.0.0.1:27020"}
    ]
})
// rs.config()
// rs.status()
//new tab
//mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"
db.mydatabase.users.insertOne({
    name:"priya",age:21
})
db.mydatabase.users.find()
//mongosh --port 27019 
//db.getMongo().setReadPref("secondary")
//use mydatabase