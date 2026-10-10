interface Shop {        //same as type
    readonly id: number,
    name: string
}

const s: Shop = {
    id: 1,
    name: "chai ki dukan"
}

interface Discount {
    (price: number): number
}

const apply50: Discount = (p: number) => p * 0.5;

interface TeaMachine {
    start(): void,
    stop(): void
}

const machine: TeaMachine = {
    start() {
        // do something
    },
    stop() {
        console.log("stop");
    }
}

interface ChaiRatings {
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    masala: 5,
    elaichi: 3,
    ginger: 4,
}

// interface gets merge
interface User { name: string }
interface User { age: number }

const u: User = { name: "hitesh", age: 43 }

interface A { a: string }
interface B { b: number }

interface C extends A, B {
    c: boolean
}

const eg1: C = {
    a: "hello",
    b: 42,
    c: true
}