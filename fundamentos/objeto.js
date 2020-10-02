//objetos com atributos literais e é diferente de JSON,JSON é texto

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla:1,
        obj: {
            balbla:2
        }
    }
}

console.log(prod2)