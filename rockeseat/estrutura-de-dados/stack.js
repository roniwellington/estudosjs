/**Métodos fundamentais
 * push():adicionar um elemento à pilha
 * pop():remover o elemento do topo da pilha
 * peek():obter o elemento do topo da pilha
 * 
 * Outros métodos poderão ser implementados como size() para mostrar o tamanho da pilha
 */


//Passo 1: Modelando
class Stack {
    constructor(){
        this.data = []
        this.top = -1
    }

    push(value){
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop(){
        if(this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop

    }

    peek(){
        return this.top >= 0 ? this.data[this.top] :undefined
    }
}

//Passo 2: Utilizando
const stack = new Stack()

//adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())