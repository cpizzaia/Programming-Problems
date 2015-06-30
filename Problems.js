function problem1(){
	var userInput = document.getElementById("input1").value;
	var sumOfMultiples = 0;

	for(i=0; i<userInput; i++){
		if((i % 3 === 0) || (i % 5 === 0)){
			sumOfMultiples += i;
		}
		else{
			//do nothing
		}
	}


	document.getElementById("result1").innerHTML = "Solution: " + sumOfMultiples;
}

function problem2(){
	var userInput = document.getElementById("input2").value;
	var fibonacciNumber, sumOfEvenTerms, total, lastfibonacciNumber, temp;
	fibonacciNumber = 1;
	lastfibonacciNumber = 0;
	sumOfEvenTerms = 0;
	total = 0;


	while(total<userInput){

		if((fibonacciNumber % 2) == 0){
		sumOfEvenTerms += fibonacciNumber;		
		}

		else{
			//do nothing
		}
		total += fibonacciNumber;
		temp = fibonacciNumber;
		fibonacciNumber += lastfibonacciNumber;
		lastfibonacciNumber = temp;
	

	}
	if((fibonacciNumber % 2) == 0){
		sumOfEvenTerms += fibonacciNumber;		
	}

	else{
		//do nothing
	}
	document.getElementById("result2").innerHTML = "Solution: " + sumOfEvenTerms;

}

function problem3(){
	var userInput = document.getElementById("input3").value;
	var largestPrimeFactor;

	for(i=userInput; i >= 1; i--){

		if(((userInput % i) === 0) && (checkIfPrime(i))){
			
			largestPrimeFactor = i;
			break;			
		}

		else{
			//do nothing
		}
	}

	document.getElementById("result3").innerHTML = "Solution: " + largestPrimeFactor;

}

function checkIfPrime(number){

	for(j=1; j<=number; j++){
		if((j != 1) && (j != number)){
			if(number % j == 0){
				return false;
			}
			else{
				//do nothing
			}
		}
		else{
			//do nothing
		}
	}

	return true;

}


