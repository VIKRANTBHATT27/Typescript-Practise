"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isSubscribed) {
    if (isSubscribed)
        return { name: name, email: email };
}
var logIn = function (email, password, agreeTerms) {
    if (agreeTerms === void 0) { agreeTerms = false; }
    console.log("your name is ".concat(email, " and your password is matching in DB"));
    console.log("system allows you to logIn");
};
var myValue = addTwo(5);
getUpper("tuesday");
signUp("rohan", "sharma.rohan@gmail.com", false);
logIn("0105IT231148@oriental.in", "abcdefgh12345678");
// function getValue(myNum: number) {
//      if (myNum > 0) return true;
//      return "num is not greater than zero";
// }
var heros = ['ironman', 'spiderman', 'hulk', 'superman'];
heros.forEach(function (hero) { return console.log("hero is ".concat(hero)); });
