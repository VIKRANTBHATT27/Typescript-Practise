console.log("working");

class takePhoto {
     constructor(
          public cameraType: string = 'dslr',
          public filter: string = 'black&white',
     ) {}
};

function identify<Type> (val: Type): Type {
     return val;
}

const anotherIdentityCheck = <T,> (myVal: T): T => {
     return myVal;
}

interface Bottle {
     brand: string;
     hexColor: number;
}

identify<Bottle> ({ brand: "cello", hexColor: 212121 });

function anotherFunction <T,K> (val1: T, val2: K): object {
     return {
          val1,
          val2
     }
}

const result = anotherFunction(3, "3");
console.log(result);


interface Quiz {
     name: string,
     type: string
}

interface Course {
     name: string,
     author: string,
     subject: string
}

class Sellable<t> {
     public cart: Array<t> = [];

     addToCart(product: t) {
          this.cart.push(product);
     }
}

// Example 1: Sellable with Quiz
const quizStore = new Sellable<Quiz>();
quizStore.addToCart({ name: "Math Quiz", type: "multiple-choice" });
quizStore.addToCart({ name: "Science Quiz", type: "true-false" });
console.log(quizStore.cart);

// Example 2: Sellable with Course
const courseStore = new Sellable<Course>();
courseStore.addToCart({ name: "TypeScript Basics", author: "Hitesh", subject: "Programming" });
courseStore.addToCart({ name: "Backend Course", author: "Hitesh", subject: "Full-Stack" });
console.log(courseStore.cart);

// Example 3: Sellable with string
const bookStore = new Sellable<string>();
bookStore.addToCart("TypeScript Book");
bookStore.addToCart("JavaScript Book");
console.log(bookStore.cart);

export {}