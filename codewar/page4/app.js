function findMissingCows(cows) {
    let sortedCows = cows.sort((a, b) => a - b);
    let firstCow = sortedCows[0];
    let lastCow = sortedCows[sortedCows.length - 1];
    let existingCows = new Set(sortedCows);
    let missingCows = [];
    for (let i = firstCow; i <= lastCow; i++) {
        if (!existingCows.has(i)) {
            missingCows.push(i);
        }
    }
    return {
        missingCount: missingCows.length,
        missingList: missingCows
    };
}
let cows = [1, 3, 4, 6, 7, 9, 10];
let result = findMissingCows(cows);
document.write("Yo'qolgan qo'ylar soni: ", result.missingCount);
document.write(" Yo'qolgan qo'ylar ro'yxati: ", result.missingList);
