db.users.insertOne({
  _id: "u3",
  name: "admin",
  email: "admin@gmail.com",
  password: "1234",
  role: "admin", // student | instructor | admin
});

db.users.aggregate([

  // Step 1: join enrollments
  {
    $lookup: {
      from: "enrollments",
      localField: "_id",
      foreignField: "studentId",
      as: "enrollments"
    }
  },

  // Step 2: join courses using pipeline lookup
  {
    $lookup: {
      from: "courses",
      let: { courseIds: "$enrollments.courseId" },
      pipeline: [
        {
          $match: {
            $expr: {
              $in: ["$_id", "$$courseIds"]
            }
          }
        }
      ],
      as: "courses"
    }
  },
{
  $project: {

    _id: 1,
    name: 1,
    email: 1,
    role: 1,

    //password: 0,

    "enrollments.couurseId": 1,
    "courses.title": 1,
    "courses.price": 1
  }
},
{
    unwind:"$enrollments",
    unwind:"$courses"
}

])
db.users.find({email:"rahul@gmail.com})