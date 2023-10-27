class heroi {
  constructor(tipo, id, magia) {
    this.idade = tipo;
    this.id = id;
    this.tipo = magia;
  }

  escrever() {
    if (this.id == 16) {
      console.log(`O ${this.tipo} atacou usando ${this.magia}`);
    } else if (this.tipo == 'Guerreiro') {
      console.log(`O ${this.tipo} atacou usando ${this.magia}`);
    } else if (this.tipo == 'Monge') {
      console.log(`O ${this.tipo} atacou usando ${this.magia}`);
    } else if (this.tipo == 'Ninja') {
      console.log(`O ${this.tipo} atacou usando ${this.magia}`);
    } else {
      console.log('Indefinido');
    }
  }
}
let tipoHeroi = new heroi('Mago', 16, 'Magia');
tipoHeroi.escrever();
