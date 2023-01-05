"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
// Part 1: Declare (5) Variables With Type
//let spacecraftName: string = "Determination";
//let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
//let milePerKilometer: number = 0.621;
// Part 2: Print Days to Mars
var milesToMars;
milesToMars = kilometersToMars * milePerKilometer;
var hoursToMars;
hoursToMars = milesToMars / speedMph;
var daysToMars;
daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
//console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
//console.log(`${spacecraftName} is ${getDaysToLocation(kilometersToMars)} days to Mars.`)
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
function getDaysToMoon(kilometersToTheMoon) {
    var milesAwayFromMoon = kilometersToTheMoon * milePerKilometer;
    var hoursToMoon = milesAwayFromMoon / speedMph;
    return hoursToMoon / 24;
}
//console.log(`${spacecraftName} is ${getDaysToMoon(kilometersToTheMoon)} days to the Moon.`);
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
