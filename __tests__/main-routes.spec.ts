import request from 'supertest';
import express from 'express';
import mainRouter from '../src/routes/main-route';
import { configuration } from '../src/config';
const app = express();
app.use(express.json());
app.use(mainRouter);
describe('GET /', () => {
    it('retorna un mensaje de saludo con el nombre de usuario', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe(`Hola mundo al usuario ${configuration.username}`);
    });
});
describe('GET /api-key', () => {
    it('valida que en el mensaje de retorno este el mensaje (la apikey de mi aplicacion es)', async () => {
        const response = await request(app).get('/api-key');
        expect(response.status).toBe(200);
        expect(response.text).toContain('la apikey de mi aplicacion es:');
    });
});
describe('GET /operar', () => {
    it('retorna el resultado de la operación suma', async () => {
        const response = await request(app).get('/operar').query({ operacion: 'suma', num1: '5', num2: '5' });
        expect(response.status).toBe(200);
        expect(response.text).toBe('El resultado de la operacion es: 10');
    });
    it('retorna NaN cuando se envia como parametro una letra', async () => {
        const response = await request(app).get('/operar').query({ operacion: 'suma', num1: 'a', num2: '5' });
        expect(response.status).toBe(200);
        expect(response.text).toBe('El resultado de la operacion es: NaN');
    });
});
describe('GET /palindromo', () => {
    it('retorna "es palíndromo" para una frase palíndromo', async () => {
        const response = await request(app).get('/palindromo').query({ frase: 'anilina' });
        expect(response.text).toBe('Hola, La frase ingresada es palindromo');
    });
    it('retorna "no es palíndromo" para una frase que no sea palíndromo', async () => {
        const response = await request(app).get('/palindromo').query({ frase: 'hello' });
        expect(response.text).toBe('Hola, La frase ingresada no es palindromo');
    });
});
describe('GET /primo', () => {
    it('retorna el número es primo', async () => {
        const response = await request(app).get('/primo').query({ numero: '7' });
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hola, el numero ingresado es un numero primo');
    });
    it('retorna el número no es primo', async () => {
        const response = await request(app).get('/primo').query({ numero: '4' });
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hola, el numero ingresado no es un numero primo');
    });
    it('retorna no es primo ya que el numero es menor a 2', async () => {
        const response = await request(app).get('/primo').query({ numero: '1' });
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hola, el numero ingresado no es un numero primo');
    });
});