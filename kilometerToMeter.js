function kilometerToMeter(kilometer) {
   if (kilometer > 0) {
    var meter = kilometer * 1000;
    return meter   
   }
   else{
       console.log('kilometer Cannot Be Zero or Negative');
   }
}
var result = kilometerToMeter(0)
console.log('Meter Is : ',result);