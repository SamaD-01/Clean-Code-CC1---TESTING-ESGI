
const lancersYams = (...params) => {
    let diceRoles = params[0];
    let totalPoints = 0;
    for (let diceRole of diceRoles) {
        let points = calculatePoints(diceRole);
        if (points === null) return null;
        totalPoints += points;
    }
    return totalPoints;
}

const calculatePoints = (diceRole) => {
    if (diceRole.length != 5 )  return null;
    let points = 0;
    // Yams Case
    if (diceRole[0] === diceRole[1] && diceRole[1] === diceRole[2] && diceRole[2] === diceRole[3] && diceRole[3] === diceRole[4]) {
        points = 50;
    }

    return points;
}

export { lancersYams };
