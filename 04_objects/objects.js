"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// way to write a function that returns a obj
function createCourse() {
    return { name: "reactjs", price: 399 };
}
// how to pass more values than expected by a function in ts
function createAccount(_a) {
    var name = _a.name, isActive = _a.isActive;
    console.log("name => ".concat(name, " and the account is ").concat(isActive ? "Active" : "Deactivated by the user"));
}
var userObj = { name: "hitesh", isActive: true, height: "6 feet" };
createAccount(userObj);
function createUser(user) {
    // call to the database to save this user
    return user;
}
var user1 = {
    name: "pratik",
    email: "pratik.K53@yahoo.com",
    age: 38,
    isPaid: false,
    city: "lucknow"
};
// createUser({ 
//      name: "pratik", 
//      email: "pratik.K53@yahoo.com", 
//      age: 38, 
//      isPaid: false, 
//      city: "lucknow" 
// });
var result = createUser(user1);
console.log(result);
var Id1 = {
    _id: "392847",
    email: "test1@example.com",
    age: 54,
    pass: "TEST_Example_1",
    cardNumber: 5678
};
var Id2 = {
    _id: "923847",
    email: "test2@example.com",
    age: 29,
    pass: "TEST_Example_2"
};
Id2.age = 90;
