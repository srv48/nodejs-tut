const ar = ["Sourav", 123];
ar.push("hello");

const copyar = [...ar]
console.log(copyar);

const student = {
    name: "Sourav",
    age: 22,
    message: function () {
        console.log(this.name);
    }
};
const copyar2 = {
    ...student
};
console.log(copyar2);

// ... spread operator to pull put individual elements

const bundle = (...arg) => { return arg; }
console.log(bundle(1, 2, 3, 4, 5, 6));

// ... rest operator bundles arguments to an array