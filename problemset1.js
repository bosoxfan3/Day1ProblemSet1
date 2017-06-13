function findYearOfBirth(age) {
		return 2017-age;
}

function whoAmI(name, age) {
	if (typeof name !== 'string' || typeof age !== 'number') {
		console.error('Arguments not valid');
	}
	if (name === null || age === null) {
		console.error('Arguments not valid');
		return;
	}
	if (name.length === 0 || age.length === 0) {
		console.error('Arguments not valid');
		return;
	}
	if (age < 0) { throw new Error('Invalid age') }
	let yearOfBirth = findYearOfBirth(age);
	console.log('Hi, my name is '+name+' and I\'m '+age+' years old');
	console.log('I was born in '+yearOfBirth);
}

whoAmI('Daniel', 25);


try {
  whoAmI('Daniel', -25);
} catch(e) {
  console.log('Age cannot be negative');
}