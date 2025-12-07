var Rakesh = {
    dbId: 234,
    name: "rakesh",
    gender: 'Male',
    email: "rakesh@yahoo.com",
    freeTrial: function () {
        return "free trial for ".concat(Rakesh.email, " is for 7 days");
    },
    details: function () {
        console.log("userName: ".concat(Rakesh.name));
        console.log("Email: ".concat(Rakesh.email));
        console.log("dbId: ".concat(Rakesh.dbId));
        console.log("googleId: ".concat(Rakesh.googleId));
    },
    getCoupon: function (couponNo, off) {
        // valid check for db
        return "".concat(Rakesh.name, " has a ").concat(off, "% off on items.");
    }
};
console.log();
Rakesh.details();
var result = Rakesh.getCoupon("hitesh10", 10);
console.log(result);
console.log();
