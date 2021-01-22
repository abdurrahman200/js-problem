// https://github.com/abdurrahman200/js-problem

// kilometerToMeter units
function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter
    }
    else {
        console.log('kilometer Cannot Be Negative');
    }
}
var result = kilometerToMeter(0)
console.log('Meter Is : ', result);

// budgetCalculator
function budgetCalculator(mobile, watch, laptop) {
    if (mobile > 0 && watch > 0 && laptop > 0) {
        var mobilePrice = 50;
        var watchPrice = 100;
        var laptopPrice = 500;
        mobilePrice = mobilePrice * mobile;
        watchPrice = watchPrice * watch;
        laptopPrice = laptopPrice * laptop;
        total = mobilePrice + watchPrice + laptopPrice;
        return total;
    }
    else {
        console.log('Price Cannot be Negative');
    }


}
var calculate = budgetCalculator(65, 25, 30);
console.log('Total Budget :', calculate);

// hotelCost
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

// megaFriend
function megaFriend(arr) {
    let max = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
}
var maxResult = megaFriend(['rakib', 'sakib', 'sumon', 'abdurrahman', 'akaid'])
console.log(maxResult)
