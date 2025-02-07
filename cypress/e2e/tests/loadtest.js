import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 100, // Simula 100 usuários simultâneos
  duration: '30s', // Teste roda por 30 segundos
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users');
  check(res, { 'status é 200': (r) => r.status === 200 });
  sleep(1);
}
