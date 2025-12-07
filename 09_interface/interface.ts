interface User {
     readonly dbId: number
     name: string,
     email: string,
     gender: "Male" | "Female",
     googleId?: string,

     freeTrial: () => string
     // freeTrail(): string  2nd way of writing the function

     details: () => void,
     getCoupon: (couponNo: string, value: number) => string;
}

interface User {
     githubToken: string,
}

interface Admin extends User {
     role: 'admin' | 'TA' | 'learner';
}

const Rakesh: User | Admin = { 
     dbId: 234, 
     name: "rakesh", 
     gender: 'Male',
     email: "rakesh@yahoo.com",
     
     githubToken: "github.com",
     role: 'TA',

     freeTrial: () => {
          return `free trial for ${Rakesh.email} is for 7 days`;
     },

     details: () => {
          console.log(`userName: ${Rakesh.name}`);
          console.log(`Email: ${Rakesh.email}`);
          console.log(`dbId: ${Rakesh.dbId}`);
          
          console.log(`googleId: ${Rakesh.googleId}`);
     },
     
     getCoupon: (couponNo: string, off: number) => {
          // valid check for db
          return `${Rakesh.name} has a ${off}% off on items.`;
     }
};

console.log();
Rakesh.details();

const result = Rakesh.getCoupon("hitesh10", 10);
console.log(result);
console.log();
