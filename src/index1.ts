let age: number = 20;
if (age > 18) {
    console.log("Nice try Diddy.");
}
console.log(age);

// built-in types
let sales: number = 92255;
let sale = 70;
// both sale and sales are of type number
// you don't need to specify the type everytime when you give the value right there.
let course: string = "TypeScript";
let courses = "Mosh";
let is_published: boolean = true;
let level;                                  // the level variable is of type any
// can assign,let's say, any number first and then assign it a char/string later
// but typescript was essentially made for using type safety for type checking
// avoid any type

// example where any type is used
// function render(doc) {                   // this parameter 'doc' is being guessed as 'any' type
//     console.log(doc);
// }
            // invalid function

// when we convert javascript to typescript, this is a case when we use 'any' type

// fix:
function render(doc: any) {
    console.log(doc);
}

// or we can permanently shut the error by changing a dependency in the tsconfig file


// Arrays

let numbers: number[] = [1, 2, 3];
// without denoting the number[] type, we can denote a dynamic array like in JS
// if a function requires only integer values: we use this.
// similar to above section. If all the values are of integer type 
// we don't always need to specify the type

// initializing an empty array would require us to specify the type
let number = [];
// if not it would consider it as an 'any' type


// tuples
