function guessthexmen() {
    let yourChoice;
    let correctAnswer;
    let lowerCaseChoice;
    correctAnswer = "professor x"
    alert("Who is the leader of the Xmen?");
    yourChoice = prompt("Enter the name of the leader. Hint: Wheelchair");
    lowerCaseChoice = yourChoice.toLowerCase();

    if (correctAnswer === lowerCaseChoice) {
        alert("Correct!");
    } else {
        alert("Wrong! Try again!");
    }
}
choosexmen.onclick= guessthexmen


let xmenvillian = ["Apocalypse", "Mister Sinister", "Mystique", "Sabertooth"];
let xmenhero = ["cyclops", "cabel", "rogue"];

console.log(xmenhero[0])
console.log(xmenhero[1])
console.log(xmenhero[2])
console.log(xmenhero.length)

function herovillan() {
    for(let i=0; i<xmenhero.length; i++) {
        let a;
        a = xmenhero[i];
        xmenvillian.push(a);
    }
    console.log(xmenvillian);
}


xmenarray.onclick = herovillan;