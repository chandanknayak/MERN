//modules collection
db.modules.insertOne({
  _id: "m1",
  courseId: "c1",
  title: "Introduction to MongoDB",
  order: 1,
});

db.modules.insertOne({
  _id: "m2",
  courseId: "c1",
  title: "CRUD Operation",
  order: 2,
});

db.modules.insertOne({
  _id: "m3",
  courseId: "c1",
  title: "Aggregate Pipelines",
  order: 3,
});
db.modules.insertOne({
  _id: "c2_m1",
  courseId: "c2",
  title: "Introduction to Nodejs",
  order: 1,
});
db.modules.insertOne({
  _id: "c2_m2",
  courseId: "c2",
  title: "Asynchronous Programming",
  order: 2,
});
db.modules.insertOne({
  _id: "c2_m3",
  courseId: "c2",
  title: "Express Framework",
  order: 3,
});

