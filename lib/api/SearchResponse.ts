import { MediaResponse } from "./MediaResult";

export interface SearchResponse {
    Search: ReadonlyArray<MediaResponse>;
    totalResults: number;
}
