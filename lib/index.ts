import apiConfig from './apiConfig.json';
import { Api } from './api/Api';
import { DomWatcher } from './dom/DomWatcher';

const key = apiConfig.key;
const api = new Api(key);

const rootNode = document.querySelector('.mainView');
const watcher = new DomWatcher(rootNode, async (titleElement, title) => {
    const media = await api.findByTitle(title);
    const ratings = media.Ratings;

    if (ratings.length > 0) {
        const firstRating = ratings[0];
        const div = document.createElement('div');
        div.textContent = firstRating.Value;
        titleElement.parentElement.appendChild(div);
    } else {
        // No rating available
    }
});
