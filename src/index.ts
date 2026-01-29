const BRELAN_POINTS = 28;
const CARRE_POINTS = 35;
const FULL_POINTS = 30;
const GRANDE_SUITE_POINTS = 40;

export function getYamsPoints(rolls: number[][]): number {
    let totalPoints = 0;
    for (const roll of rolls) {
        const frequency = countDiceFrequency(roll);
        var rollPoints = 0;
        if (isYams(roll)) {
            rollPoints += 50;
        }
        else if(isGrandeSuite(roll)) {
            rollPoints += GRANDE_SUITE_POINTS;
        }
        else if (isCarre(roll)) {
            rollPoints += CARRE_POINTS;
        }
        else if (hasFull(frequency)) {
            rollPoints += FULL_POINTS;
        }
        else if (isBrelan(roll)) {
            rollPoints += BRELAN_POINTS;
        }
        if (isChance(rollPoints)) {
            rollPoints += getChancePoints(roll);
        }

        totalPoints += rollPoints;
    }
    return totalPoints;
}

function isBrelan(roll: number[]): boolean {
    const diceFrequency = countDiceFrequency(roll);
    return hasThreeOfAKind(diceFrequency);
}

function isCarre(roll: number[]): boolean {
    const diceFrequency = countDiceFrequency(roll);
    return hasFourOfAKind(diceFrequency);
}

function countDiceFrequency(roll: number[]): Record<number, number> {
    const frequency: Record<number, number> = {};
    for (const die of roll) {
        frequency[die] = (frequency[die] || 0) + 1;
    }
    return frequency;
}

function hasThreeOfAKind(frequency: Record<number, number>): boolean {
    return Object.values(frequency).some(count => count >= 3);
}

function hasFourOfAKind(frequency: Record<number, number>): boolean {
    return Object.values(frequency).some(count => count >= 4);
}

function hasFull(frequency: Record<number, number>): boolean {
    const counts = Object.values(frequency);
    return counts.includes(3) && counts.includes(2);
}

function isGrandeSuite(roll: number[]): boolean {
    const uniqueValues = Array.from(new Set(roll)).sort((a, b) => a - b);
    return uniqueValues.length === 5 && uniqueValues[4]! - uniqueValues[0]! === 4;
}

function isYams(roll: number[]): boolean {
    return roll.every(die => die === roll[0]);
}

function isChance(rollPoints: number): boolean {
    return rollPoints === 0;
}

function getChancePoints(roll: number[]): number {
    return roll.reduce((a, b) => a + b, 0);
}