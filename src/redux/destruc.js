// Object Destructing
const Book = {
    title: "EGo is the enemy",
    author: "Ryan holiday",
    publisher:{
        name: "Penguin"
    }
}

const {name:publishername="Self-published"} = Book.publisher
console.log(publishername)

// Array Destructing
const item = ["Coffee (hot)", "$2.00", "$2:50", "$2:75"];
const [items, , price] = item;
console.log(`A medium ${items} costs ${price}`);
