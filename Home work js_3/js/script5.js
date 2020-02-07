document.write('<br\/>------- Задание № 5 -------<br\/>');

let arr5=['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for(let i=0; i<arr5.length; i++) {
    if(i>=0 && i<5 ) {
        document.write(arr5[i]+' ');
    }  
    else {
        document.write('<b>'+arr5[i]+' </b>');
    }
}

console.log(arr5);

