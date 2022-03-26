const num = 12345
function reverseDigits(num) {
    var rev_num = 0;
    while(num > 0)
    {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev_num;
}

console.log(reverseDigits(num));
