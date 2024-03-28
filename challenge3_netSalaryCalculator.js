// Function to prompt the user for input
function getInput(promptMessage) {
    return parseFloat(prompt(promptMessage));
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Define tax rates
    const taxRates = 0.25; // Tax rate
    const nhifRates = 0.53; // NHIF deductions rate
    const nssfRate = 0.06; // NSSF deductions rate

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
    const nhifDeductions = grossSalary * nhifRates;
    const nssfDeductions = grossSalary * nssfRate;

    // Calculate tax (PAYE)
    const taxableIncome = Math.max(0, grossSalary - nhifDeductions - nssfDeductions);
    const tax = taxableIncome * taxRates;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Return salary details
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

// Get input from user
const basicSalary = getInput("Enter basic salary (in Ksh): ");
const benefits = getInput("Enter benefits (in Ksh): ");

// Check if inputs are valid
if (!isNaN(basicSalary) && !isNaN(benefits)) {
    // Calculate salary details
    const salaryDetails = calculateNetSalary(basicSalary, benefits);

    // Output salary details
    console.log("Gross Salary:", salaryDetails.grossSalary);
    console.log("Tax (PAYE):", salaryDetails.tax);
    console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
    console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
    console.log("Net Salary:", salaryDetails.netSalary);
} else {
    console.log("Invalid input. Please enter numeric values for basic salary and benefits.");
}
