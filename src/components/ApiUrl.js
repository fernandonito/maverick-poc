const ApiUrl = () => { return 'http://maverick-api.localhost/get-id.php' ; };

console.log('apiurl is running');

export const ApiUrlGetId = () => ({ apiurl: 'http://maverick-api.localhost/get-id.php' });

export const ApiUrlGetLista = () => ({ apiurl: 'http://maverick-api.localhost/get-lista.php' });

export default ApiUrl;