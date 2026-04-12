/**
 * TRABAJO PRÁCTICO: EJERCICIOS 50 AL 70
 * Alumno: Mauro Sebastian Monzón
 */

// 50: Comparación de igualdad o mayor
const ejercicio50 = (n1: number, n2: number): void => {
    if (n1 === n2) {
        console.log("Son iguales");
    } else if (n1 > n2) {
        console.log("El primero es mayor: " + n1);
    } else {
        console.log("El segundo es mayor: " + n2);
    }
};

// 51: Variante con números a la izquierda (Yoda conditions)
let variable51: number = 10;
if (10 === variable51) {
    console.log("La comparación es correcta y la variable está a la derecha.");
}

// 55: Valor absoluto con operador condicional (ternario)
const ejercicio55 = (n: number): void => {
    let absoluto = (n >= 0) ? n : -n;
    console.log("El valor absoluto es: " + absoluto);
};

// 56: Menor de dos números con operador condicional
const ejercicio56 = (a: number, b: number): void => {
    let menor = (a < b) ? a : b;
    console.log("El menor es: " + menor);
};

// 57: Nombre del número del 1 al 5 con switch
const ejercicio57 = (n: number): void => {
    switch (n) {
        case 1: console.log("uno"); break;
        case 2: console.log("dos"); break;
        case 3: console.log("tres"); break;
        case 4: console.log("cuatro"); break;
        case 5: console.log("cinco"); break;
        default: console.log("Número fuera de rango");
    }
};

// 58: Signo de puntuación, cifra o otro (switch)
const ejercicio58 = (tecla: string): void => {
    switch (tecla) {
        case '.': case ',': case ';': case ':':
            console.log("Es un signo de puntuación");
            break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            console.log("Es una cifra numérica");
            break;
        default:
            console.log("Es otro carácter");
    }
};

// 59: Vocal, cifra o consonante (switch)
const ejercicio59 = (letra: string): void => {
    let l = letra.toLowerCase();
    switch (l) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            console.log("Es una vocal");
            break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            console.log("Es una cifra");
            break;
        default:
            console.log("Es una consonante");
    }
};

// 60: Repetir 57 usando IF
const ejercicio60 = (n: number): void => {
    if (n === 1) console.log("uno");
    else if (n === 2) console.log("dos");
    else if (n === 3) console.log("tres");
    else if (n === 4) console.log("cuatro");
    else if (n === 5) console.log("cinco");
};

// 61: Repetir 58 usando IF (con rango para cifras)
const ejercicio61 = (tecla: string): void => {
    if (tecla === '.' || tecla === ',' || tecla === ';' || tecla === ':') {
        console.log("Signo de puntuación");
    } else if (tecla >= '0' && tecla <= '9') {
        console.log("Cifra numérica");
    } else {
        console.log("Otro carácter");
    }
};

// 62: Repetir 59 usando IF
const ejercicio62 = (letra: string): void => {
    let l = letra.toLowerCase();
    if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {
        console.log("Vocal");
    } else if (l >= '0' && l <= '9') {
        console.log("Cifra");
    } else {
        console.log("Consonante");
    }
};

// 63: Contraseña numérica 1111 (while)
const ejercicio63 = (): void => {
    let clave: string | null = "";
    while (clave !== "1111") {
        clave = prompt("Introduce la contraseña numérica:");
    }
    console.log("Contraseña correcta.");
};

// 64: Calculador de cuadrados hasta introducir 0 (while)
const ejercicio64 = (): void => {
    let n: number = -1;
    while (n !== 0) {
        let input = prompt("Introduce un número (0 para salir):");
        n = input ? parseInt(input) : 0;
        if (n !== 0) console.log("El cuadrado de " + n + " es " + (n * n));
    }
};

// 65: Pares de números y múltiplo
const ejercicio65 = (n1: number, n2: number): void => {
    if (n1 % n2 === 0) console.log(n1 + " es múltiplo de " + n2);
    else console.log(n1 + " no es múltiplo de " + n2);
};

// 66: Múltiplo mejorado (A de B o B de A)
const ejercicio66 = (n1: number, n2: number): void => {
    if (n1 % n2 === 0) console.log(n1 + " es múltiplo de " + n2);
    else if (n2 % n1 === 0) console.log(n2 + " es múltiplo de " + n1);
    else console.log("Ninguno es múltiplo del otro");
};

// 67: Números del 1 al 10 (while)
const ejercicio67 = (): void => {
    let i: number = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
};

// 68: Pares del 26 al 10 descendiendo (while)
const ejercicio68 = (): void => {
    let i: number = 26;
    while (i >= 10) {
        if (i % 2 === 0) console.log(i);
        i--;
    }
};

// 69: Cuántas cifras tiene un número (dividiendo entre 10)
const ejercicio69 = (num: number): void => {
    let n = Math.abs(num);
    let contador = 0;
    if (n === 0) contador = 1;
    while (n > 0) {
        n = Math.floor(n / 10);
        contador++;
    }
    console.log("El número tiene " + contador + " cifras.");
};

// 70: Adivinar número (TypeScript)
const ejercicio70 = (): void => {
    const numeroSecreto: number = Math.floor(Math.random() * 10) + 1;
    let intentos: number = 3;
    let acertado: boolean = false;

    while (intentos > 0 && !acertado) {
        let input = prompt("Adivina un número del 1 al 10. Intentos restantes: " + intentos);
        let n = input ? parseInt(input) : 0;
        if (n === numeroSecreto) {
            alert("¡Acertaste!");
            acertado = true;
        } else {
            intentos--;
            if (intentos > 0) alert("Fallaste.");
        }
    }
    if (!acertado) alert("Perdiste. El número era " + numeroSecreto);
};
