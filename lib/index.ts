import { Api } from './api/Api';
import apiConfig from './apiConfig.json';

const key = apiConfig.key;
const api = new Api(key);
// api.search('Nightcrawler')
//     .then(results => {
//         console.log(results);
//     });

api.findByTitle('123456');
