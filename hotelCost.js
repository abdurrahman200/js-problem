function hotelCost(days) {
    var price = 0;
    if (days > 0) {
        if (days <= 10) {
            price = days * 100;
        }
        else if (days <= 20) {
            var first10days = 10 * 100;
            var remaining = days - 10;
            var second10days = remaining * 80;
            price = first10days + second10days;
        }
        else {
            var first10days = 10 * 100;
            var second10days = 10 * 80;
            var remaining = days - 20;
            var after20days = remaining * 50;
            price = first10days + second10days + after20days;
        }
        return price
    }
    else {
        console.log('Days Cannot Be Negative');
    }
}
var result = hotelCost(52)
console.log(result);