// Function to calculate the total bill
function calculateBill() {
    // Prices for each cake
    const prices = {
        rainbow: 300,
        chocolate: 300,
        redVelvet: 250,
        blackForest: 350
    };

    // Get the quantity for each cake from the input fields
    // Use parseInt() to convert the string value to a number, default to 0 if empty
    const rainbowQty = parseInt(document.getElementById('rainbow').value) || 0;
    const chocolateQty = parseInt(document.getElementById('chocolate').value) || 0;
    const redVelvetQty = parseInt(document.getElementById('redVelvet').value) || 0;
    const blackForestQty = parseInt(document.getElementById('blackForest').value) || 0;
    
    // Calculate the total cost
    const totalCost = (rainbowQty * prices.rainbow) + 
                      (chocolateQty * prices.chocolate) +
                      (redVelvetQty * prices.redVelvet) +
                      (blackForestQty * prices.blackForest);

    // Get the element where the result will be displayed
    const billResultDiv = document.getElementById('bill-result');

    // Display the result only if the total cost is greater than 0
    if (totalCost > 0) {
        billResultDiv.innerHTML = `
            <h4>Purchase Order Bill!!</h4>
            <p>Total Price: Rs. ${totalCost}</p>
        `;
    } else {
        // If nothing is ordered, clear the result area
        billResultDiv.innerHTML = '';
    }
}