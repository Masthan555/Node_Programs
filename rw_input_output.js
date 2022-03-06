let readLine = require("readline");

let reader = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

reader.question("Who is your best friend forever: ", (res) => {
    console.log(res);
    reader.close();
});