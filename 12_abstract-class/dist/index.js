console.log("working");
class takePhoto {
    cameraType;
    filter;
    constructor(cameraType = 'dslr', filter = 'black&white') {
        this.cameraType = cameraType;
        this.filter = filter;
    }
}
;
function identify(val) {
    return val;
}
const anotherIdentityCheck = (myVal) => {
    return myVal;
};
identify({ brand: "cello", hexColor: 212121 });
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
const result = anotherFunction(3, "3");
console.log(result);
class Sellable {
    cart = [];
    addToCart(product) {
        this.cart.push(product);
    }
}
// Example 1: Sellable with Quiz
const quizStore = new Sellable();
quizStore.addToCart({ name: "Math Quiz", type: "multiple-choice" });
quizStore.addToCart({ name: "Science Quiz", type: "true-false" });
console.log(quizStore.cart);
// Example 2: Sellable with Course
const courseStore = new Sellable();
courseStore.addToCart({ name: "TypeScript Basics", author: "Hitesh", subject: "Programming" });
courseStore.addToCart({ name: "Backend Course", author: "Hitesh", subject: "Full-Stack" });
console.log(courseStore.cart);
// Example 3: Sellable with string
const bookStore = new Sellable();
bookStore.addToCart("TypeScript Book");
bookStore.addToCart("JavaScript Book");
console.log(bookStore.cart);
export {};
//# sourceMappingURL=index.js.map