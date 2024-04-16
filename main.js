class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} está latindo.`);
    }
}


class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    miar() {
        console.log(`${this.nome} está miando.`);
    }
}

const cachorro1 = new Cachorro('Bidu', 3, 'Labrador');
const gato1 = new Gato('Pepê', 2, 'Preto');
const cachorro2 = new Cachorro('Hans', 5, 'Vira-lata');

console.log(cachorro1);
console.log(gato1);
console.log(cachorro2);

cachorro1.latir(); 
gato1.miar(); 
cachorro2.latir();