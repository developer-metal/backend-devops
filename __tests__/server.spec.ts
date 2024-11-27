import app from '../src/server.js'
import request from 'supertest';

describe('Server', () => {
    
    test('Servidor en endpoint /', async () => {

        return await request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /text/)
        
    });

}); 