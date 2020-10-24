function upperCase(input) {
	//console.log(input)
	for (var i = 0; i < input.length; i++) {
		if(input.charCodeAt(i)< 97 || input.charCodeAt(i) > 122){
			continue;
		}
		/*let a = input[i];
		let b = input.charCodeAt(i);
		let c = input.charCodeAt(i)-32;
		let d = String.fromCharCode(input.charCodeAt(i)-32);
		console.log("a=" + a + "  b=" + b + "  c=" + c + "  d=" + d);*/
		input=input.replace(input[i],String.fromCharCode(input.charCodeAt(i)-32));
		//console.log(input);
	}
	console.log(input)
	return input;
}
module.exports = function upperCaseR(input) {
	return input.toUpperCase();
}