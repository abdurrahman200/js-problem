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

