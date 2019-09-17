let Pharmacist = function (id , name , age , address) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;

    this.getID = function (id) {
        return this.id;
    };

    this.getName = function (name) {
        return this.name;
    };

    this.getAge = function (age) {
        return this.age;
    };

    this.getAddress = function (address) {
        return this.address;
    };
    this.setID = function () {
        this.id = id;
    };
    this.setName = function () {
        this.name = name;
    };
    this.setAge = function () {
        this.age = age;
    };
    this.setAddress = function () {
        this.address = address;
    }
};
