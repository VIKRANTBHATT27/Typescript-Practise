"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "445";
let numericLength = response.length; // response. not available 
let bookString = ' { name: "The Silent Patient" } ';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
const inputElement = document.getElementById("username"); //type assertion
let newValue;
newValue = [1, 2, 3, 4.5];
newValue = "hello world";
newValue = 324;
if (typeof newValue === "string") {
    newValue.toUpperCase(); //gives suggestion + safe with unknown => bad or no error with any
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error: ", error);
}
const data = "chai aur code";
const strData = data;
console.log(strData.length);
//# sourceMappingURL=moreTypes.js.map