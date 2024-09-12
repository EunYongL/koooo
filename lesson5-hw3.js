let students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 88 }
];

function updatescore(students, studentname, newscore) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name = studentname) {
            students[i].score = newscore
        };
    };
}


updatescore(students, 'Bob', 95);

console.log(students[1].name + ': ' + students[1].score); 