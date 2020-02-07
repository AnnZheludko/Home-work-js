document.write('<br\/>------- Задание № 10 -------<br\/>');

//let arr10=[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let arr10=[1,8,0,13,76,8,7,0,22,0,2,3,2];

let sum=0;
let first=0;
let last

for(let i=0; i<arr10.length; i++) {
    if(arr10[i]==0) {
        first=i;
        break;          
    }
}

for(let i=arr10.length; i>=0; i--) {
    if(arr10[i]==0) {
        last=i;
        break;          
    }
}

for(let i=first; i<last; i++) {
    sum+=arr10[i];
}

document.write(first+'<br\/>');
document.write(last+'<br\/>');
document.write('сумма='+sum+'<br\/>');
console.log(arr10);


