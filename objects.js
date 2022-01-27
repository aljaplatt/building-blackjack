// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};

console.log(course.length);
console.log(course["tags"]); // when to use bracket notation with objects

const castle = {
  name: "Helms Deep",
  rooms: 12,
  hasMoat: true,
  residents: ["Elves", "Men", "Dwarves", "wizards"],
};
