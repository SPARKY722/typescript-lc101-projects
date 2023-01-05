class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToMars: number = milesAway / this.speedMph;
        return hoursToMars / 24;
    }
let spaceShuttle: string, number;
spaceShuttle = new Spacecraft('Determination', 17500);

console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);

console.log(`${spaceShuttle} is ${getDaysToMoon(kilometersToTheMoon)} days to the Moon.`);
}