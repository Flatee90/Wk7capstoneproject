function myappointmentscheduler() {
    let name;
    let guest
    let appointment;
    let style;
    guest = prompt("Who is the lucky mommy?");
    appointment = prompt("What day would you like to book?");
    style = prompt("hair,nails, massage, full mommy makeover?");
    mommyHeader.innerHTML = `You're Invited....`;
    myappointmentHeader.innerHTML = `someone booked a spa day for you!`
    myappointmentParagraph.innerHTML = `Hi ${name}, someone wants to treat you to a spa day for ${appointment} for ${style} we can't wait to see you!`;

}
mommyspa.onclick = myappointmentscheduler

function treattotal() {
    let treattotal = 50;
    let nails = 15;
    let hair = 15;
    let massage = 20;
    if (treatsubtotal === 50) text = `your total is $50`;
} 

