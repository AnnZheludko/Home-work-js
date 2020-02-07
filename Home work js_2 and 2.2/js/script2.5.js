document.write('Задание № 2.5<br\/>');

let a=10;
let b=2;
let sum=a+b;
let raz=a-b;
let pr=a*b;
let chas=a/b;

document.write('Сумма='+sum+'<br\/>Разность='+raz+'<br\/>Произведение='+pr+'<br\/>Частное='+chas+'<br\/>');

if (sum>1) {
    sum=Math.pow(sum, 2);
    document.write('Сумма='+sum+'<br\/>');   
}
else {}


