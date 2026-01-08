// Elementos DOM
let h1 = document.querySelector("h1");
console.log(h1?.innerText);
let title = document.querySelector(".title");
console.log(title.innerText);
let username = document.querySelector("#username");
console.log(username.placeholder);
// Tipos Genéricos
/*
function getFirstElement(array: number[]){
    return array[0];
}*/
function getFirstElement(array) {
    return array[0];
}
let arrayNum = [1, 2, 3];
let firstNum = getFirstElement(arrayNum);
let arrayStr = ["a", "b", "c"];
let firstStr = getFirstElement(arrayStr);
let h1Generico = document.querySelector("h1");
console.log(h1Generico?.innerText);
export {};
//# sourceMappingURL=main.js.map