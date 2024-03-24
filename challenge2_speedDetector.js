// Importing prompt-sync library
const prompt = require('prompt-sync')();

// Function to calculate demerit points based on speed that is put as an input
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerKmAboveLimit = 1;

    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / 5);

    // Check if demerit points exceed limit and feeback
    if (demeritPoints > 12) {
        return "License suspended";
    } else {
        return "Points: " + demeritPoints;
    }
}

// Get input from user
const speed = parseInt(prompt("Enter the speed of the car (in km/h): "));

// Validate input
if (!isNaN(speed)) {
    // Calculate and output demerit points
    console.log(calculateDemeritPoints(speed));
} else {
    console.log("Invalid input. Please enter a numeric value for speed.");
}
