import { Api } from './Api';
import apiConfig from './apiConfig.json';

const key = apiConfig.key;
const api = new Api(key);
api.search();
