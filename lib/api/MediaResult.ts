import { MediaRating } from "./MediaRating";

interface BaseResponse {
    Response: 'True' | 'False';
}

export interface ErrorResponse extends BaseResponse {
    Error: string;
}

export interface MediaResponse extends BaseResponse {
    Title: string;
    Year: number;
    Type: 'movie' | 'series' | 'game';
    Ratings: ReadonlyArray<MediaRating>;
    imdbId: number;
}
