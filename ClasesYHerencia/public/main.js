import { HorrorMovie } from "./classes/HorrorMovie.js";
import { Movie } from "./classes/Movie.js";
let director1 = {
    name: "Peter",
    age: 60,
    data: "He is amazing"
};
let movie1 = new Movie("Titulo Peli", 120, true, director1);
console.log(movie1.getInfo());
let horrorMovie1 = new HorrorMovie("Titulo Horror", 130, false, director1, true);
horrorMovie1.displayAlert();
//# sourceMappingURL=main.js.map