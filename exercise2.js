// Exercise #2 (Part #1)
const helloWelcome = (name1, name2, name3) => {
    return `Welcome ${name1}, ${name2}, ${name3}.`;
}

// Exercise #2 (Part #2)
const ageCount = birthYear => {
    let thisYear = new Date().getFullYear();
    return thisYear - birthYear;
}

// Exercise #2 (Part #3)
const welcomeRepeat = (name1, age1, name2, age2, name3, age3) => {
    return `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`
}