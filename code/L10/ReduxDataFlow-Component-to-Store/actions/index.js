//Action Creator Function
export const selectMovie = (movie) => {

	console.log("You click on Movie: "+ JSON.stringify(movie));
	
	return {
				type: "MOVIE_SELECTED",
				payload: movie
			}
	
};