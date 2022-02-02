"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var data_1 = require("./data");
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.id = Person.counter++;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.toString = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.counter = 0;
    return Person;
}());
var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.movies = [];
        return _this;
    }
    Actor.prototype.addMovie = function (movie) {
        this.movies.push(movie);
    };
    Actor.prototype.getMovies = function () {
        return this.movies;
    };
    Actor.prototype.toString = function (all) {
        if (all === void 0) { all = false; }
        var s = _super.prototype.toString.call(this);
        if (all && this.movies.length > 0) {
            s += " -- movies :";
            this.movies.forEach(function (m) {
                s += " -" + m;
            });
        }
        return s;
    };
    return Actor;
}(Person));
var Movie = /** @class */ (function () {
    function Movie(title, year, audience) {
        this.id = Movie.counter++;
        this.title = title;
        this.year = year;
        this.audience = audience;
        this.actors = [];
    }
    Movie.prototype.addActor = function (a) {
        this.actors.push(a);
    };
    Movie.prototype.toString = function (all) {
        if (all === void 0) { all = false; }
        var s = this.id + " : " + this.title + " " + this.year + " " + this.audience;
        if (all && this.actors.length > 0) {
            s += " -- actors :";
            this.actors.forEach(function (a) {
                s += (" -" + a);
            });
        }
        return s;
    };
    Movie.prototype.toHTML = function (all) {
        if (all === void 0) { all = false; }
        var s = "<li>" + this.id + " : " + this.title + " " + this.year + " " + this.audience + "</li>";
        // listee les acteurs s'il existe
        if (all && this.actors.length > 0) {
            // s+="\n\t===Acteurs :===\n"; 
            s += "\n  <ul>\n";
            this.actors.forEach(function (acteur) {
                s += "    <li>" + acteur + "</li>\n";
            });
            s += "  </ul>\n";
        }
        return s;
    };
    Movie.counter = 0;
    return Movie;
}());
data_1.myPersons.forEach(function (person) {
    console.log(person.lastName);
});
var actors = [];
var movies = [];
// ajouter les acteurs dans la table  persons
data_1.myPersons.forEach(function (a) {
    actors.push(new Actor(a.firstName, a.lastName));
});
{
    console.log("\t *** Affichage acteur ");
    console.log(actors[0]);
    console.log(actors[0].toString());
    console.log("* " + actors[0]);
}
console.log("\t *** Affichage liste des acteurs ");
actors.forEach(function (a) { return console.log("* " + a.toString()); });
// ajouter les films dans la table Movie 
data_1.myMovies.forEach(function (m) {
    var movie = new Movie(m.title, m.year, m.audience);
    m.actors.forEach(function (idActor) {
        movie.addActor(actors[idActor]);
    });
    movies.push(movie);
});
console.log("\t *** Affichage liste des films + ajout des films dans les acteurs  ");
movies.forEach(function (m) {
    console.log("* " + m.toString(true));
    m.actors.forEach(function (actor) {
        actor.addMovie(m);
    });
});
console.log("\t *** Affichage liste des acteurs ");
actors.forEach(function (a) { return console.log("* " + a.toString(true)); });
console.log("\t *** Movie au format html : \n", movies[1].toHTML(true));
