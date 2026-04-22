function runPattern() {
    let n = document.getElementById('numInput').value;
    let display = document.getElementById('output');
    let patternResult = "";

    if (n === "" || n < 1) {
        display.innerText = "Please enter a number greater than 0.";
        return;
    }

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= i; j++) {
            patternResult += j + " ";
        }

        patternResult += "\n";
    }
    display.innerText = patternResult;
}