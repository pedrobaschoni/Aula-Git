interface Pessoa {
    nome: string;
    idade: number;
}

function saudacao(pessoa: Pessoa): string {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`;
}

const usuario: Pessoa = { nome: "Pedro", idade: 21 };
console.log(saudacao(usuario));
