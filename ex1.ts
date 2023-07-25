import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function cargoSalario() {
    console.log("Faça um programa que receba o nome, cargo e salário de um funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário desse funcionário.");

    let nome: string = prompt("Informe o nome do profissional:");
    let cargo: string = prompt("Informe o cargo do profissional:");
    let salario: number = parseFloat(prompt("Informe o salário do profissional:"));

    let salarioResult: number = ((salario * 0.10) + (salario));

    if (salario <= 1000) {
        console.log(`Profissional: ${nome}`)
        console.log(`Cargo: ${cargo}`)
        console.log(`Foi acrescentado ao seu salário 10%, seu novo salário é de: ${salarioResult}`)
    } else {
        console.log(`Profissional: ${nome}`)
        console.log(`Cargo: ${cargo}`)
        console.log(`seu salário é de: ${salario}`)
    }
}
