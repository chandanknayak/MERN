 {
    $project: {

      // user fields
      _id: 1,
      name: 1,
      email: 1,
      role: 1,

      // NEVER expose password
      password: 0,
        // clean enrollments
    "enrollments.couurseId":1,
    "courses.title":1,
    "courses.price":1
    }
}
