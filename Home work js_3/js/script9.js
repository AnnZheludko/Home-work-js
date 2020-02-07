document.write('<br\/>------- Задание № 9 -------<br\/>');


let arr9=[5, 9, 21, , , 9, 78, , , , 6];
let t=0;
for(let i=0; i<arr9.length; i++) {
    if(arr9[i]==null || arr9[i]=="undefined" || arr9[i]=="") {
        t++;
    }
    else {}
}
document.write(t+'<br\/>');
console.log(arr9);





