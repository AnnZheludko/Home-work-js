var Contacts=function(name,second_name,last_name,company,phone,email,age){
    
    this.checkAge=function(){
        this.age=0;
        age=+prompt('Укажите ваш возраст',);
        if(age<18 && age>0 && Number.isInteger(age)==true) {
            alert('Извините, сервис только для взрослых'); 
            return this.checkAge();
        }
        else if(age>100 || age<0 || Number.isInteger(age)==false) {
            alert('Ошибка! Попробуйте еще раз'); 
            return this.checkAge();
        }          
        else{alert('Спасибо. Вы можете воспользоваться сервисом');}
    };


    this.getData=function(){
        this.name=prompt('Имя',),
        this.second_name=prompt('Отчество',),
        this.last_name=prompt('Фамилия',),
        this.phone=prompt('Телефон',)
        this.email=prompt('email',)
    };


    this.addContact=function(){
        alert('Добавьте новый контакт');
        this.getData();
        alert('Успешно! Спасибо=)');
    };


    this.showContact=function(){
        document.write('----------------<br>');
        document.write(this.last_name+' '+this.name+' '+this.second_name+'<br>');
        document.write(this.phone+'<br>');
        document.write(this.email+'<br>');
        document.write('----------------<br>');
        document.write('<br>');
    };
}


var WorkContacts=function(name, second_name, last_name, phone, email, position, company){
    Contacts.apply(this, arguments);


    this.checkAge(); 
    this.addContact(); 
    

    this.getWorkData=function(position, company){
        alert('Необходимо добавить сведения об организации, чтобы внести контакт в группу "Деловые"');
        this.position=prompt('Должность',),
        this.company=prompt('Организация',)
        alert('Успешно! Спасибо=)');
    };
    this.getWorkData();


    this.showContact=function(){
        document.write('--------------------------<br>');
        document.write(this.last_name+' '+this.name+' '+this.second_name+'<br>');
        document.write(this.position+'<br>');
        document.write(this.company+'<br>');
        document.write(this.phone+'<br>');
        document.write(this.email+'<br>');
        document.write('--------------------------<br>');
        document.write('<br>');
    };
    this.showContact();
}
var workContacts=new WorkContacts();








   