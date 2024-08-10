// PUNTO 1

function convertirTemp(cen) {
    far = (cen * 9 / 5) + 32;
    return far;
}

// PUNTO 2

function resolvedor(a, b, c, add = true) {
    let raiz = Math.sqrt(b ** 2 - 4 * a * c)
    x1 = (-b + raiz) / 2 * a
    x2 = (-b - raiz) / 2 * a

    return add ? x1 : x2
}

// PUNTO 3

function mejorParidad(num) {
    let paridad = num % 2 == 0 ? true : false;
    return paridad;
}

// PUNTO 4

function peorParidad(num) {
    if (num === 1) {
        return "impar";
    } else if (num === 2) {
        return "par";
    } else if (num === 3) {
        return "impar";
    } else if (num === 4) {
        return "par";
    } else if (num === 5) {
        return "impar";
    } else if (num === 6) {
        return "par";
    } else if (num === 7) {
        return "impar";
    } else if (num === 8) {
        return "par";
    } else if (num === 9) {
        return "impar";
    } else if (num === 10) {
        return "par";
    }
}

console.log(convertirTemp(23)); // 32
console.log(resolvedor(1, 5, 4, true)); // -1
console.log(mejorParidad(2)); // true
console.log(peorParidad(3)); // false
