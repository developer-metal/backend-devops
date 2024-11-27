import { operar, multiplicacion, suma, restar,division, potencia, factorial } from '../src/app/calculadora';
describe('Calculadora', () => {
    test('retorna la suma de dos números cuando la operación es "suma"', () => {
        expect(operar('suma', 1, 2)).toBe(3);
    });
    test('retorna la diferencia de dos números cuando la operación es "resta"', () => {
        expect(operar('resta', 5, 3)).toBe(2);
    });
    test("retorna undefined si la operacion no se encuentra", () => {
        expect(operar(undefined, 1, 2)).toBeUndefined();
    });
    test('retorna un error cuando uno de los números no está definido para las operaciones de: (suma,restar,multiplicacion)', () => {
        expect(() => suma(1, undefined as any)).toThrow("No se puede sumar indefinidos");
        expect(() => restar(0, undefined as any)).toThrow("No se puede sumar indefinidos");
        expect(() => multiplicacion(1, undefined as any)).toThrow("No se puede multiplicar indefinidos");
    });
    test('retorna NaN cuando uno de los argumentos no es un número', () => {
        expect(suma(1, 'a' as any)).toBeNaN();
        expect(restar('b' as any, 2)).toBeNaN();
        expect(multiplicacion(1, 'a' as any)).toBeNaN();
    });
    test("retorna el resultado de la operacion Multiplicacion", () => {
        expect(operar('multiplicacion', 2, 3)).toBe(6);
    });
    test("retorna el resultado de la operacion Division", () => {
        expect(operar('division', 6, 3)).toBe(2);
        expect(operar('division', 6, 0)).toBe(Infinity);
        expect(operar('division', 6, 'a' as any)).toBeNaN();
        expect(() => division(6, undefined as any)).toThrow("No se puede dividir indefinidos");
    });
    test("retorna el resultado de la operacion Potencia", () => {
        expect(operar('potencia', 2, 3)).toBe(8);
        expect(operar('potencia', 6, 'a' as any)).toBeNaN();
        expect(() => potencia(4, undefined as any)).toThrow("No se puede elevar indefinidos");
    });
    test("retorna el resultado de la operacion Factorial", () => {
        expect(operar('factorial', 5)).toBe(120);
        expect(operar('factorial', 0)).toBe(1);
        expect(operar('factorial', '1' as any)).toBeNaN();
        expect(() => factorial(undefined as any)).toThrow("No se puede calcular el factorial de indefinidos");
    });
});