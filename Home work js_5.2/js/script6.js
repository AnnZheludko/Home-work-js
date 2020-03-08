document.write('<br>------- Задание № 6 -------<br>');

var arr6=[];
function func6(a,b,str){
    a6=+prompt('Введите первое число',);
    b6=+prompt('Введите последнее число',);
    str6='';
    
    for(i=a6; i<=b6; i++){
        str6+=i;
    }
    arr6=str6.split('');
}
func6();   

function isEven6(){
    arrEven=[];
    for(let i=0; i<=arr6.length; i++){
        if(arr6[i]%2==0){
            arrEven.push(arr6[i]);
        }
    }
    document.write(arrEven);
}
isEven6();   


