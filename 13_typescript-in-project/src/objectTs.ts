let tea : {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: 'masala chai',
    price: 20,
    isHot: true
}


type Item = { name: string, quantity: number }
type Address = { street: string, pincode: number }

type order = {
    id: string;
    items: Array<Item>;
    address: Address;
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updatedChai = (updates: Partial<Chai>) => {       //make all values of Chai type as optional
    console.log('updating chai with ', updates);
}

updatedChai({ price: 25 });

type ChaiOrder = {
    name?: string
    qty?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {        //all values are neccessary / required
    console.log(order);
}

placeOrder({
    name: 'lemon chai',
    qty: 10
})


type Coffee = {
    name: string;
    price: number;
    qty: number;
    isHot: boolean;
    secretIngrediants: string[]   //or Array<String>
}

type BasicCoffeeInfo = Pick<Coffee, "name" | "price">;      //picks few props (Preciously)

const customerCoffee: BasicCoffeeInfo = {
    name: "latte",
    price: 150
}

type SpecialCoffee = Omit<Coffee, "secretIngrediants">;     //remove

const vipCoffee: SpecialCoffee = {
    name: "cold coffee",
    price: 250,
    qty: 1,
    isHot: true
}

// void means the return value should be ignored,
// undefined means the function explicitly returns an uninitialized state, 
// null means the function intentionally returns a value representing "nothing.

// optional or default params of function are written at last in function params