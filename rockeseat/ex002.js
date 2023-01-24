//ATIVIDADE
// 1. Declare uma variável de nome Weight?
let weight

// 2. Que tipo de dado é a variável acima?
    console.log(typeof weight)//undefined

// 3. Declare uma variável e atribua valores para cada um dos dados:
    /* 
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
    */

    // let name = "Mayk"
    // let age = 23
    // let stars = 4.8
    // let isSubscribed = true

   /*
        4. A Variável student abaixo é de que tipo de dados?


        4.1 A tribua a ela as mesmas propriedades e valores do exercício 3.

        4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.


        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
   */

        //4.1 resposta

        let student = {
            name : "Mayk",
            age: 23,
            weight: 74.8,
            isSubscribed: true,
        }

        console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

        /*
            5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio    
        */

            /* R = 5. */ let students = []
            console.log(students)

        /*
            6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto mas usar o objeto criado e inserir ele no Array)
        */

            /** R = 6.*/ students = [
                student
            ] 

            console.log(students)

        /**
         * 7. Coloque no console o valor da posição zero do Array acima
         */

        console.log(students[0])

        /**
         * 8. Crie um novo student e coloque na posição 1 do Array studentes
         */

        const john = {
            name: "John",
            age: 23,
            weight: 74.8,
            isSubscribed: true,
        }

        students[1] = john

        console.log(students)

        /**
         * 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja  se você acertou.
         *  console.log(a)
         *  var a = 1
         * 
         */

        console.log(a)
        var a = 1

     