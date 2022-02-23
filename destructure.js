const student = {
    name: "Sourav",
    age: 22,
    message: function () {
        console.log(this.name);
    }
};

const printName = ({ name: myName }) => console.log("inside method " + myName);
const printName2 = ({ name }) => console.log("inside method " + name);

printName(student);
printName2(student);

const { name, age } = student;
console.log("outside method " + name + age);

const { prop1, prop2 } = student;
console.log("outside method " + prop1 + prop2);