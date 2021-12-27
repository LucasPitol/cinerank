import { Component, Input, OnInit } from "@angular/core";
import { MovieDto } from "src/app/models/dtos/movie-dto";

@Component({
    selector: 'movie-details-component',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
    
    @Input("selectedMovie") selectedMovie: MovieDto

    loading: boolean
    
    ngOnInit(): void {
        this.getMovieDetails()
    }

    getMovieDetails() {
        this.loading = true
    }
}