function calculateLoan() {
    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;

    // Validate input values
    if (isNaN(amount) || isNaN(interest) || isNaN(years) || amount <= 0 || interest <= 0 || years <= 0) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate monthly payment
    const monthlyPayment = (amount * interest) / (1 - Math.pow(1 + interest, -years));
    const resultElement = document.getElementById('monthly-payment');
    
    // Display result
    resultElement.textContent = monthlyPayment.toFixed(2);
}