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
