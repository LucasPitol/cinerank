import { Environment } from "../environments/environment";
import { MovieDto } from "../models/dtos/movie-dto";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Constants } from "../utils/constants";

@Injectable()
export class MovieService {

    constructor(private http: HttpClient) { }

    async getMovieList() {
        var movieDtoList: MovieDto[] = []

        var url = (Environment.tmdbBaseApiUrl + 'movie/top_rated' + Environment.tmdbApiKey)

        this.http.get(url, {
            params: {
                'language': Constants.ptLanguage
            }
        }).subscribe(data => {

            data['results'].forEach(element => {

                var movieDto = new MovieDto()

                var posterPath = element.poster_path

                movieDto.id = element.id
                movieDto.title = element.title
                movieDto.imageUrl = Environment.tmdbBaseImageUrl + posterPath
                movieDto.rating = element.vote_average
                movieDto.overview = element.overview

                // genre_ids: (4) [16, 10751, 12, 14]
                // overview: "A chegada de um caçador de lobos a uma cidadezinha irlandesa é o começo de uma grande aventura para Robyn, quando ela conhece na floresta uma menina com um estranho dom."
                // popularity: 20.876
                // release_date: "2020-10-26"
                // title: "Wolfwalkers"
                // video: false
                // vote_average: 8.5

                movieDtoList.push(movieDto)
            });

            return movieDtoList
        })

        return movieDtoList
    }
}
