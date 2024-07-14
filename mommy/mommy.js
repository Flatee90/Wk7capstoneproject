function submitOrder() {
    let name;
    let guest;
    name = prompt("What is your name?");
    guest = prompt("A mommy you want to treat?");
    newyearsHeader.innerHTML = `You're Invited....`;
    newyearsParagraph.innerHTML = `Hi ${guest}! ${name} would like to invite you to treat you to a day of pampering!  `;

}
mommyretreat.onclick = submitOrder