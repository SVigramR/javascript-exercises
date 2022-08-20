const findTheOldest = function(array) {
	return array.reduce((oldest, currentPerson) => {
	  const oldestAge = age(oldest.yearOfBirth, oldest.yearOfDeath)
	  const currentAge = age(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
	  return oldestAge < currentAge ? currentPerson : oldest
	})
};

const age = function(birth, death) {
	if (!death) {
	  death = new Date().getFullYear();	
	}
	return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
