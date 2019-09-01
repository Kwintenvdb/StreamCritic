import apiConfig from './apiConfig.json';
import { Api } from './api/Api';
import { DomWatcher } from './dom/DomWatcher';

const key = apiConfig.key;
const api = new Api(key);

const rootNode = document.querySelector('.mainView');
const watcher = new DomWatcher(rootNode, foundTitle => {
    api.findByTitle(foundTitle);
});
