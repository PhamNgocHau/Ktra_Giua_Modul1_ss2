let Rat = function (name,weight,speed,status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;

    this.say = function () {
        return console.log(this.name + ' : Chit chit');
    };
    this.showStatus = function () {
        if(this.status){
            console.log('Jerry is living');
        } else {
            console.log('Jerry is Death');
        }
    }
};

let Cat = function (name , weight ,speed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = speed;

    this.say = function () {
        return console.log(this.name + ' : Meo Meo');
    };

    this.catchRat = function (jerry) {
        if(jerry.status && this.maxSpeed > jerry.speed){
            return true;
        }
        return false;
    };

    this.eatRat = function (jerry) {
        if(this.catchRat(jerry)){
            console.log('Tom eat');
            this.weight += jerry.weight;
            jerry.status = false;
        }
        else {
            console.log('Jerry was gone...!!');
        }
        console.log(this.weight);
    }
};

let jerry = new Rat('Jerry' , 2 , 5,true);
let tom = new Cat('Tom', 10 , 10);

tom.say();
jerry.say();
tom.catchRat(jerry);
tom.eatRat(jerry);

let jerry1 = new Rat('Jerry1',2,10,true);
let tom1 = new Cat('Tom1' , 5 , 8);
tom1.say();
jerry1.say();
tom1.catchRat(jerry1);
tom1.eatRat(jerry1);
