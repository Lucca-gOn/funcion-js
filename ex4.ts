import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function imparPar() {
    console.log("Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.");
    let numero: number = parseInt(prompt("Informe o número que deseja ser par ou impar:"));

    let resultado: number = ((numero) % 2);

    if (resultado == 0) {
        console.log("Número par")
    } else if (resultado == 1) {
        console.log("Número impar")
    } else {
        console.log("Digite um número válido!")
    }
}