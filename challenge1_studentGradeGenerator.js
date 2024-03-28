// Function to calculate grade based on student's mark
function calculateGrade(mark) {
    if(mark>=0 && mark <=100)
     // if mark is greater than 79, assign 'A'
    if (mark >= 79 ) {
        return'A';//excellent
        // If the mark is between 60 and 79 assign 'B'
    } else if (mark >= 60) {
        return 'B';// good
        // If the mark is between 50 and 59 assign 'C'
    } else if (mark >= 50) {
        return 'C';// average
        // If the mark is between 40 and 49 assign 'D'
    } else if (mark >40) {  
        return 'D';
       // If the mark is less than 40
    } else if(mark <40 && mark >=0) {
        return 'E';// Fail
    }

}
  // Prompt user to input a mark and store it in the 'mark' variable
  //parse float() a string and convert it to a floating-point number
  const mark = parseFloat(prompt("Enter student's mark (between 0 and 100):"));
     
    //check the input if 'mark' is a number and if it falls within the range of 0 to 100
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        // If the input is valid, call the 'calculateGrade' function to give the grade that matches the mark
        const grade = calculateGrade(mark);
        // give the Output the grade indicating the mark entered and the corresponding grade 
        console.log(`The grade for ${mark} is ${grade}.`);
    } else {
        // If the input is invalid (not a number or outside the range), display an error message
        console.log("Invalid input. Mark should be between 0 and 100.");
    }