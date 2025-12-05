var seatChoice;
(function (seatChoice) {
    seatChoice["AISEL"] = "aisel";
    seatChoice[seatChoice["MIDDLE"] = 20] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 10] = "WINDOW";
    seatChoice["next_to_your_crush"] = "infinite aura";
})(seatChoice || (seatChoice = {}));
;
var mySeat = seatChoice.next_to_your_crush;
console.log(mySeat);
