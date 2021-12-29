import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MovieDto } from "src/app/models/dtos/movie-dto";
import { Utils } from "src/app/utils/utils";

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {
    
    @Input("movieDto") movieDto: MovieDto

    constructor(private router: Router) { }

    goToMovieDetails()
    {
        var movieId = this.movieDto.id

        Utils.goToMovieDetails(movieId, this.router)
    }
}
