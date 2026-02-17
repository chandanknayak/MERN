db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            grade: { $cond: [ { $gte: [ "$salary", 3000 ] }, "A", "B" ]
        }}
    }
    ]
),
db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            grade: {
                $cond: {if:{ $gte: [ "$salary", 3000 ] }, then:"A", else:"B" }
            }
        }}
    ]
)

db.employees.aggregate(
    [
        {$project:{ 
            _id:0,
            name:1,
            salary:1,   
            grade: {
                $switch: {
                    branches: [
                        {case: { $gte: [ "$salary", 4000 ] }, then: "A"},
                        {case: { $and: [ { $gte: [ "$salary", 3000 ] }, 
                        { $lt: [ "$salary", 4000 ] } ] }, then: "B"},
                    ],
                    default: "C"
                }   
            }
        }}
    ]
)
