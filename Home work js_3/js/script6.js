document.write('<br\/>------- Задание № 6 -------<br\/>');

let arr6=['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'LAST'];

for(let i=0; i<arr6.length; i++) {
    if(i==arr6.length-1) {
        document.write(arr6[i]+' ');
    }  
    else {}
}

console.log(arr6);

