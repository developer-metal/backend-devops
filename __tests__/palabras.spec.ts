import { esPalindromo } from './../src/app/palabras';
describe('Palindro', () => {
test('retorna true si la palabra es palindromo', () => {
    expect(esPalindromo('oso')).toBe(true);
});
test('retorna false si la palabra no es palindromo', () => {
    expect(esPalindromo('casa')).toBe(false);
});
test('retorna false si frase es null', () => {
    expect(esPalindromo(null as any)).toBe(false);
});
});