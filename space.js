class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    get getName(){
        return `${this.name}`
    }
    get getAge(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, studentID, school){
        super(name, age);
        this.studentID = studentID;
        this.school = school;
    }
    get getStudentID(){
        return `${this.name}'s student ID is ${this.studentID}`;
    }
    get getSchoolName(){
        return `${this.name} currently attends ${this.school}`;
    }
}

class Worker extends Person{
    constructor (name, age, occupation, salary){
        super(name, age)
        this.occupation = occupation
        this.salary = salary;
        this.daysOff = 15;
    }
    get getOccupation () {
        return `${this.name} is a ${this.occupation}`
    }

    get getSalary() {
        return `${this.name} earns ${this.salary} per year`;
    }
    get RemainingDaysOff(){
        return this.daysOff
    }
    takeDaysOff(days){
        this.daysOff -= days;
    }
}

const student1 = new Student("Jason", 14, 4863, "Osseo Middle School");
// console.log(student1.getAge);
// console.log(student1.getStudentID);
// console.log(student1.getSchoolName);

const worker1 = new Worker("Ray", 25, "Construction Worker", 45000);
console.log(worker1.getAge);
console.log(worker1.getOccupation);
console.log(worker1.getSalary);
console.log(worker1.RemainingDaysOff);
worker1.takeDaysOff(5);
console.log(worker1.RemainingDaysOff)