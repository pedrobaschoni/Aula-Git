interface Pessoa {
    nome: string;
    idade: number;
}

function saudacao(pessoa: Pessoa): string {
    try {
        return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`;
    } catch (error) {
        console.error("Erro na função saudacao:", error);
        return "Ocorreu um erro ao processar a saudação.";
    }
}

const usuario: Pessoa = { nome: "Pedro", idade: 21 };
console.log(saudacao(usuario));