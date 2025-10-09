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
// we can tell the compiler that an array will have a fixed number of elements
// whose types are known

// fixed length array where each element is of a particular type

let user: [number, string] = [1, "Mosh"];
// user = [1, 2]          // invalid
// user = [1, "Mosh", true]   // invalid
// you can access the methods of number object on user[0]
// and access the methods of string object on user[1]

// on compilation, tuples are converted to normal arrays in js files


// enums
// enums are a way of giving more friendly names to sets of numeric values
// example:
const small = 1;
const medium = 2;
const large = 3;

// instead of this we can use enums
enum Size { Small = 1, Medium, Large };
// by default, the first value is 0, second is 1 and so on
// if we set Small = 1, then Medium would be 2 and Large would be 3 and so on
// if we set Small = 1 and Large = 3, then Medium would be 2

// we can also set string values to enums
// example:
// enum Size { Small = "s", Medium = "m", Large = "l" };
// in this case, we have to set values for all the enum members

let mySize: Size = Size.Medium;
console.log(mySize);           // would print 2

// if we use 'const enum' instead of 'enum', it would make the enum members as constants
// and would remove the enum declaration during compilation
// and would replace the enum members with their values
// this would reduce the javascript file size and generate an optimized code
// example:
const enum Size1 { Small = 1, Medium, Large };
let mySize1: Size1 = Size1.Medium;
console.log(mySize1);          // would print 2



// functions

// we can specify the type of each parameter and the return type of the function
// if we don't specify the return type, it would be considered as 'void' type
// the compiler would infer the return type based on the return statements in the function 
// if nothing is specified

function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

// in tsconfig file, we have a setting called 'noUnusedParameters'
// if it is set to true, then the compiler would give an error 
// if there are any unused parameters in a function
// to avoid that, we can use '_' before the parameter name

// if in a function we add return if true but don't add return if false, 
// then the compiler would give an error
// because js would return undefined in that case

// in tsconfig file, we have a setting called 'noImplicitReturns'
// if it is set to true, then the compiler would give an error if there are any code paths that do not return a value
// another setting is 'noUnusedLocals'
// if it is set to true, then the compiler would give an error if there are any unused local variables