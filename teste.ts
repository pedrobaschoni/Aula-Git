interface Pessoa {
    nome: string;
    idade: number;
}

function saudacao(pessoa: Pessoa): string {
    try {
        console.log("Funcionando");
        return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`;
    } catch (error) {
        console.error("Kakador de bruxa:", error);
        return "Ocorreu um erro ao processar a saudação.";
    }

}

const usuario: Pessoa = { nome: "Lucas", idade: 21 };
console.log(saudacao(usuario));
