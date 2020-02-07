document.write('Задание № 2.10<br\/>');


let season;

if (day>0 && day<=31) {
    alert('январь');
    season=4;
}
else if (day>31 && day<=60) {
    alert('февраль');
    season=4;
}
else if (day>60 && day<=91) {
    alert('март');
    season=1;
}
else if (day>91 && day<=121) {
    alert('апрель');
    season=1;
}
else if (day>121 && day<=152) {
    alert('май');
    season=1;
}
else if (day>152 && day<=182) {
    alert('июнь');
    season=2;
}
else if (day>182 && day<=213) {
    alert('июль');
    season=2;
}
else if (day>213 && day<=244) {
    alert('август');
    season=2;
}
else if (day>244 && day<=274) {
    alert('сентябрь');
    season=3;
}
else if (day>274 && day<=305) {
    alert('октябрь');
    season=3;
}
else if (day>305 && day<=335) {
    alert('ноябрь');
    season=3;
}
else if (day>335 && day<=366) {
    alert('декабрь');
}
else {
    alert('Нет такого дня в году');
}


switch (season) {
    case 1:
        alert('Весна');
    break;
    case 2:
        alert('Лето');
    break;
    case 3:
        alert('Осень');
    break;
    case 4:
        alert('Зима');
    break;
    default:
        alert('Кто-то накосячил <=(')
}






