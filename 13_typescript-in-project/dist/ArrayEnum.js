"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiArray = [
    { name: "masala chai", price: 15 },
    { name: "adrak chai", price: 20 },
];
const cities = ["Delhi", "Pune"];
// cities.push("Patna");        //error at this line as it is readonly type
let chaiTyple;
chaiTyple = ["normal", 5];
let userInfo;
userInfo = ["Ramesh", 22, false];
userInfo = ["Hitesh", 80];
let locaitonCoordinates = [43.54, 23.41];
// Tuple labels document what each position means and improve editor hints;
// they don't change the tuple type or runtime behavior versus [string, number].
const chaiItems = ["masala tea", 18];
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
    CupSize[CupSize["EXTRA_LARGE"] = 3] = "EXTRA_LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.EXTRA_LARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 400] = "PENDING";
    Status[Status["SERVED"] = 401] = "SERVED";
    Status[Status["CANCELLED"] = 402] = "CANCELLED";
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala chai";
    ChaiType["GINGER"] = "ginger chai";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`making ${type}....`);
}
makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);
var Sugar;
(function (Sugar) {
    Sugar[Sugar["LOW"] = 1] = "LOW";
    Sugar[Sugar["MID"] = 2] = "MID";
    Sugar[Sugar["HIGH"] = 3] = "HIGH";
})(Sugar || (Sugar = {}));
const sugar = Sugar.HIGH;
console.log(sugar);
//# sourceMappingURL=ArrayEnum.js.map