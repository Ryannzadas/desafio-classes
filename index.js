class hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atack(){
        
        let ataque

        if (this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "guerreiro"){
            ataque = "espada"
        } else if (this.tipo === "monge"){
            ataque = "artes marciais"
        } else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }

        console.log(`O héroi de nome ${this.nome}, idade ${this.idade} e tipo ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroOne = new hero ("Mayron", 20, "guerreiro")
let HeroTwo = new hero ("Ryan", 39, "ninja")
let herothree = new hero("Barbudo", 37, "mago")
let heroFour = new hero ("Breno", 32, "monge")

heroOne.atack();
HeroTwo.atack();
herothree.atack();
heroFour.atack();
