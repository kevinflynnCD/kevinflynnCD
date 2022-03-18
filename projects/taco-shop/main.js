var total = 0;

function sellStuff (orderNumber) {
    if (orderNumber === 1) {
        total += 1000.00;
    } else if (orderNumber === 2) {
        total += 6.99;
    } else if (orderNumber === 3) {
        total += 9.99;
    } else if (orderNumber === 4) {
        total += " 1 bean";
    } else if (orderNumber === 5) {
        total += 6.66;
    } else if (orderNumber === 6) {
        total += 300.00;
    } 
}

function clic () {
    alert(total)
}

$('#main').on('click', clic);