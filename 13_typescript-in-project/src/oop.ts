class Chai {
    flavour: string;
    price: number

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;

        console.log(this);
    }
}

let masalaChai = new Chai("masala", 15);

/* access modifiers */
class Tea {
    public flavour: string = 'masala';

    private secretIngredient = "Cardomom";

    reveal(): string {
        return `secretIngredienet is ${this.secretIngredient}`;      //good
    }
}

console.log(new Tea().reveal());


class Shop {
    protected shopName: string = "Chai corner";
}

class Branch extends Shop {
    showName(): void {
        console.log(`name is ${this.shopName}`);        //good
    }
}

new Branch().showName();


class Wallet {
    #balance: number = 1;        //private variable

    readonly loanAmount: number = 1000;

    getBalance(): string {
        return `balance: ${this.#balance}`
    }

    constructor(amount: number) {
        this.loanAmount = amount;       // readonly properties can be assigned in the constructor
        console.log(`loan amount is ${this.loanAmount}`);
    }
}

const w = new Wallet(500)
// w.loanAmount = 500;      //we can't assign it here
console.log(w.getBalance())


class ModernChai {
    private _sugar = 2;     //private variables are named as _variableName

    get sugar(): number {
        return this._sugar;
    }

    set sugar(val: number) {
        if (val > 5) throw new Error("Too sweet");
        this._sugar = val;
    }
}

const c = new ModernChai();
c.sugar = 4;
console.log(c.sugar);


// static is used with class name not with object of it
class EkChai {
    static shopName = "chai aur code";

    constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

// abstract class blueprint for other class by not having it's instance / object
abstract class Drink {
    abstract make(): void
}

class myChai extends Drink {
    make(): void {
        console.log("brewing chai");
    }
}


// composition also used instead of extends or interhance of base class
class Heater {
    heat() {}
}

class ChaiMaker {
    constructor(private heater: Heater) {}       
    //made a private variable whose data type is same as another class i.e. Heater, therefore we can use it's properties and methods in this class

    make() {
        this.heater.heat();
    }
}

// for stip only mode: use =>  node --experimental-transform-types fileName