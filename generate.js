
//This file will return an array of 100 cats with randomly generated information



//This function returns a random integer between the specified values. 
//The value is no lower than min 
//(or the next integer greater than min if min isn't an integer), 
//and is less than (but not equal to) max.

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//This function returns string with a random gender. 

function assignGender(randomNum){
	assignedGender = "unknown";
	if (randomNum == 0) {
		assignedGender = "male" ;
	} else {
		assignedGender = "female" ;
	}
	return assignedGender
}

//This function returns a string with a random color

function assignColor(randomNum){
	switch (randomNum) {
  		case 1:
  		assignedColor = "black" ;
    		break;
  		case 2:
  			assignedColor = "white" ;
  			break;
  		case 3:
  			assignedColor = "orange" ;
    		break;
    	case 4:
  			assignedColor = "tabby" ;
    		break;
    	case 5:
  			assignedColor = "brown" ;
    		break;
    	case 6:
  			assignedColor = "tortoise-shell" ;
    		break;
    	case 7:
  			assignedColor = "gray" ;
    		break;
        case 8:
  			assignedColor = "cream" ;
    		break;
  		default:
  			assignedColor = "red" ;
    		console.log(`Random Number Not In Color Range`);
}
	return assignedColor
}


//This function returns a string with a random size. 
function assignSize(randomNum){
	switch (randomNum) {
  		case 1:
  		assignedSize = "large" ;
    		break;
  		case 2:
  			assignedSize = "medium" ;
  			break;
  		case 3:
  			assignedSize = "small" ;
    		break;
  		default:
  			assignedSize = "medium" ;
    		console.log(`Random Number Not In Size Range`);
}
	return assignedSize
}

//This function returns a string with a random hair. 
function assignHair(randomNum){
	switch (randomNum) {
  		case 1:
  		assignedHair = "short hair" ;
    		break;
  		case 2:
  			assignedHair = "medium hair" ;
  			break;
  		case 3:
  			assignedHair = "long hair" ;
    		break;
    	case 4:
  			assignedHair = "hairless" ;
    		break;
  		default:
  			assignedSize = "medium hair" ;
    		console.log(`Random Number Not In Hair Range`);
}
	return assignedHair
}



// Returns an array named cats 
// the array is filled with hashes
// each hash is generated using above functions 
module.exports = function(){
	//faker is a tool used for name generation
	var faker = require("faker");
	//lodash is a tool for arrays
	var _ = require("lodash");
	return {
		cats: _.times(100, function (n){
			var assignedGender = assignGender(getRandomInt(0, 2));
			var assignedColor = assignColor(getRandomInt(1,9));
			//mock age distribution reduces number of geriatics and kittens
			var assignedAge = Math.abs(getRandomInt(1,21)-getRandomInt(1,21));
			var assignedSize = assignSize(getRandomInt(1,4));
			var assignedHair = assignHair(getRandomInt(1,5));
			var assignedDaysUnadopted = getRandomInt(1,400) ;
			return {
				name: faker.name.firstName(),
				gender: assignedGender,
				color: assignedColor,
				age: assignedAge,
				size: assignedSize,
				hair: assignedHair,
				daysUnadopted: assignedDaysUnadopted
			}
		})
	}

}