import { Actor } from "./Actor"; 
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