"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    flavour;
    price;
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
        console.log(this);
    }
}
let masalaChai = new Chai("masala", 15);
/* access modifiers */
class Tea {
    flavour = 'masala';
    secretIngredient = "Cardomom";
    reveal() {
        return `secretIngredienet is ${this.secretIngredient}`; //good
    }
}
console.log(new Tea().reveal());
class Shop {
    shopName = "Chai corner";
}
class Branch extends Shop {
    showName() {
        console.log(`name is ${this.shopName}`); //good
    }
}
new Branch().showName();
class Wallet {
    #balance = 1; //private variable
    loanAmount = 1000;
    getBalance() {
        return `balance: ${this.#balance}`;
    }
    constructor(amount) {
        this.loanAmount = amount; // readonly properties can be assigned in the constructor
        console.log(`loan amount is ${this.loanAmount}`);
    }
}
const w = new Wallet(500);
// w.loanAmount = 500;      //we can't assign it here
console.log(w.getBalance());
class ModernChai {
    _sugar = 2; //private variables are named as _variableName
    get sugar() {
        return this._sugar;
    }
    set sugar(val) {
        if (val > 5)
            throw new Error("Too sweet");
        this._sugar = val;
    }
}
const c = new ModernChai();
c.sugar = 4;
console.log(c.sugar);
// static is used with class name not with object of it
class EkChai {
    flavour;
    static shopName = "chai aur code";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName);
// abstract class blueprint for other class by not having it's instance / object
class Drink {
}
class myChai extends Drink {
    make() {
        console.log("brewing chai");
    }
}
// composition also used instead of extends or interhance of base class
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    //made a private variable whose data type is same as another class i.e. Heater, therefore we can use it's properties and methods in this class
    make() {
        this.heater.heat();
    }
}
// for stip only mode: use =>  node --experimental-transform-types fileName
//# sourceMappingURL=oop.js.map