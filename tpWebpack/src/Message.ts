export class Message {
    contenu:string;  
    constructor (nouveau:string="Hello World") {
        this.contenu= nouveau;
    }
    toString():string {
        return this.contenu;
    }
    toHTMLH1 () :string  {
        return "<H1>"+this.contenu+"</h1>";
    }
} 