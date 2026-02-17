db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date()
});
db.employees.insertMany([{
  name: "Alice Johnson",
  email: "alice@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "TX"],
  date: Date()
},
{
  name: "Bob Williams",
  email: "bob@gmail.com",
  department: "Finance",
  salary: 1600,
  location: ["TX", "WA"],
  date: Date()
},
{
  name: "Carol Brown",
  email: "carol@gmail.com",
  department: "Marketing",
  salary: 1350,
  location: ["IL", "GA"],
  date: Date()
},
{
    name: "David Wilson",
    email: "david@gmail.com",
    department: "IT",
    salary: 1500,
    location: ["FL", "CA"],
    date: Date()
},
{
    name: "Eva Davis",
    email: "eva@gmail.com",
    department: "Operations",
    salary: 1400,
    location: ["WA", "OR"],
    date: Date()
}
]);