function findMax(lista) {    
    let max = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}

function includes(lista, num) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === num) {
            return true;
        }
    }
    return false;
}

function sum(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}


function missingNumbers(lista) {
    let min = sum(lista);
    let max = findMax(lista);

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < min) {
            min = lista[i];
        }
    }
    let missing = [];

    for (let i = min; i <= max; i++) {
        if (!includes(lista, i)) {
            missing.push(i);
        }
    }
    return missing;
}

console.log(missingNumbers([7, 2, 4, 6, 3, 9])); 