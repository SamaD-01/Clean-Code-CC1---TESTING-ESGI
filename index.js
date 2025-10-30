
const lancersYams = (...params) => {
    let diceRoles = params[0];
    for (let diceRole of diceRoles) {
        if (diceRole.length != 5 ) {
            return null;
        }
    }
}
export { lancersYams };