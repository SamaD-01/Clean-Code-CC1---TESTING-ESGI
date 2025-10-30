
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
    const GRANDE_SUITE_CASE_1 = [1, 2, 3, 4, 5];
    const GRANDE_SUITE_CASE_2 = [2, 3, 4, 5, 6];

    // Yams Case
    if (diceRole[0] === diceRole[1] && diceRole[1] === diceRole[2] && diceRole[2] === diceRole[3] && diceRole[3] === diceRole[4]) {
        points += 50;
    }
    // Grande Suite Case
    const isGrandeSuitePattern = (array, pattern) => {
        for (let i = 0; i < pattern.length; i++) {
            if (!array.includes(pattern[i])) {
                return false;
            }
        }
        return true;
    };

    if (isGrandeSuitePattern(diceRole, GRANDE_SUITE_CASE_1) || isGrandeSuitePattern(diceRole, GRANDE_SUITE_CASE_2)) {
        points += 25;
    }

    return points;
}

export { lancersYams };


