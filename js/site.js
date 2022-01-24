// display message to the user
function getValues() {

	let loanAmount = document.getElementById("loanAmount").value;
	let loanTerm = document.getElementById("loanTerm").value;
	let interestRate = document.getElementById("interestRate").value;

	loanAmount = Number(loanAmount);
	loanTerm = parseInt(loanTerm);
	interestRate = parseFloat(interestRate);

	calcPayment(loanAmount, loanTerm, interestRate);
	generatePayments(loanAmount, loanTerm, interestRate, monthlyPayment);

}

function calcPayment(loanAmount, loanTerm, interestRate) {

	let monthlyPayment = (loanAmount * (interestRate / 1200) / (1 - Math.pow(1 + interestRate / 1200, -loanTerm)));
	monthlyPayment = monthlyPayment.toFixed(2);

	return monthlyPayment;
}

function generatePayments(loanAmount, loanTerm, interestRate, monthlyPayment) {

	let paymentArray = [];
	let paymentObj = {};

	let month = 0;
	let payment = monthlyPayment;
	let principal = monthlyPayment - interestPayment;
	let interestPayment = balance * interestRate / 1200;
	let totalInterest = interestPayment;
	let balance = loanAmount - monthlyPayment;

	for (let month = 1; month <= loanTerm.length; month++) {

		Obj[1] = {
			month: 1++,
			payment: monthlyPayment,
			principal: principal,
			interestPayment: interestRate,
			totalInterest: balance,
			balance: 8,
		};
		
		paymentArray.push(paymentObj);



	}




}