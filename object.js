const student = {
    name: "Sourav",
    age: 22,
    message: function () {
        console.log(this.name);
    }
};
student.message();