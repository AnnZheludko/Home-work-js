document.write('<br\/>------- Задание № 3 -------<br\/>');

let arr3_1=[];
let result=0;

for(let i=23; i<=57; i++) {
    arr3_1.push(i); 
    result+=i;  
}
document.write(arr3_1+'<br\/>');
console.log(arr3_1);



let arr3_2=[];
let i=23;

while(i<=57) {
    arr3_2.push(i++);
}
document.write(arr3_2+'<br\/>');
console.log(arr3_2);

document.write(result+'<br\/>');