document.write('<br>------- Задание № 9 -------<br>');

function func9(num){
    
    num=String(num);
    let sum=0;

    for(let i=0; i<num.length; i++) {
        sum+= +num[i];
    }

    console.log(sum);

    if(sum>9) {func9(sum);}     
}
func9(123);




