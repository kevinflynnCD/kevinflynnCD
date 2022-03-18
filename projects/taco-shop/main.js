function sellStuff () {
    var total = 0;
    function orderDeclaration () {
        var orderNumber = prompt('what would you like to order? (enter info as a number, from 1-6)');
        if (orderNumber === '1') {
            total += 1000.00;
        } else if (orderNumber === '2') {
            total += 6.99;
        } else if (orderNumber === '3') {
            total += 9.99;
        } else if (orderNumber === '4') {
            total += " 1 bean";
        } else if (orderNumber === '5') {
            window.open('https://www.youtube.com/watch?v=a3Z7zEc7AXQ', '_blank');
            total += 6.66;
        } else if (orderNumber === '6') {
            total += 300.00;
        } else {
            alert("incorrect order")
        }
        var yes = prompt("want anything else? (enter as yes or no)")
    if (yes === "yes") {
        orderDeclaration();
        } 
    }
    orderDeclaration();
    alert(total);
}
$('button').on('click', sellStuff);