let PharmacistManager = function (id , name) {
    this.id = [];
    this.name = [];

    this.id.push(id);
    this.name.push(name);

    this.getNameManager = function () {
        return this.name;
    }
    this.getIDManager = function () {
        return this.id;
    }
    this.addPharmacist = function (id , name) {
        this.id.push(id);
        this.name.push(name);
    }
};