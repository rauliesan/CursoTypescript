import type { Director } from "../models/Director";

export interface IVideo {
    title: string;
    duration: number; // Si la propiedad fuera private en la clase donde se implementa daría error porque no se deberían de crear propiedades en interfaces para las privadas de una clase
    getDuration():number;
    director: Director;
}