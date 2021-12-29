import { Component, Input } from "@angular/core";
import { MovieDto } from "src/app/models/dtos/movie-dto";

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {
    
    @Input("movieDto") movieDto: MovieDto

}
