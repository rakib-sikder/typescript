"use strict";
const frnd = ["Rakib", "Sikder", "Rafiq", "Sikder"];
const frnd2 = ["Rakib", "Sikder", "Rafiq", "Sikder"];
frnd.push(...frnd2);
const frnd3 = {
    firstfriend: "Rakib",
    secondfriend: "Sikder",
    thirdfriend: "Rafiq"
};
const frnd4 = {
    firstfriend: "Rakib",
    secondfriend: "Sikder",
    thirdfriend: "Rafiq"
};
const allfrnd = Object.assign(Object.assign({}, frnd3), frnd4);
const greetings = (...names) => {
    names.forEach((element) => `Hello ${element}`);
};
greetings("Rakib", "Sikder", "Rafiq");
