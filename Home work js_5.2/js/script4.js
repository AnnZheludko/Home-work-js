document.write('<br>------- Задание № 4 -------<br>');

var arr=[];
function foooo1(a,b,str){
    a=+prompt('Введите первое число',);
    b=+prompt('Введите последнее число',);
    
    console.log(a+typeof(a));
    
    
    str='';
    
    for(i=a; i<=b; i++){
        str+=i;
    }
    console.log(str);
    arr=str.split('');
}
foooo1();   


function foooo2(){
   document.write(arr); 
}
foooo2();