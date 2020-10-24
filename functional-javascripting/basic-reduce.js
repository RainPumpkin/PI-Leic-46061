function countWords(inputWords) {
	console.log(inputWords)
	let wordCount = inputWords.reduce(function (allWords, words) {
		if (words in allWords){
			allWords[words]++;
		} 
		else {
			allWords[words]=1;
		}
		return allWords;
	}, {})
	return wordCount
}

module.exports = countWords
//unfortunately saw solution on the reduce page, although I should have adapted it better
//under is the optimal solution from the workshop itself
/*
function countWords(arr) {
	return arr.reduce(function(countMap, word) {
		countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
		return countMap
	}, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords
*/