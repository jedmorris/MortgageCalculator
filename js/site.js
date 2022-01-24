// display message to the user
function getValues() {

	let loanAmount = document.getElementById("loanAmount").value;
	let loanTerm = document.getElementById("loanTerm").value;
	let interestRate = document.getElementById("interestRate").value;

	loanAmount = Number(loanAmount);
	loanTerm = parseInt(loanTerm);
	interestRate = parseFloat(interestRate);

	calcPayment(loanAmount, loanTerm, interestRate);


}

function calcPayment(loanAmount, loanTerm, interestRate) {
	
	let monthlyPayment = (loanAmount * (interestRate / 1200) / (1 - Math.pow(1 + interestRate / 1200, - loanTerm)));
	monthlyPayment = monthlyPayment.toFixed(2);
	return monthlyPayment;
}

function generatePayments(loanAmount, loanTerm, interestRate) {

	let paymentArray = [];
	let paymentObj = {};

	let month = loanTerm;
	let payment = 0;
	let principal = 0;
	let interest = 0;
	let totalInterest = 0;
	let balance = 0;






}