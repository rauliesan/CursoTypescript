import type { IVideo } from "../interfaces/IVideo";
import type { Director } from "../models/Director";

export class Movie implements IVideo { // Se implementa la interfaz IVideo

    constructor(public title: string, 
        public duration: number,
        public hasOscars: boolean,
        public director: Director
    ){}

    getInfo(){
        return `Title: ${this.title} - Duration: ${this.duration} - HasOscars: ${this.hasOscars} - Director(Name): ${this.director.name}`;
    }
    
    getDuration(): number {
        return this.duration;
    }
}