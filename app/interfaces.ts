export interface Trending {
  results: {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
  }[];
}

export interface Movie {
  title: string;
  homepage: string;
  original_language: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
}
