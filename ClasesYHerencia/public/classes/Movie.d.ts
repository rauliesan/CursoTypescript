import type { IVideo } from "../interfaces/IVideo";
import type { Director } from "../models/Director";
export declare class Movie implements IVideo {
    title: string;
    duration: number;
    hasOscars: boolean;
    director: Director;
    constructor(title: string, duration: number, hasOscars: boolean, director: Director);
    getInfo(): string;
    getDuration(): number;
}
//# sourceMappingURL=Movie.d.ts.map