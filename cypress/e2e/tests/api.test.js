const request = require('supertest');

const API_URL = 'https://jsonplaceholder.typicode.com';

describe('Testes na API de Usuários', () => {
  it('Deve retornar a lista de usuários com sucesso (GET)', async () => {
    const res = await request(API_URL).get('/users');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('Deve validar erro 400 ao enviar um POST sem campo obrigatório', async () => {
    const res = await request(API_URL)
      .post('/users')
      .send({ name: 'Daniel' }); // Falta o campo email

    expect(res.status).toBe(400); // API Mock pode não retornar 400 real, mas esse é o comportamento esperado
  });
});
