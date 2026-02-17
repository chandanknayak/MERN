db.orders.insertOne({
    empid:ObjectId('69803420c22bbc1ce0628ca2'),
    product:"Laptop",
    orderValue:21000
})
db.orders.insertOne({
    empid:ObjectId('698038c1c22bbc1ce0628ca3'),
    product:"Desktop",
    orderValue:41000
})
db.orders.insertOne({
    empid: ObjectId('698038c1c22bbc1ce0628ca4'),
    product:"mouse",
    orderValue:1000
})
db.orders.insertOne({
    empid:ObjectId('698038c1c22bbc1ce0628ca6'),
    product:"Keyborad",
    orderValue:2000
})
db.orders.aggregate([
    {
        $lookup:{
            from:"employees",
            localField:"empid",
            foreignField:"_id",
            as:"employeeDetails"
        }
    }
])
db.employees.aggregate([
    {
        $lookup:{  
            from:"orders",
            localField:"_id",
            foreignField:"empid",
            as:"orderDetails"
        }
    }
])
db.employees.aggregate([
    {
        $lookup:{  
            from:"orders",
            localField:"_id",
            foreignField:"empid",
            as:"orderDetails"
        }
    },
    {
        $unwind:"$orderDetails"
    },
{
    $project:{
        _id:0,
        name:1,
        product:"$orderDetails.product",
        orderValue:"$orderDetails.orderValue"
    }
}
])
db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] }
          }
        },
        {
          $project: {
            _id: 0,
            product: 1,
            orderValue: 1
          }
        }
      ],
      as: "orderDetails"
    }
  },
  {
    $unwind: "$orderDetails"
  },
  {
    $project: {
      _id: 0,
      name: 1,
      "orderDetails.product": 1,
      "orderDetails.orderValue": 1
    }
  }
])

db.empdetails.insertMany([
    {
        eid:ObjectId('69803420c22bbc1ce0628ca2'),
        City:"Hyderabad",
        State:"Telangana"
    },
    {
        eid:ObjectId('698038c1c22bbc1ce0628ca3'),
        City:"Bangalore",
        State:"Karnataka"
    },
    {
        eid:ObjectId('698038c1c22bbc1ce0628ca4'),
        City:"Chennai",
        State:"Tamil Nadu"
    },
    {
        eid:ObjectId('698038c1c22bbc1ce0628ca5'),
        City:"Mumbai",
        State:"Maharashtra"
    },
    {
        eid:ObjectId('698038c1c22bbc1ce0628ca6'),
        City:"Pune",
        State:"Maharashtra"
    },
    {
        eid:ObjectId('698038c1c22bbc1ce0628ca7'),
        City:"Delhi",
        State:"Delhi"
    },
    {
        eid:ObjectId('698192d774fca8f72f628ca0'),
        City:"Noida",
        State:"Uttar Pradesh"
    },
    {
        eid:ObjectId('698192d774fca8f72f628ca1'),
        City:"Gurgaon",
        State:"Haryana"
    },
    {
        eid:ObjectId('698192d774fca8f72f628ca2'),
        City:"Chandigarh",
        State:"Punjab"
    }

])
db.employees.aggregate([
    {
        $lookup:{
            from:"empdetails",
            localField:"_id",
            foreignField:"eid",
            as:"empdetails"
        }
    },
    {
        $lookup:{  
            from:"orders",
            localField:"_id", 
            foreignField:"empid",
            as:"orderDetails"
        }   
    },
])  