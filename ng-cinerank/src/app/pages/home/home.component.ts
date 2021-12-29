import { MovieService } from "src/app/services/movie-service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MovieDto } from "src/app/models/dtos/movie-dto";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


    movieDtoList: MovieDto[]
    loading: boolean
    page: number

    constructor(
        private movieService: MovieService,
    ) { }

    ngOnInit(): void {
        this.refreshData()
    }

    refreshData() {
        this.movieDtoList = []
        this.page = 1
        this.getMovieList()
    }

    getMovieList() {
        this.loading = true

        this.movieService.getMovieList(this.page, this.movieDtoList).then((res) => {
            this.movieDtoList = res

            this.loading = false
        })
    }

    onScroll() {
        console.log('Scroll')

        if (!this.loading) {
            this.page = this.page + 1

            this.getMovieList()
        }

    }

    selectMovie(movieDto: MovieDto) {
        // route.navigate

    }

}