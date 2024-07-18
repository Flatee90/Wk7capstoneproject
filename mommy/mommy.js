function myappointmentscheduler() {
    let name;
    let guest
    let appointment;
    let style;
    guest = prompt("Who is the lucky mommy?");
    appointment = prompt("What day would you like to book?");
    style = prompt("hair,nails, massage, full mommy makeover?");
    mommyHeader.innerHTML = `You're Invited....`;
    myappointmentscheduler.innerHTML = `someone booked a spa day for you!`
    myappointmentParagraph.innerHTML = `Hi ${name}, someone wants to treat you to a spa day for ${appointment} for ${style} we can't wait to see you!`;

}
mommyspa.onclick = myappointmentscheduler

