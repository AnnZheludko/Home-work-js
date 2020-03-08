document.write('<br>------- Задание № 10 -------<br>');

function func10(arr){
    document.write(arr[i]+' ');
    i++;
    if(i<arr.length) {func10(arr);}
} 
var arr1=[1,2,3,4,5,6,7,8,9];
var i=0;
func10(arr1);

