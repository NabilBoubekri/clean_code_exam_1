const BRELAN_POINTS = 28;
const CARRE_POINTS = 35;
const FULL_POINTS = 30;

export function getYamsPoints(rolls: number[][]): number {
    let totalPoints = 0;
    for (const roll of rolls) {
        const frequency = countDiceFrequency(roll);
        if (isCarre(roll)) {
            totalPoints += CARRE_POINTS;
        }
        else if (hasFull(frequency)) {
            totalPoints += FULL_POINTS;
        }
        else if (isBrelan(roll)) {
            totalPoints += BRELAN_POINTS;
        }
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