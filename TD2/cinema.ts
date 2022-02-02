import {myPersons, myMovies} from "./data";
class Person{
    static counter : number = 0;
    id : number;
    firstName : string;
    lastName : string;

    constructor(firstName:string, lastName:string){
        this.id = Person.counter++;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    toString() : string{
        return 'Prénom :'+this.firstName,'Nom :'+this.lastName;
    }
}
console.log('\n');
console.log('============== Nouvelle Personne : ==============')
let persons : Person[] = [];
myPersons.forEach((a)=>{
    persons.push(new Person(a.firstName, a.lastName));
});

console.log('============== Affichage des personnes : ==============')
persons.forEach((p:Person)=>console.log('*'+p));


class Movie{
    static counter : number = 0;
    id : number = Movie.counter++;
    title : string;
    year : number;
    audience : number;
    private actors:Actor[]=[];

    constructor(title:string,year:number,audience:number){
        this.title=title;
        this.year=year;
        this.audience=audience;
    }

    addActor(actor:Actor):void{
        this.actors.push(actor);
    }

    toString(all: boolean = false): string{
        let s = this.id +" "+ this.title+ " "+this.year+" "+this.audience;
        if (all && this.actors.length > 0){
            s += "--actors :";
            this.actors.forEach((a: Actor)=>{
                s+=(" -"+a);
            });
        }
        return s;
    }
}

console.log('\n');
console.log('============== Nouveau Film : ==============')
let movies : Movie[] = [];
myMovies.forEach((movie:any)=>{
    movies.push(new Movie(movie.title, movie.year, movie.audience));
});

console.log('============== Affichage des Movies : ==============')
movies.forEach((m:any)=>console.log('*'+m.toString()));

class Actor extends Person{
    private movies: Movie[] = [];
    addMovie(movie: Movie):void{
        this.movies.push(movie);
    }
    getMovies():Movie[]{
        return this.movies;
    }
    toString(all: boolean = false): string{
        let s = super.toString();
        if (all && this.movies.length > 0){
            s += "--movies :";
            this.movies.forEach((m: Movie)=>{
                s+=(" -"+m);
            });
        }
        return s;
    }
}

myPersons.forEach((persons:any)=>{
    console.log(persons.lastName);
});

let actors : Actor[]=[];
//ajouter les acteurs dans la table persons

myPersons.forEach((a) =>{
    actors.push(new Actor(a.firstName,a.lastName));
})
 
console.log("Affichage acteur");
console.log(actors[0]);
console.log(actors[0].toString());
console.log("* "+actors[0]);

console.log("Affichage liste des acteurs");
actors.forEach((a:Actor)=>console.log("*",a.toString(true))); 

console.log("-----------------------")
console.log("Affichage les films ds la table Movie");
myMovies.forEach((m)=>{
    let movie= new Movie(m.title,m.year,m.audience);
    m.actors.forEach((idActor:number)=>{
        movie.addActor(actors[idActor]);
    })
})

movies.forEach((m:Movie)=>console.log("*",m.toString(true))); 