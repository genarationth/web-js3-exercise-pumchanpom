// Challenge
let passed = score => score > 11 ? 'error' : score >= 5 ? true : false;

let gradeIndicator = score => {
    if (score > 11) {
        return 'error';
    } else if (score === 11) {
        return 'perfect';
    } else if (score >= 8) {
        return 'excellent';
    } else if (score >= 5) {
        return 'passed';
    } else {
        return 'failed';
    }
}

let scoreReport = score => {
    return `Score:  ${score}\nPassed: ${passed(score)} \nGrade:  ${gradeIndicator(score)}`
}

console.log(scoreReport(8));