class Person{
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    getdescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Traveller extends Person{
    constructor(name,age,city){
        super(name,age);
        this.city = city;
    }
    getdescription(){
        let desc = super.getdescription();
        if(!!this.city){
            desc =  desc + ` I am visting from ${this.city}`;
        }
        return desc;
    }
}

const me = new Traveller("Akshit",26,"India");
console.log(me.getdescription());

const other = new Traveller();
console.log(other.getdescription());
