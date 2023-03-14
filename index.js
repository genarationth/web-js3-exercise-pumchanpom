// Exercise #1 
const costPayment = transaction => total = transaction + 3 + (transaction * 0.01);

// test
console.log(costPayment(130));

// Exercise #2 (Part #1)
const helloWelcome = (name1, name2, name3) => {
    return `Welcome ${name1}, ${name2}, ${name3}.`;
}

// test
console.log(helloWelcome('Jim', 'Elizabeth', 'Roth'));

// Exercise #2 (Part #2)
const ageCount = birthYear => {
    let thisYear = new Date().getFullYear();
    return thisYear - birthYear;
}

// test
console.log(ageCount(2000));

// Exercise #2 (Part #3)
const welcomeRepeat = (name1, age1, name2, age2, name3, age3) => {
    return `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`
}

// test
console.log(welcomeRepeat('Jim', 34, 'Elizabeth', 44, 'Roth', 29));

// Challenge
const passed = score => score > 11 ? 'error' : score >= 5 ? true : false;

// test
console.log(passed(13));
console.log(passed(10));

const gradeIndicator = score => {
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

// test
console.log(gradeIndicator(0));

const scoreReport = score => {
    return `Score:  ${score}\nPassed: ${passed(score)} \nGrade:  ${gradeIndicator(score)}`
}

// test
console.log(scoreReport(7));