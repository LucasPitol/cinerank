import { Router } from "@angular/router";

export const Utils = 
{
    goToMovieDetails: function(movieId: number, router: Router)
	{
		router.navigate(["details/" + movieId]);
	},

	goHome: function(router: Router)
	{
		router.navigate(["home"])
	},
}