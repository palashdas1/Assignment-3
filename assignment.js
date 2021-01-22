

// 1. kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var rohimRun = kilometerToMeter(15);
console.log(rohimRun);


// 2. budgetCalculator

function budgetCalculator(watchQuantity,mobileQuantity,laptopQuantity){
    var watchPrice=50
    var mobilePrice=100
    var laptopPrice=500
        var total = watchQuantity*watchPrice+ mobileQuantity*mobilePrice+ laptopQuantity*laptopPrice;
        return total;
    }
    var cost=budgetCalculator(5,7,10);
    console.log(cost);



// 3. hotelCost

var hotelLive = 36;
var hotelCost = 0;
if (hotelLive<=10){
    hotelCost = hotelLive * 100;
}
else if(hotelLive<=20){
    var firstPart = 10 * 100;
    var remaining = hotelLive - 10;
    var secondPart = remaining * 80;
    hotelCost = firstPart + secondPart;
}
else{
    var firstPart = 10*100;
    var secondPart = 10*80;
    var remaining = hotelLive - 20;
    var thirdPart = remaining * 50;
    hotelCost = firstPart + secondPart + thirdPart;
}
console.log(hotelCost);


// 4. megaFriend

function megaFriend(friends){
    var max = friends[0].length;
    friends.map(value => max = Math.max(max, value.length));
    result = friends.filter(value => value.length == max);
    return result;
}
console.log(megaFriend(["Rahim", "Karim", "Mahamudulla", "Tapos"]))

