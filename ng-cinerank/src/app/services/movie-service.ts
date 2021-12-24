import { MovieDto } from "../models/dtos/movie-dto";

export class MovieService {

    async getMovieList() {
        var movieDtoList: MovieDto[] = []

        var m1 = new MovieDto()
        m1.title = 'Tropa de Elite 2'
        m1.imageUrl = 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/90/29/19962728.jpg'
        m1.cast = 'Wagner Moura, André Ramiro, Milhem Cortaz'
        m1.production = 'José Padilha'
        m1.rating = 4.7

        var m2 = new MovieDto()
        m2.title = 'Django Livre'
        m2.imageUrl = 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/07/53/20391069.jpg'
        m2.cast = 'Jamie Foxx, Christoph Waltz, Leonardo DiCaprio'
        m2.production = 'Quentin Tarantino'
        m2.rating = 4.3

        movieDtoList.push(m1)
        movieDtoList.push(m2)

        return movieDtoList
    }
}
