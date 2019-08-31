import qs from 'qs';
import fetch from 'node-fetch';

import { MediaResponse, ErrorResponse } from './MediaResult';
import { SearchResponse } from './SearchResponse';

type Response = MediaResponse | ErrorResponse;

export class Api {
    private apiBaseBath = 'https://www.omdbapi.com/?';

    constructor(private key: string) {
    }

    private validateKey() {
        if (!this.key) {
            throw new Error('API requires an API key');
        }
    }

    async search(title: string): Promise<ReadonlyArray<MediaResponse>> {
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

    private isErrorResponse(response: Response): response is ErrorResponse {
        return response.Response === 'False';
    }

    async findByTitle(title: string): Promise<MediaResponse> {
        this.validateKey();

        const params = {
            apiKey: this.key,
            t: title
        };
        const queryParams = qs.stringify(params);
        const url = this.apiBaseBath + queryParams;
        const response: Response = await fetch(url).then(res => res.json());
        if (this.isErrorResponse(response)) {
            throw new Error(`Could not find matching media with title ${title}.`);
        } else {
            console.log(response);
            return response;
        }
    }
}
