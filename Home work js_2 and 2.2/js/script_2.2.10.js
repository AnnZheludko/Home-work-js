document.write('Задание № 2.2.10<br\/>');

let mon=(prompt('Введите месяц', ''));
let seas=0;
let seasonName=0;

if (mon==1 || mon==2 || mon==12) {
    seas=1;
}

else if (mon==3 || mon==4 || mon==5) {
    seas=2;
}

else if (mon==6 || mon==7 || mon==8) {
    seas=3;
}

else if (mon==9 || mon==10 || mon==11) {
    seas=4;
}


switch (seas) {
    case 1:
        alert('Зима');
    break;
    case 2:
        alert('Весна');
    break;
    case 3:
        alert('Лето');
    break;
    case 4:
        alert('Осень');
    break;
    default:
        alert('Нет такого месяца');
}




