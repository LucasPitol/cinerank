import { Component, OnInit } from "@angular/core";
import { MovieDto } from "src/app/models/dtos/movie-dto";
import { MovieService } from "src/app/services/movie-service";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    movieDtoList: MovieDto[]
    movieSelectedId: string
    loading: boolean
    selectedMovie: MovieDto

    constructor(
        private movieService: MovieService,
    ) { }

    ngOnInit(): void {
        this.loading = true
        this.resetMovieSelectedId()
        this.getMovieList()
    }

    resetMovieSelectedId() {
        this.movieSelectedId = ''
        this.selectedMovie = null
    }

    getMovieList() {
        this.loading = true

        this.movieService.getMovieList().then((res) => {
            this.movieDtoList = res

            this.loading = false
        })
    }

}