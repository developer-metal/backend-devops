function operar(operacion: string = "", a: number, b: number = 0) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplicacion') {
        return multiplicacion(a, b);
    } else if (operacion === 'division') {
        return division(a, b);
    } else if (operacion === 'potencia') {
        return potencia(a, b);
    } else if (operacion === 'factorial') {
        return factorial(a);
    }
}

function suma(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede sumar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}

function multiplicacion(a: number, b:number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function division(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a / b;
}

function potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede elevar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return Math.pow(a, b);
}

function factorial(a:number): any{
    if (a === undefined) {
        throw new Error("No se puede calcular el factorial de indefinidos");
    }
    if (typeof a !== 'number') {
        return NaN;
    }
    if(a === 0) {
        return 1;
    }
    return a * factorial(a-1);
}

export { 
    suma, 
    operar, 
    restar, 
    multiplicacion, 
    division, 
    potencia, 
    factorial 
};