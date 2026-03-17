function calculateTax(totalIncome, tax) {
    if (totalIncome > 1200000) {
        return (totalIncome - 1200000) > tax ? 0 : -(tax - (totalIncome - 1200000));
    }
    return 0;
}

// Example usage
console.log(calculateTax(1270588, 70588)); // Adjust values as needed
