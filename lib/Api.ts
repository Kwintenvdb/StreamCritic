import qs from 'qs';
import fetch from 'node-fetch';

export class Api {
    private apiBaseBath = 'https://www.omdbapi.com/?';

    constructor(private key: string) {

    }

    private validateKey() {
        if (!this.key) {
            throw new Error('API requires an API key');
        }
    }

    search() {
        this.validateKey();

        const params = {
            apiKey: this.key,
            s: 'test'
        };
        const queryParams = qs.stringify(params);
        const url = this.apiBaseBath + queryParams;

        fetch(url)
            .then(res => res.json())
            .then(json => console.log(json));
    }
}
