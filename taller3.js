function desglosarString(cadena, tipo="vocales") {
    let vocales = 0;
    let consonantes = 0;
    cadena.split("").forEach(letra => {
        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            vocales++;
        } else {
            consonantes++;
        }
    });
    if(!tipo) {
        return consonantes
    }
    return vocales;
}

console.log(desglosarString("houla", "vocales")); // 2