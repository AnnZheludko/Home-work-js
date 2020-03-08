document.write('------- Задание № 3 -------<br>');

function validateEmail() {
    let email=prompt('Ваш email', );
    
    let reg1=/^([A-za-z0-9_\-\.]{2,})+\@([A-za-z0-9_\-\.]{2,11})+\.([A-za-z]{2,11})$/;
    let reg2=/^.{2,}$/;
    let reg3=/^-{2,}$/;
    let reg4=/^_{2,}$/;
    
    if(reg1.test(email)==false||reg2.test(email)==true||reg3.test(email)==true||reg4.test(email)==true) {
        alert ('email введен неправильно');
    }
    else {alert('email принят');}
    
}

validateEmail();






