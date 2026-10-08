type Chai = {
    name: string;
    price: number;
}

const chaiArray: Chai[] = [
    { name: "masala chai", price: 15 },
    { name: "adrak chai", price: 20 },
];

const cities: readonly string[] = ["Delhi", "Pune"];
// cities.push("Patna");        //error at this line as it is readonly type

let chaiTyple: [string, number];
chaiTyple = ["normal", 5];

let userInfo: [string, number, boolean?];
userInfo = ["Ramesh", 22, false];
userInfo = ["Hitesh", 80];


let locaitonCoordinates: readonly [number, number] = [43.54, 23.41];

// Tuple labels document what each position means and improve editor hints;
// they don't change the tuple type or runtime behavior versus [string, number].
const chaiItems: [name: string, price: number] = ["masala tea", 18];

enum CupSize {      //standard practise to have capitalize values
    SMALL,
    MEDIUM,
    LARGE,
    EXTRA_LARGE
}

const size = CupSize.EXTRA_LARGE;

enum Status {
    PENDING = 400,
    SERVED,        //either define values of them or default will have incremental values like 401, 402
    CANCELLED,
}


enum ChaiType {
    MASALA = "masala chai",
    GINGER = "ginger chai"
}

function makeChai (type: ChaiType): void {
    console.log(`making ${type}....`);
}

makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);

const enum Sugar {
    LOW = 1,
    MID = 2,
    HIGH = 3
}

const sugar = Sugar.HIGH;
console.log(sugar);