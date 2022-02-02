import {myPersons} from "./data";
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