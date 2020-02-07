document.write('Задание № 2.9<br\/>');

let days=(prompt('Введите количество дней', ''));

let year=days/365;
if(year<1) {
    document.write('Меньше года<br\/>')
}
else {
    document.write(year+' лет<br\/>')
}

let month=days/31;
if(month<1) {
    document.write('Меньше месяца<br\/>')
}
else {
    document.write(month+' месяцев<br\/>')
}

let week=days/7;
if(week<1) {
    document.write('Меньше недели<br\/>')
}
else {
    document.write(week+' недель<br\/>')
}

let hour=(document.write((days*24)+' часов<br\/>'));
let min=(document.write((days*1440)+' минут<br\/>'));
let sec=(document.write((days*86400)+' секунд<br\/>'));







