let specification = [
  {
    fName: "Peyman",
    age: 22,
  },
  {
    fName: "Beniamin",
    age: 30,
  },
  {
    fName: "Amir hosein",
    age: 10,
  },
  {
    fName: "Soheil",
    age: 80,
  },
  {
    fName: "Ali",
    age: 5,
  },
];

let sor = specification.sort((a, b) => {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
  if (a.age == b.age) return 0;
});
console.log(sor);
