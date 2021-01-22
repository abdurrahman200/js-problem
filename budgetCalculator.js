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