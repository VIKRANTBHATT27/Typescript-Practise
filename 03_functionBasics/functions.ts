function addTwo(num: number): number {
     return num + 2;
}

function getUpper(val: string) {
     return val.toUpperCase();
}

function signUp(name: string, email: string, isSubscribed: boolean) {
     if (isSubscribed) return { name, email };
}

const logIn = (email: string, password: string, agreeTerms: boolean = false) => {
     console.log(`your name is ${email} and your password is matching in DB`);
     console.log("system allows you to logIn");
}

let myValue = addTwo(5);
getUpper("tuesday");
signUp("rohan", "sharma.rohan@gmail.com", false);
logIn("0105IT231148@oriental.in", "abcdefgh12345678");

// function getValue(myNum: number) {
//      if (myNum > 0) return true;
//      return "num is not greater than zero";
// }

const heros = ['ironman', 'spiderman', 'hulk', 'superman'];

heros.forEach(
     (hero: string):void => console.log(`hero is ${hero}`)
);

function fail(msg: string) :never {
     throw new Error(msg);
}




export {}