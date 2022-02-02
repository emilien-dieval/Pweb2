import { Person } from "./Person";
import { Movie } from "./Movie";

class Actor extends Person {
    private movies: Movie[] = [];   
    addMovie(movie: Movie): void {
        this.movies.push(movie);
    }
    getMovies(): Movie[] {
        return this.movies;
    }
    toString(all: boolean = false): string {
        let s = super.toString();
        if (all && this.movies.length > 0) {
            s += " -- movies :";
            this.movies.forEach((m: Movie) => {
                s += " -" + m;
            })
        }
        return s;
    }
}    