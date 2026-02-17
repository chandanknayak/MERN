
db.createView("orderView","employees",[
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
},

])
https://www.mongodb.com/try/download/database-tools