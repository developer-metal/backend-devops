import { esPrimo } from '../src/app/numeros';
describe('Numero', () => {
test('retorna true si el numero es Primo', () => {
    expect(esPrimo(5)).toBe(true);
    });
test('retorna false si el numero no es primo', () => {
    expect(esPrimo(4)).toBe(false);
});
test('muestra mensaje de error (No se validar indefinidos) , si el numero a validar es undefined', () => {
   expect(() => esPrimo(undefined as any)).toThrow("No se validar indefinidos");
});
test('retorna NaN si el numero ingresado no es un tipo number', () => {
    expect(esPrimo('a' as any)).toBeNaN();
 });
test('retorna false si el numero es menor a 2', () => {
    expect(esPrimo(1)).toBe(false);
 });
});