import type { Director } from "../models/Director";
import { Movie } from "./Movie";

export class HorrorMovie extends Movie {

    constructor(title: string, 
        duration: number, 
        hasOscars: boolean,
        director: Director,
        public hasJumpScares: boolean
    ){
        super(title, duration, hasOscars, director);
    }

    displayAlert(){
        console.log("This movie is really scary");
    }

}