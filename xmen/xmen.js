function guessthexmen() {
    let yourChoice;
    let correctAnswer;
    correctAnswer = "Proffesor X"
    alert("Who is the leader of the Xmen?");
    yourChoice = prompt("Enter the name of the leader. Hint: Wheelchair");

    if (correctAnswer === yourChoice) {
        alert("Correct!");
    } else {
        alert("Wrong! Try again!");
    }
}
choosexmen.onclick= guessthexmen