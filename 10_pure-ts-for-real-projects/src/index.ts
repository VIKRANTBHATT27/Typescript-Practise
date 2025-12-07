console.log("hello-typescript! ");
console.log('typescript is alive');

class User {
     protected _kandaniPesaa: number = 100;

     name: string;
     email: string;
     private age: number = 18;
     private readonly city: string = "Jaipur";

     private deleteToken(): void {
          console.log("Token deleted successfully");
     }

     constructor(abc: string, xyz: string) {
          this.name = abc;
          this.email = xyz;
          console.log(this.city);
     }

     get getAppleEmail(): string {
          return `${this.name}_${this.age}_${this.city[0]}${this.city[this.city.length-1]}@apple.com`;
     }

     set setAge(newVal: number) {     //no type is decibed coz it is not allowed by ts
          this.age = newVal;
     }
}
// class User {
//      private readonly city: string = "Jaipur";

//      constructor(
//           public name: string, public email: string, private age: number = 21
//      ) {
//           console.log(this.city);
//      }
// }

const hitesh = new User('HITESH', 'hitesh@example.com');

// hitesh.age = 25;
hitesh.setAge = 25;

// hitesh.deleteToken();

const appleEmail = hitesh.getAppleEmail;

console.log("");
console.log(appleEmail);
console.log(hitesh);

class subUser extends User {
     isFamily: boolean = true;
     changeKandaniPessa(value: number): void {
          this._kandaniPesaa = value;
     }

     get getPesaa(): number {
          return this._kandaniPesaa;
     }
}

const Rahul = new subUser('Rahul', 'rahulArya_02@example.com');
Rahul.changeKandaniPessa(5000);

console.log("");
console.log(`kandani pessa => ${Rahul.getPesaa}`);

export {};