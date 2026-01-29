export function getYamsPoints(rolls: number[][]): number {
    let totalPoints = 0;
    for (const roll of rolls) {
        const frequency = countDiceFrequency(roll);
        if (Object.values(frequency).includes(3) && Object.values(frequency).includes(2)) {
            totalPoints += 30;
        }
        else if (isCarre(roll)) {
            totalPoints += 35;
        }
        else if (isBrelan(roll)) {
            totalPoints += 28;
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