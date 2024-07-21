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
choosexmen.onclick = guessthexmen



function randomIndex(len) {

    let rand1 = Math.random();

    let rand2 = rand1 * len;

    let index = Math.floor(rand2);
    return index;
}


let xmenvillian = ["Apocalypse", "Mister Sinister", "Mystique", "Sabertooth"];
let xmenhero = ["cyclops", "cabel", "rogue"];

console.log(xmenhero[0])
console.log(xmenhero[1])
console.log(xmenhero[2])
console.log(xmenhero.length)

function herovillan() {
    for (let i = 0; i < xmenhero.length; i++) {
        let a;
        a = xmenhero[i];
        xmenvillian.push(a);
        alert(a);
    }
    console.log(xmenvillian);
}


xmenarray.onclick = herovillan;

function randomxmen() {
    alert("hello random")
    let villians = ["Apocalypse", "Mister Sinister", "Mystique", "Sabertooth"];
    let randomNumber = randomIndex(villians.length);
    let a = villians[randomNumber];
    alert(`Your random villans is ${a}`);
}

xmenrandom.onclick = randomxmen;


List of X - Men supervillains
const xmenSupervillains = [
    "Magneto",
    "Mystique",
    "Sabretooth",
    //"Juggernaut",
    "Apocalypse",
    "Omega Red",
    
];


function pickRandomVillain() {
    const randomIndex = Math.floor(Math.random() * xmenSupervillains.length);
    return xmenSupervillains[randomIndex];
}

