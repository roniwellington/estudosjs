// Orientado a Objetos

class Poligono{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }

    get area(){
        return this.#calcularArea()
    }

    #calcularArea(){
        return this.altura * this.largura
    }
}

// criar o objeto
let poligono = new Poligono(50, 60)
console.log(poligono.area)

/***
 * Confusão e Solução
 * Programção Estruturada x Orientação a Objetos
 * 
 * Programação Estruturada
 * 
 * Processa a entrada e manipulação dos dados, até a saída
 * 
 * Uso de sequências, estruturas de repetições e condições
 * 
 * Uso de rotina maior, ou sub-rotinas
 * 
 * Não existem restrições às variáveis
 */


/**
 * Programação Orientada a Objetos
 * Surge para trazer um cuidado ao uso estruturado
 * Não elimina por completo o uso estruturado
 * 
 * conceitos como Objetos e Classes
 * 
 * Cuidados com variáveis e rotinas(Encapsulamento)
 * 
 * Melhor reuso de código(Herança)
 */