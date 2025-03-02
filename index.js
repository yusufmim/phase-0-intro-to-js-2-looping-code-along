// Code your solutions in this file
// 1. Function to create thank you cards
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// Example call
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

// 2. Function to count down to zero using while loop
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Example call
countDown(10);
