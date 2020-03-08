document.write('------- Задание № 9 -------<br\/>');

let str='4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let min=2;
let max=2;
let arr9=[];
arr9=str.split(' ',30);

for(let i=0; i<=arr9.length; i++) {
        if(arr9[i]>max) {
                max=arr9[i];
        }
        if(arr9[i]<min) {
                min=arr9[i];
        }      
}

console.log(arr9);
document.write('самое большее число: '+max+'<br>');
document.write('самое маленькое число: '+min+'<br>');
