let students = [];

students.push({"name":"박규원","math": 60,"Korean": 40, "English": 40,});
students.push({ "name":"김이후", "math": 40, "Korean": 50, "English": 20,})
students.push({ "name":"고훈정", "math": 50, "Korean": 20, "English": 80,})

function getSumOf (student) {
  return student.math + student.Korean + student.English;
}
function getAverageOf (student) {
  return getSumOf(student) / 3;
}

let output = "name\t총점\t평균\n";
for (const s of students) {
  output += `${s.name}\t${getSumOf(s)}점\t${getAverageOf(s)}점\n`
}
console.log(output);
