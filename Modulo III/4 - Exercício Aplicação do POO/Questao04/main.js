/*Questão 4.  Um cache com TTL (Time to Live) é uma técnica de armazenamento temporário de dados, 
onde os dados são mantidos por um período específico de tempo antes de expirarem. 
O TTL define o tempo em que os dados podem ser armazenados no cache, após o qual eles são automaticamente removidos ou marcados como obsoletos. 

Crie uma classe chamada Cache que receberá o TTL em milissegundos ao ser inicializada, 
a classe armazenará o cache em uma estrutura de chave-valor e conterá os seguintes métodos:
set(key, value): adiciona uma chave e um valor ao cache, iniciando a contagem do TTL (Time to Live).
get(key): retorna o valor associado a uma chave. Se o valor não for encontrado, retorna undefined. Se o TTL tiver expirado, o valor será removido e o método retornará undefined (lazy strategy). Se o valor existir e o TTL não tiver expirado, o valor será retornado.
remove(key): remove um valor a partir de sua chave.
removeExpired(): remove todos os valores cujo TTL tenha expirado.
*/

const Cache = require('./Cache');

// Create an instance of the Cache with TTL of 1000 milliseconds (1 second)
const cache = new Cache(1000);

// Add some items to the cache
console.log('Adding items to the cache...');
cache.set('key1', 'value1');
cache.set('key2', 'value2');
cache.set('key3', 'value3');

// Test retrieving values
console.log('Getting values immediately...');
console.log('key1:', cache.get('key1'));  // Should return 'value1'
console.log('key2:', cache.get('key2'));  // Should return 'value2'
console.log('key3:', cache.get('key3'));  // Should return 'value3'

// Wait for 1.5 seconds to allow the TTL to expire
setTimeout(() => {
  console.log('Getting values after TTL expiration...');
  console.log('key1:', cache.get('key1'));  // Should return undefined (expired)
  console.log('key2:', cache.get('key2'));  // Should return undefined (expired)
  console.log('key3:', cache.get('key3'));  // Should return undefined (expired)

  // Add the key back after expiration and remove a key manually
  cache.set('key4', 'value4');
  cache.remove('key2');
  
  console.log('key2 removed, key4 added:');
  console.log('key2:', cache.get('key2'));  // Should return undefined (removed)
  console.log('key4:', cache.get('key4'));  // Should return 'value4'
  
  // Manually remove all expired items
  cache.removeExpired();
  console.log('Expired items removed.');
  console.log('key4:', cache.get('key4'));  // Should return 'value4' (not expired yet)
}, 1500);
