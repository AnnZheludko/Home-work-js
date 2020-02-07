document.write('Задание № 2.8<br\/>');

let day=(prompt('Введите день', ''));

if (day>0 && day<=10) {
    alert('1-ая декада месяца');
}
else if (day>10 && day<=20) {
    alert('2-ая декада месяца');
}
else if (day>20 && day<=31) {
    alert('3-ая декада месяца');
}
else {
    alert('Нет такого числа в месяце');
}

