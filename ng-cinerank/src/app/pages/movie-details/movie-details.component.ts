import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovieDto } from "src/app/models/dtos/movie-dto";
import { Utils } from "src/app/utils/utils";

@Component({
    selector: 'movie-details-component',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
    
    @Input("selectedMovie") selectedMovie: MovieDto

    constructor(private router: Router) { }

    loading: boolean
    
    ngOnInit(): void {
        this.getMovieDetails()
    }

    getMovieDetails() {
        this.loading = true
    }

    goBack() {
        Utils.goHome(this.router)
    }
}