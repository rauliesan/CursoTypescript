// Elementos DOM
let h1 = document.querySelector("h1");
console.log(h1?.innerText);

let title = document.querySelector(".title") as HTMLHeadingElement;
console.log(title.innerText);

let username = document.querySelector("#username") as HTMLInputElement;
console.log(username.placeholder);


// Tipos Genéricos
/*
function getFirstElement(array: number[]){
    return array[0];
}*/
function getFirstElement<T>(array: T[]){
    return array[0];
}

let arrayNum = [1, 2, 3];
let firstNum = getFirstElement(arrayNum);

let arrayStr = ["a", "b", "c"];
let firstStr = getFirstElement(arrayStr);


let h1Generico = document.querySelector<HTMLHeadingElement>("h1");
console.log(h1Generico?.innerText);