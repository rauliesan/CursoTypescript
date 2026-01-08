export class Movie {
    constructor(title, duration, hasOscars, director) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
        this.director = director;
    }
    getInfo() {
        return `Title: ${this.title} - Duration: ${this.duration} - HasOscars: ${this.hasOscars} - Director(Name): ${this.director.name}`;
    }
    getDuration() {
        return this.duration;
    }
}
//# sourceMappingURL=Movie.js.map