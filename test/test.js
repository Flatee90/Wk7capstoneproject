function guessthexmen() {
    let yourchoice;
    let correctAnswer;
    let lowerCaseChoice;
    correctAnswer = "professor x"
    alert("Who is the leader of the Xmen?");
    yourChoice = prompt("enter the name of the leader. Hint: Wheelchair");
    lowerCaseChoice = yourChoice.toLowerCase();

    if (correctAnswer === lowerCasechoice) {
        alert("correct!");
    } else {
        alert("Wrong! Try again!");
    }
}
choosexmen.onclick = guessthexmen




function randomIndex(len) {
    
    let rand1 = Math.random();
    
    let rand2 = rand1 * len;
    
    let index = Math.floor(rand2);
    return index;
}


let xmenvillan = ["Apocalypse", "Mister Sinister", "Mystique", "Sabertooth"];
let xmenhero = ["cyclops", "cabel", "rogue"];

console.log(xmenhero[0])
console.log(xmenhero[1])
console.log(xmenhero[2])
console.log(xmenhero.length)

function herovillan() {
    for (let i = 0; i < scaryAnimals.length; i++) {
        let a;
        a = xmenhero[i];
    xmenvillan.push(a);
    }
    console.log(xmenvillan);
}

pushArray.onclick = herovillan;


function randomxmen() {
    let villians = ["Apocalypse", "Mister Sinister", "Mystique", "Sabertooth"];
    let randomNumber = randomIndex(villians.length);
    let a = villians[randomNumber];
    alert(`Your random villians is ${a}`);
}

xmenButton.onclick = randomxmen;


