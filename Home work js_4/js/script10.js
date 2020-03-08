document.write('------- Задание № 10 -------<br\/>');

let n10=(prompt('Введите целое число', ));
let arr10=[];
arr10=n10.split('',20);
let sum10=0;
let numArr=[];



for(let i=0; i<arr10.length; i++) {
        numArr.push(parseInt(arr10[i]));
        sum10+=numArr[i];      
}

document.write('число состоит из цифр: '+arr10+'<br>');
document.write('количество цифр в числе: '+(arr10.length)+'<br>');
document.write('сумма цифр: '+sum10+'<br>');





console.log(numArr);
console.log(typeof(numArr));

console.log(sum10);
console.log(typeof(sum10));



