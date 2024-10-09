// 100-main.js
import { queryAPI, weakMap } from './100-weak.js';

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // Output: 1

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // Output: 2

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint); // This will throw an error: "Endpoint load is high"
