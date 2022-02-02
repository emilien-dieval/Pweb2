import {Message} from "./Message";

function component(message:string) {
    const element = document.createElement('div');
    element.innerHTML = message;
    return element;
}

let welcome : Message = new Message ();
console.log(welcome.toString());
document.body.appendChild(component(welcome.toHTMLH1()));
