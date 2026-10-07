"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let channelName = "Chaiaurcode";
channelName = 123;
let valArr = ['23', '21', '25', true, 12, undefined];
console.log(valArr);
/* typeNarrowing */
function Input(str) {
    if (str) {
        return `we got string as a value: ${str}`;
    }
    return `no value is passed therefore returning default value`;
}
console.log(Input("Hello ramesh"));
console.log(Input());
/* exhaustive checks */
class KulhadChai {
    serve() {
        return `we are making kulhad chai`;
    }
}
;
class GingerChai {
    serve() {
        return `we are making ginger chai`;
    }
}
;
function makeMyTea(chai) {
    if (chai instanceof KulhadChai) {
        chai.serve(); // 100% returns KulhadChai serve function
    }
    chai.serve(); // 100% returns GingerChai serve function
}
//unknown is better as it adapt to the variable type later on while any means won't care of data types
function isChaiOrder(obj) {
    //a function to check and true if it's ChaiType
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    const chai = obj;
    return (typeof chai.type === 'string' &&
        typeof chai.amount === 'number' &&
        (chai.sugar === 'less' ||
            chai.sugar === 'more' ||
            chai.sugar === 'no sugar'));
}
const order = {
    type: 'masala chai',
    amount: 2,
    sugar: "more"
};
function serveChaiCoffee(item) {
    if (isChaiOrder(item)) { //type predicate
        return `Serving ${item.amount} cups of ${item.type} of ${item.sugar} sugar`;
    }
    return `Serve Coffee`;
}
const incoming = JSON.parse('{"type":"ginger chai","amount":1,"sugar":"more"}');
if (isChaiOrder(incoming)) {
    console.log(serveChaiCoffee(incoming));
}
else {
    console.log('Invalid order');
}
function MakeTea(order) {
    switch (order.type) {
        case "masala":
            console.log("making masala chai");
            break;
        case "ginger":
            console.log("making ginger tea");
            break;
        case "elaichi":
            console.log("making elaichi tea");
            break;
    }
}
function brew(order) {
    if ("spiceLevel" in order) {
        console.log(`Making masala chai with spice level ${order.spiceLevel}`);
        return;
    }
    console.log(`making ginger tea with sugar as ${order.sugar}`);
    return;
}
//# sourceMappingURL=typesInTypescript.js.map