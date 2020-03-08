document.write('------- Задание № 8 -------<br\/>');

let num8='';
let sum8=0;
let iter=0;
for(let i=1; i<100; i++) {
        num=prompt('Введите число', );
        
        if (isNaN(num)) {
                alert('Ошибка ввода!');
        }
        
        else if(num!=false) {
                sum8+=i;
                iter+=1;
        }
        
        else {
                break;
        }
}

document.write('итераций: '+iter+'<br>');
document.write('сумма: '+sum8+'<br>');
document.write('среднее арифметическое: '+sum8/iter+'<br>');