function* multiplication(x) {
    console.log("Hello");
    yield "I am first yield ...";
    console.log("Hi");
    yield "I am second yield";
}

var msg = messages();

// console.log(msg.next().value);
// console.log(msg.next().value);
// console.log(msg.next().value);

for (let message of msg) {

    console.log(message);
}