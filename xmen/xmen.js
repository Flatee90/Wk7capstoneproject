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