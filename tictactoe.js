
var turn =false;
function play(event){
	//console.log(event);
	if(!event.target.innerText){
		event.target.innerText= turn? "O":"X";
	}
	turn= !turn;
}