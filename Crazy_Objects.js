/* Masthan Swamy */

// Creating Objects using Functions
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const p1 = new Person("Masthan", 22, "Male");
p1.nationality = "Indian";

const p2 = new Person("Arun", 22, "Male");
// console.log(p1);
// console.log(p2);

// Adding common property to all objects, If they need it
console.log("Before Adding Prototype: ", p1.living);
Person.prototype.living = "Earth";
console.log(p1);
console.log(p2);
console.log("After Adding Prototype: ", p1.living);

// 
console.log("\n\n Objects on Prototype:");
let std = {
    nationality: "Indian"
};

let std1 = Object.create(std);
std1.name = "Hello";
console.log(std1);
console.log("Got nationality property from main Object Prototype: ",std1.nationality);








// Destructuring Objects
console.log("\nDestructuring Objects");
let nums = [1,2,3,4,5];

let [first,,middle,,last] = nums;
console.log(first, middle, last);

let [a,b] = nums;
console.log("\n",a,b);

let [a1,b1,...c1] = nums;
console.log("\n", a1,b1, c1);

// Swapping values
a=10;
b=20;
[a,b] = [b,a];
console.log("Swapping:", a, b);


// Destructuring On Objects
console.log("Destructuring On Objects \n\n");
let nums1 = {a2:1, b2:2, c2:3};

let {a2, b2, c2} = nums1;
console.log(a2, b2, c2);