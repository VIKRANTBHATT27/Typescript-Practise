let score: number | string = 33;

score = 44;

score = "8234";


type User = {
     name: string;
     id: number;
}

type Admin = {
     username: string;
     id: number;
}

let hitesh: User | Admin = { name: "hitesh", id: 330, username: "abc" };

hitesh = { username: "hc", id: 330 };

console.log(typeof hitesh);
console.log(hitesh);


function getDBId(id: number | string) {
     if (typeof id === 'string') {
          id.toLowerCase();
     }
     if (typeof id === 'number') {
          id = id + 2    // no error here
     }

     // id.toLowerCase();          here it gives a error

     // id + 2 gives error

}

console.log();

const arr: (number | string)[] = [1, 2, 3, 4, 5, "23"];          //this is for mix

const arr2: number[] | string[] = [1,2,3,4];   // this is for either number array or string array

const data: Array<number | string> = ["heelo", 5, 7, "morning"];

for (let i: number=0; i<arr.length; i++) {
     if (typeof arr[i] === 'string') {
          arr[i] = Number(arr[i]);
     }
}

console.log(`arr: ${arr}`);


let character: "goku" | "sasuke" | "sukuna";

character = "sasuke";
// character = "naruto";     gives an error


export {}