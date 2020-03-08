document.write('<br>------- Задание № 7 -------<br>');

function func7(){
    h=+prompt('Введите количество рядов',);
    s=prompt('Введите символ',);

    for(let i=1; i<=h; i++){
        document.write('<br>');
        for(let j=1; j<=i; j++){
            if(s==''){document.write(i);}
            else{document.write(s);}
        } 
    }
}
func7();
