import type { Director } from "../models/Director";
import { Movie } from "./Movie";
export declare class HorrorMovie extends Movie {
    hasJumpScares: boolean;
    constructor(title: string, duration: number, hasOscars: boolean, director: Director, hasJumpScares: boolean);
    displayAlert(): void;
}
//# sourceMappingURL=HorrorMovie.d.ts.map