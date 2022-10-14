const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a sequência de colchetes: ', function (input) {

    let opening = { "[": "]", "(": ")", "{": "}" };
    let closing = { "]": "[", ")": "(", "}": "{" };
    let stack = [];
    for (let c of input) {
        if (opening[c] !== undefined) {
            stack.push(c);
        } else if (closing[c] !== undefined) {
            let last = stack[stack.length - 1];
            if (closing[c] === last) {
                stack.pop();
            } else {
                break;
            }
        }
    }
    console.log(stack.length === 0 ? "Sequência válida!":"Sequência não válida!");

    rl.close();
});

rl.on('close', function () {
    process.exit(0);
});