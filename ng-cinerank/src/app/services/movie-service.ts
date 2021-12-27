import { Environment } from "../environments/environment";
import { MovieDto } from "../models/dtos/movie-dto";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Constants } from "../utils/constants";

@Injectable()
export class MovieService {

    constructor(private http: HttpClient) { }

    async getMovieList(page: any, oldList: MovieDto[]) {
        var movieDtoList: MovieDto[] = []

        var url = (Environment.tmdbBaseApiUrl + 'movie/top_rated' + Environment.tmdbApiKey)

        this.http.get(url, {
            params: {
                'language': Constants.ptLanguage,
                'page': page,
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

                movieDtoList.push(movieDto)
            });

            oldList.concat(movieDtoList)

            return oldList
        })

        return movieDtoList
    }
}
