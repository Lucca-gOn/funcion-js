import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function notasAluno() {
    let n1: number = parseFloat(prompt("Informe a primeira nota:"));
    let n2: number = parseFloat(prompt("Informe a segunda nota:"));
    let n3: number = parseFloat(prompt("Informe a terceira nota:"));
    let n4: number = parseFloat(prompt("Informe a quarta nota:"));

    let media: number = (n1 + n2 + n3 + n4) / 4;

    if (media >= 7) {
        console.log(`Sua nota é  ${media} `)
        console.log("Você está APROVADO!!")
    } else if (media < 5) {
        console.log(`Sua nota é  ${media} `)
        console.log("Você está REPROVADO!!")
    } else if (media >= 5 || media <= 7) {
        console.log(`Sua nota é  ${media} `)
        console.log("Você está RECUPERACAO!!")
    } else {
        console.log("Informe um valor válido!")
    }
}