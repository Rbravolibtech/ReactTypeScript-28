//primitives: number, string, boolean
// More complex types: arrays, objects
// Functions types, parameters

//Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking",]

type person = {
    name: string;
    age: number;
}

let person:



person = {
    name: "max",
    age: 32
}

// person = {
//     isEmployee: true
// }

let people: {  
 name: string;
age: number;
}[];

// Type of inference

let course: string | number  = "React - the complete guide";

course = 12346;

// Functions and types

function add(a: number, b: number){
    return a + b;
}

function print(value: any) {
    console.log(value);
    
}