import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function notasAluno(){
    let n1 = parseFloat(prompt("Informe a primeira nota:"))
    let n2 = parseFloat(prompt("Informe a segunda nota:"))
    let n3 = parseFloat(prompt("Informe a terceira nota:"))
    let n4 = parseFloat(prompt("Informe a quarta nota:"))

    let media = (n1 + n2 + n3 + n4)/4;

    if (media >= 7) {
    console.log(`Sua nota é  ${media} `)
    console.log("Você está APROVADO!!")
    } else if (media < 5){
    console.log(`Sua nota é  ${media} `)
    console.log("Você está REPROVADO!!")
    }else if (media >= 5 || media <=7) {
    console.log(`Sua nota é  ${media} `)
    console.log("Você está RECUPERACAO!!")
    }else{
    console.log("Informe um valor válido!")
    }
}