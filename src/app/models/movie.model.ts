export interface MoviesResponse {
    results: MoviesResult[]
}

export interface MoviesResult {
    backdrop_path: string,
    original_title: string,
    overview: string,
    release_date: string,
    vote_average: number,
    id: number
}

export interface MovieDetailResponse {
    backdrop_path: string,
    adult: boolean,
    genres: Genres[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number,
    tagline: string,
    title: string,
    vote_average: number,
    production_companies: ProductionCompanies[],
    production_countries: ProductionCountries[],
    vote_count: number,
    error_description: string
}

interface ProductionCompanies {
    logo_path: string,
    name: string
}

interface ProductionCountries {
    iso: string,
    name: string
}

interface Genres {
    name: string
}