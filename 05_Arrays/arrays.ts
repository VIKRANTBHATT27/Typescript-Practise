const superHeros: string[] = [];

superHeros.push("iron-man");
superHeros.push("captain america");

console.log(superHeros);


type Users = {
     name: string;
     age: number;
     city?: string;
     email?: string;
}


const allUsers: Array<Users> = [];

allUsers.push({ name: "rohan", age: 32 });
allUsers.push({ name: "priya", age: 45, email: "pri&34@example.com" });
allUsers.push({ name: "keshav", age: 75 });
allUsers.push({ name: "arpita", age: 21, city: "Bhopal" });

console.log(allUsers);


const Data: { city: string, AQI: Array<number[]> } = {
     city: "Bhopal",
     AQI: [         //array of 3 different location AQI of this city 
          [123, 432, 123, 90],              //morning, afternoon, evening, mid-night
          [234, 343, 213, 120],
          [234, 131, 323, 123]
     ]
};

console.log(Data);

// Array<number[]> can also be written as number[][] and same push 
// pop() ==> removes the last element of the array
/*
     function doSomething(value: Array<string>) {
           ...
     }
     
     let myArray: string[] = ["hello", "world"];
     
     // either of these work!
     doSomething(myArray);
     doSomething(new Array("hello", "world"));
*/

// readonly arrays ==> ReadonlyArray<string> no push or pop 

export {}