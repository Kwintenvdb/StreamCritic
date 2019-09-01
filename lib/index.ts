import apiConfig from './apiConfig.json';
import { Api } from './api/Api';
import { DomWatcher } from './dom/DomWatcher';
import { MediaResponse } from './api/MediaResult.js';
import { MediaRating } from './api/MediaRating.js';

const key = apiConfig.key;
const api = new Api(key);

const rootNode = document.querySelector('.mainView');
const watcher = new DomWatcher(rootNode, async (titleElement, title) => {
    try {
        await onTitleAppeared(title, titleElement);
    }
    catch {
        // Media not found through OMDB
    }
});

async function onTitleAppeared(title: string, titleElement: Element) {
    const media = await api.findByTitle(title);
    const rating = findImdbRating(media);
    if (rating) {
        createRatingElement(rating, titleElement);
    }
    else {
        // No rating available
    }
}

function createRatingElement(rating: MediaRating, titleElement: Element) {
    const div = document.createElement('div');
    div.textContent = `IMDb rating: ${rating.Value}`;
    titleElement.parentElement.appendChild(div);
}

function findImdbRating(media: MediaResponse): MediaRating {
    return media.Ratings.find(r => r.Source === 'Internet Movie Database');
}
