let tUser: [string, number, boolean] = ["hello", 234, true];
// need to follow the order 

let rgb: [number, number, number] = [123, 43, 83];
// no extra value for opacity

type User = [number, string];

const newUser: User = [ 41, "one@example.com" ];

newUser[1] = "hc@example.com";

// newUser.push(true); 
// in earlier version this was allowed but not know


export {}