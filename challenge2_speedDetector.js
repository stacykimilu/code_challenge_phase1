// Function to calculate demerit points based on speed that is put as an input
function calculateDemeritPoints(speed) {
    const speedLimit = 70;

    // Calculate demerit points
    let demeritPoints = Math.floor((speed - speedLimit) / 5);

    // Check if demerit points exceed limit and feedback
    if (speed<=speedLimit){
          return"ok"}
    if (demeritPoints >=12) {
        return "License suspended";
    } else if (demeritPoints>0){
        return "Points: " + demeritPoints;
    }
}
    // Get input from user
    //parse float() a string and convert it to a floating-point number
const speed = parseInt(prompt("Enter the speed of the car (in km/h): "));

// Validate input
if (!isNaN(speed)) {
    // Calculate and output demerit points
    console.log(calculateDemeritPoints(speed));
} else {
    console.log("Invalid input. Please enter a numeric value for speed.");
}
