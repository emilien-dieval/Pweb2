"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.id = Person.counter++;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.toString = function () {
        return 'Prénom :' + this.firstName, 'Nom :' + this.lastName;
    };
    Person.counter = 0;
    return Person;
}());
console.log('\n');
console.log('============== Nouvelle Personne : ==============');
var persons = [];
data_1.myPersons.forEach(function (a) {
    persons.push(new Person(a.firstName, a.lastName));
});
console.log('============== Affichage des personnes : ==============');
persons.forEach(function (p) { return console.log('*' + p); });
var Movie = /** @class */ (function () {
    function Movie(title, year, audience) {
        this.id = Movie.counter++;
        this.title = title;
        this.year = year;
        this.audience = audience;
    }
    Movie.prototype.toString = function () {
        return this.id, ':' + this.title + ' ' + this.year + ' ' + this.audience;
    };
    Movie.counter = 0;
    return Movie;
}());
console.log('\n');
console.log('============== Nouveau Film : ==============');
var movies = [];
data_1.myMovies.forEach(function (movie) {
    movies.push(new Movie(movie.title, movie.year, movie.audience));
});
console.log('============== Affichage des Movies : ==============');
movies.forEach(function (m) { return console.log('*' + m.toString()); });
