// calculate monthly payment
function calcPayment(loanAmount, loanTerm, interestRate) {

	let monthlyPayment = (loanAmount * (interestRate / 1200) / (1 - Math.pow(1 + interestRate / 1200, -loanTerm)));
	monthlyPayment = monthlyPayment;

	return monthlyPayment;
}

// calculate current interest
function calcInterest(loanAmount, interestRate) {
	let curInterest = loanAmount * (interestRate / 1200);
	return curInterest;
}

// build amoritization schedule
function getPayments() {
	let loanAmount = document.getElementById("loanAmount").value;
	let loanTerm = document.getElementById("loanTerm").value;
	let interestRate = document.getElementById("interestRate").value;

	// type verification
	loanAmount = Number(loanAmount);
	loanTerm = parseInt(loanTerm);
	interestRate = parseFloat(interestRate);

	// get table template
	let template = document.getElementById("amoritization-schedule");
	let tableBody = document.getElementById("amoritizationScheduleBody")
	// clear the table
	tableBody.innerHTML = "";

	// calc monthly payment 
	let payment = calcPayment(loanAmount, loanTerm, interestRate);

	// set schedule values
	let principal = 0;
	let interestPayment = 0;
	let totalInterest = 0;
	let balance = loanAmount;

	// create an obj for monthly payments and an array to store paymentObjs
	let paymentArray = [];

	// loop to calc monthly data and push into array
	for (let month = 1; month <= loanTerm; month++) {
		interestPayment = calcInterest(balance, interestRate);
		totalInterest += interestPayment;
		principal = payment - interestPayment;
		balance = balance - principal;

		let paymentObj = {
			month: month,
			payment: payment, 
			principal: principal,
			interest: interestPayment,
			totalInterest: totalInterest,
			balance: balance
		};

		// push monthly paymentObj into payment array
		paymentArray.push(paymentObj);
	}	
}