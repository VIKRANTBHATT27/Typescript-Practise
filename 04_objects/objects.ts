
// way to write a function that returns a obj
function createCourse():{name: string, price: number} {
     return { name: "reactjs", price: 399 };
}

// how to pass more values than expected by a function in ts
function createAccount( {name, isActive} :{ name: string, isActive: boolean } ):void {
     console.log(`name => ${name} and the account is ${isActive ? "Active" : "Deactivated by the user"}`)
}


let userObj = { name: "hitesh", isActive: true, height: "6 feet" };

createAccount(userObj);


type User = {
     name: string;
     email: string;
     age: number;
     isPaid: boolean;
}

function createUser(user: User): User {
     // call to the database to save this user
     return user;
}

const user1 = { 
     name: "pratik", 
     email: "pratik.K53@yahoo.com", 
     age: 38, 
     isPaid: false, 
     city: "lucknow" 
}

// createUser({ 
//      name: "pratik", 
//      email: "pratik.K53@yahoo.com", 
//      age: 38, 
//      isPaid: false, 
//      city: "lucknow" 
// });

const result = createUser(user1);

console.log(result);


type freshId = {
     readonly _id: string;
     email: string;
     age: number;
     pass: string;
     cardNumber?: number;          //optional condition due to '?'
};

let Id1: freshId = {
     _id: "392847",
     email: "test1@example.com",
     age: 54,
     pass: "TEST_Example_1",
     cardNumber: 5678
}; 
let Id2: freshId = {
     _id: "923847",
     email: "test2@example.com",
     age: 29,
     pass: "TEST_Example_2"
};

Id2.age = 90;
// Id1._id = "892347";

// IF ID WAS AN ARRAY WE ARE ALLOWED TO PUSH VALUES IN IT

type cardNumber = {
     cardNum: number;
}

type cardDate = {
     date: string;
}

type cardHolder = {
     name: string;
}

type CARD = cardHolder & cardNumber & cardDate;

// combining 3 types

export {}