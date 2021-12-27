import { MovieService } from "src/app/services/movie-service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MovieDto } from "src/app/models/dtos/movie-dto";
import { MatSidenav } from "@angular/material/sidenav";
import { SidenavService } from "src/app/services/side-nav-service";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    @ViewChild('sidenav') public sidenav: MatSidenav;

    movieDtoList: MovieDto[]
    movieSelectedId: number
    loading: boolean
    selectedMovie: MovieDto
    page: number

    constructor(
        private movieService: MovieService,
        private sidenavService: SidenavService
    ) { }

    ngOnInit(): void {
        this.resetMovieSelectedId()
        this.refreshData()
    }

    ngAfterViewInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }

    resetMovieSelectedId() {
        this.movieSelectedId = 0
        this.selectedMovie = null
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

    closeDrawer() {
        this.sidenavService.close()
        this.resetMovieSelectedId()
    }

    selectMovie(movieDto: MovieDto) {
        this.movieSelectedId = movieDto.id
        this.selectedMovie = movieDto

        this.sidenavService.open()
    }

}