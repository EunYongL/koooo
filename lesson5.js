let students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 88 }
];

let sum = 0
for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].score
}
const average = sum / students.length

console.log(average); 
