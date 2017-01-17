//Whenever any action occurs, it is send to all the Reducers
//Only valid reducers responds to Action Change, Other Reducer don't respond

//When app boots, the state is null.. Once they choose any action, the state responds with new data
export default function(state={},action){

	switch(action.type){
		case "MOVIE_SELECTED":
			return action.payload;
		break;
	}
	return state;
}