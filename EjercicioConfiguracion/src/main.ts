// tsc --init
// tsc -w
let array: any[] = [];
array.push(1);
array.push("hola");
let object: object = {name: 'Name', surname: 'Surname'};
array.push(object);

// Unión
let myId: number | string;
myId = 1;
myId = "1";

type id = number | string;
let userId: id;
userId = "hola";

let myArray: (number | string | boolean)[] = [10, 20, 30];
myArray.push("hola");
myArray.push(true);


// Literal (el valor/valores de un literal/variable es uno concreto)
type stateLoading = "loading";
type stateError = "error";
let loading: stateLoading = "loading"; // da error si el valor de la variable no es loading
let error: stateError = "error";

type state = stateLoading | stateError;
let estado: state = "loading";

type persona = {
    nombre: string,
    apellidos: string
};

let oPersona: persona = {
    nombre: 'Nombre',
    apellidos: 'Apellidos',
};


// Interseccion (fusionar dos tipos de objetos en uno)
type ciudadano = {
    localidad: string,
    casa: string
};

type personaCiudadana = persona & ciudadano;
let oPersonaCiudadana: personaCiudadana = {
    nombre: 'Nombre',
    apellidos: 'Apellidos',
    localidad: 'Localidad',
    casa: 'Casa'
}


// Funciones
function sumar(n1: number, n2: number){
    return n1+n2;
}