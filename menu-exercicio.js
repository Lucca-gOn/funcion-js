import PromptSync from "prompt-sync";

import { cargoSalario } from "./ex1.js";
import { aumentoFuncionarios } from "./ex2.js";
import { numInteiro } from "./ex3.js";
import { imparPar } from "./ex4.js";
import { maiorNumero } from "./ex5.js";
import { notasAluno } from "./ex6.js";



const prompt = PromptSync();

// MENU PARA ESCOLHER EXERCICIO QUE O USUARIO ESCOLHER

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("Digite um número que represente um exercício de 1 a 6:"))

    switch (exercicio) {
        case 1:
            cargoSalario();
            break;

        case 2:
            aumentoFuncionarios();
            break;

        case 3:
            numInteiro();
            break;

        case 4:
            imparPar();
            break;
        case 5:
            maiorNumero();
            break;
        case 6:
            notasAluno();
            break;


        default:
            console.log("Digite um número de 1 a 6!");
            break;
    }

    continuar = prompt("Deseja continuar a ver outros exercicios? Digite (S) para sim e (N) para não").toLocaleLowerCase();


} while (continuar === "s");
