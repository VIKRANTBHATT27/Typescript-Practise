"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tea;
tea = {
    name: 'masala chai',
    price: 20,
    isHot: true
};
const updatedChai = (updates) => {
    console.log('updating chai with ', updates);
};
updatedChai({ price: 25 });
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: 'lemon chai',
    qty: 10
});
const customerCoffee = {
    name: "latte",
    price: 150
};
const vipCoffee = {
    name: "cold coffee",
    price: 250,
    qty: 1,
    isHot: true
};
// void means the return value should be ignored,
// undefined means the function explicitly returns an uninitialized state, 
// null means the function intentionally returns a value representing "nothing.
// optional or default params of function are written at last in function params
//# sourceMappingURL=objectTs.js.map