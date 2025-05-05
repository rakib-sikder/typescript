"use strict";
// Function Declaration
function fast(one, two) {
    return one + two;
}
//arrow function
const arrowFast = (one, two) => one + two;
//method 
const myself = {
    name: "Rakib",
    balance: 1000,
    deposit(money) {
        return this.balance + money;
    },
};
