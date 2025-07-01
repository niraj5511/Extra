const emp = [
  {
    name: "Aakash",
    salary: "10000",
  },
  {
    name: "Daya",
    salary: "50000",
  },
  {
    name: "Niraj",
    salary: "60000",
  },
];
const filData = emp.filter((value) => value.salary >= 30000);
console.log("Filtered Data: ", filData);
