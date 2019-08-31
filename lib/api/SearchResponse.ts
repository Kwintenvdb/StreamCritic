import { MediaResult } from "./MediaResult";

export interface SearchResponse {
    Search: ReadonlyArray<MediaResult>;
    totalResults: number;
}
