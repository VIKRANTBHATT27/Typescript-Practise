let response: any = "445";

let numericLength: number = (response as string).length;   // response. not available 
// this was type assertion

type Book = {
    name: string
}

let bookString = ' { name: "The Silent Patient" } ';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;       //type assertion

let newValue: unknown;

newValue = [1, 2, 3, 4.5];
newValue = "hello world";
newValue = 324;

if (typeof newValue === "string") {
    newValue.toUpperCase();     //gives suggestion + safe with unknown => bad or no error with any
}

try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    
    console.log("Error: ", error);
}


const data: unknown = "chai aur code";
const strData: string = data as string;

console.log(strData.length);
