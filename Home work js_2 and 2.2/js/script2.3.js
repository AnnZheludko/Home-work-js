document.write('Задание № 2.3<br\/>');

let numStr1=Number(prompt('Введите 1-ую цифру', ));
let numStr2=Number(prompt('Введите 2-ую цифру', ));
let numStr3=Number(prompt('Введите 3-ую цифру', ));
let numStr4=Number(prompt('Введите 4-ую цифру', ));
let numStr5=Number(prompt('Введите 5-ую цифру', ));
let numStr6=Number(prompt('Введите 6-ую цифру', ));

if (numStr1+numStr2+numStr3==numStr4+numStr5+numStr6) {
    alert('да');
}
else {
    alert('нет');
}

let str=document.write(numStr1,numStr2,numStr3,numStr4,numStr5,numStr6);
console.log(typeof(numStr1));



