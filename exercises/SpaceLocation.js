var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToMars = milesAway / this.speedMph;
        return hoursToMars / 24;
    };
    return Spacecraft;
}());
var spaceShuttle, number;
spaceShuttle = new Spacecraft('Determination', 17500);
console.log("".concat(spaceShuttle.name, " would take ").concat(spaceShuttle.getDaysToLocation(kilometersToMars), " days to get to Mars."));
console.log("".concat(spaceShuttle, " is ").concat(getDaysToMoon(kilometersToTheMoon), " days to the Moon."));
