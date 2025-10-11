"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
if (age > 18) {
    console.log("Nice try Diddy.");
}
console.log(age);
let sales = 92255;
let sale = 70;
let course = "TypeScript";
let courses = "Mosh";
let is_published = true;
let level;
function render(doc) {
    console.log(doc);
}
let numbers = [1, 2, 3];
let number = [];
let user = [1, "Mosh"];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
var Size1;
(function (Size1) {
    Size1[Size1["Small"] = 1] = "Small";
    Size1[Size1["Medium"] = 2] = "Medium";
    Size1[Size1["Large"] = 3] = "Large";
})(Size1 || (Size1 = {}));
;
let mySize1 = Size1.Medium;
console.log(mySize1);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
function calculateTax1(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax1(10000);
calculateTax1(10000, 2021);
function calculateTax2(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax2(10000);
calculateTax2(10000, 2021);
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    }
};
employee.name = "John";
employee.retire(new Date());
let employee1 = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    }
};
let weight;
weight = 10;
weight = "10 kg";
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = [];
console.log((_c = (_b = customers === null || customers === void 0 ? void 0 : customers[0]) === null || _b === void 0 ? void 0 : _b.birthday) === null || _c === void 0 ? void 0 : _c.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index1.js.map