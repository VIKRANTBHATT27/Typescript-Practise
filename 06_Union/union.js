var score = 33;
score = 44;
score = "8234";
var hitesh = { name: "hitesh", id: 330, username: "abc" };
hitesh = { username: "hc", id: 330 };
console.log(typeof hitesh);
console.log(hitesh);
function getDBId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    if (typeof id === 'number') {
        id = id + 2; // no error here
    }
    // id.toLowerCase();          here it gives a error
    // id + 2 gives error
}
var arr = [1, 2, 3, 4, 5, "23"];
var data = ["heelo", 5, 7, "morning"];
for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        arr[i] = Number(arr[i]);
    }
}
console.log("arr: ".concat(arr));
