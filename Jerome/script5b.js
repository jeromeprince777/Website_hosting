document.addEventListener('DOMContentLoaded', () => {
    const emiForm = document.getElementById('emi-form');
    const resultDiv = document.getElementById('result');

    emiForm.addEventListener('submit', (e) => {
        // Prevent the form from submitting and refreshing the page
        e.preventDefault();

        // 1. Get user input and convert to numbers
        const loanAmount = parseFloat(document.getElementById('loanAmount').value);
        const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
        const tenureInYears = parseFloat(document.getElementById('tenure').value);

        // 2. Validate inputs
        if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(tenureInYears) || loanAmount <= 0 || annualInterestRate <= 0 || tenureInYears <= 0) {
            resultDiv.innerHTML = `<p style="color: var(--error-color);">Please enter valid positive numbers for all fields.</p>`;
            return;
        }

        // 3. Perform EMI calculation
        const P = loanAmount;
        const R = annualInterestRate / 12 / 100; // Monthly interest rate
        const N = tenureInYears * 12; // Tenure in months

        // Calculate EMI using the formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
        const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        
        const totalRepayment = emi * N;
        const totalInterest = totalRepayment - P;

        // 4. Format numbers for better readability (Indian numbering system)
        const formatCurrency = (value) => {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(value);
        };
        
        // 5. Display the results
        resultDiv.innerHTML = `
            <div class="result-item">
                <span>Monthly EMI</span>
                <span class="result-highlight">${formatCurrency(emi)}</span>
            </div>
            <div class="result-item">
                <span>Total Interest Payable</span>
                <span>${formatCurrency(totalInterest)}</span>
            </div>
            <hr style="border-color: var(--border-color); margin: 15px 0;">
            <div class="result-item">
                <span>Total Repayment</span>
                <span>${formatCurrency(totalRepayment)}</span>
            </div>
        `;
    });
});