import {myPersons, myMovies} from "./data";
class Person {
    static counter: number = 0;
    id: number;
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.id = Person.counter++;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toString(): string {
        return this.firstName + " " + this.lastName;
    }
}
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
class Movie {
    static counter: number = 0;
    id: number;
    title: string;
    year: number;
    audience: number;
    actors: Actor[];

    constructor(title: string, year: number, audience: number) {
        this.id = Movie.counter++;
        this.title = title;
        this.year = year;
        this.audience = audience;
        this.actors = [];
    }
    addActor(a: Actor) {
        this.actors.push(a);
    }
    toString(all: boolean = false): string {
        let s = this.id + " : " + this.title + " " + this.year + " " + this.audience;
        if (all && this.actors.length > 0) {
            s += " -- actors :";
            this.actors.forEach((a: Actor) => {
                s += (" -" + a);
            })
        }
        return s;
    }
    toHTML(all:boolean=false):string {
        let s = "<li>"+this.id + " : " + this.title + " " + this.year + " " + this.audience+"</li>"; 
        // listee les acteurs s'il existe
        if (all && this.actors.length > 0) {
          // s+="\n\t===Acteurs :===\n"; 
          s+="\n  <ul>\n";   
          this.actors.forEach((acteur)=>{
             s+="    <li>"+acteur+"</li>\n"; 
          });
          s+="  </ul>\n"; 
        }          
        return s
    }
}

myPersons.forEach((person:any)=>{
	console.log(person.lastName);
});	

let actors : Actor[] = [];
let movies : Movie[] = [];

// ajouter les acteurs dans la table  persons
myPersons.forEach((a) => {
    actors.push(new Actor(a.firstName, a.lastName));
});

{console.log("\t *** Affichage acteur ");
console.log(actors[0]);
console.log(actors[0].toString());
console.log("* "+actors[0]);
}

console.log("\t *** Affichage liste des acteurs ");
actors.forEach((a:Actor)=>console.log("* "+a.toString()));

// ajouter les films dans la table Movie 
myMovies.forEach((m) => {
	let movie=  new Movie(m.title, m.year, m.audience);
	m.actors.forEach((idActor:number)=>{
		movie.addActor(actors[idActor]);
	}); 
    movies.push(movie);
});

console.log("\t *** Affichage liste des films + ajout des films dans les acteurs  ");
movies.forEach((m:Movie)=>{
	console.log("* "+m.toString(true)); 
	m.actors.forEach((actor:Actor)=>{
		actor.addMovie(m);
	});	
});
console.log("\t *** Affichage liste des acteurs ");
actors.forEach((a:Actor)=>console.log("* "+a.toString(true)));

console.log("\t *** Movie au format html : \n", movies[1].toHTML(true));

