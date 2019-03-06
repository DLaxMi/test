function getoutput() {
	const arr = [1, 2, 3, 4];
	for(let i=0; i<arr.length; i++) {
		for(let j=0; j<arr.length; j++) {
			if(arr[i] - arr[j] == 1) {
				console.log("("+arr[i]+","+arr[j]+")");
			}
		}
	}
}
getoutput();