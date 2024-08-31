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
