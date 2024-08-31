function desglosarString(str, tipo="vocales") {
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        const caracter = str.charAt(i);
        if (tipo === "vocales" && "aeiouAEIOU".indexOf(caracter) !== -1) {
            contador++;
        } else if (tipo === "consonantes" && "aeiouAEIOU".indexOf(caracter) === -1) {
            contador++;
        }
    }

    return contador;
}

function twoSum(lista, numero){
    let resultado = [];
    for (let i = 0; i < lista.length; i++) {
        for (let j = i+1; j < lista.length; j++) {
            if (lista[i] + lista[j] === numero) {
                resultado.push(i);
                resultado.push(j);
                return resultado;
            }
        }
    }
    return resultado;
}

function conversionRomana(str){
    const romanos = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let resultado = 0;
    let anterior = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        const actual = romanos[str.charAt(i)];
        if (actual < anterior) {
            resultado -= actual;
        } else {
            resultado += actual;
        }
        anterior = actual;
    }

    return resultado;
}

