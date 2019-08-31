import qs from 'qs';
import fetch from 'node-fetch';

import { MediaResult } from './MediaResult';
import { SearchResponse } from './SearchResponse';

export class Api {
    private apiBaseBath = 'https://www.omdbapi.com/?';

    constructor(private key: string) {
    }

    private validateKey() {
        if (!this.key) {
            throw new Error('API requires an API key');
        }
    }

    async search(title: string): Promise<ReadonlyArray<MediaResult>> {
        this.validateKey();

        const params = {
            apiKey: this.key,
            s: title
        };
        const queryParams = qs.stringify(params);
        const url = this.apiBaseBath + queryParams;

        const response: SearchResponse = await fetch(url).then(res => res.json());
        return response.Search;
    }
}
