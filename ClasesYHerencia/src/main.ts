//Webpack
// npm init
// npm i webpack webpack-cli ts-loader typescript-D

// npm run build (utiliza webpack) y hay que quitarle las extensiones a los imports(ej: .js)

// npm i webpack-dev-server -D

import { HorrorMovie } from "./classes/HorrorMovie";
import { Movie } from "./classes/Movie";
import type { Director } from "./models/Director";
import type { User } from "./models/User";

let director1: Director = {
    name: "Peter",
    age: 60,
    data: "He is amazing"
}

let movie1 = new Movie("Titulo Peli", 120, true, director1);
console.log(movie1.getInfo());

let horrorMovie1 = new HorrorMovie("Titulo Horror", 130, false, director1, true);
horrorMovie1.displayAlert();


let btnMostrar = document.querySelector("button") as HTMLButtonElement;
let peliculasArray: Movie[] = [movie1, horrorMovie1];
let divPeliculas = document.querySelector("#peliculas") as HTMLDivElement;

btnMostrar.addEventListener("click", mostrarPeliculas);
let peliculasMostradas: boolean = false;
function mostrarPeliculas(){
    divPeliculas.innerHTML = "";
    if(peliculasMostradas){
        btnMostrar.textContent = "Mostrar Películas";
        peliculasMostradas = false;
    } else{
        let listaPeliculas = document.createElement("ul");
        for(let pelicula of peliculasArray){
            let li = document.createElement("li");
            li.innerText = pelicula.title;
            listaPeliculas.appendChild(li);
        }
        divPeliculas.appendChild(listaPeliculas);
        btnMostrar.textContent = "Ocultar Películas";
        peliculasMostradas = true;
    }
}

let fetchUser = async() => {
    let API_URL = "https://jsonplaceholder.typicode.com/users/1";
    let response = await fetch(API_URL);
    let data = await response.json();
    return data as User;
}

let btnUsuario = document.querySelector("#btnUsuario") as HTMLButtonElement;
btnUsuario.addEventListener('click', async() => {
    let usuario = await fetchUser();
    console.log(usuario.name);
})