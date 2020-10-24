function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		console.log(submittedUsers[0].id);
		console.log(submittedUsers[1].id);
		var cond = 
	};
}

module.exports = checkUsersValid

/*
check every verifique todos
dentro de cada check every, verifica se existe 1 (some) elemnto dos submitted na good users
se existir 1, retorna true
otherwise returns false
every(some(cond))
cond checks if submitted = any of good
goodUsers.some()
submittedUsers.every(X)
X = (element) => goodUsers.some(Y)
y = 






*/