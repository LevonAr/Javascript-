var Students = [ 
    { rollNo: 21, name: 'Alpha' }, 
    { rollNo: 22, name: 'Beta' }, 
    { rollNo: 23, name: 'Gamma' },
]; 
var StudentRollNo = []; 
Students.forEach(function (Student) { 
    StudentRollNo.push(Student.rollNo); 
}); 
console.log(StudentRollNo); 
