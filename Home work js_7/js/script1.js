// Задание: Использую полученные знания, реализуйте экземпляр любого объекта. Объект
// должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
// Примеры объектов:

// Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
// почта), проверка введенной информации, например: проверить возраст – должен быть
// целым неотрицательным числом больше 18, вывод информации о конкретном
// контакте, вывод всех контактов.


var Contacts=function(){
    

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
    this.checkAge();


    this.GetData=function(_name, _second_name, _last_name, _phone, _email){
        this.name=prompt('Имя',),
        this.second_name=prompt('Отчество',),
        this.last_name=prompt('Фамилия',),
        this.phone=prompt('Телефон',),
        this.email=prompt('email',)
    };


    this.addContact=function(){
        alert('Добавьте новый контакт');
        this.GetData();
        alert('Успешно! Спасибо=)');
    };
    this.addContact();


    this.showContact=function(){
        document.write('----------------<br>');
        document.write(this.last_name+' '+this.name+' '+this.second_name+'<br>');
        document.write(this.phone+'<br>');
        document.write(this.email+'<br>');
        document.write('----------------<br>');
    };
    this.showContact();
};

var contacts=new Contacts();
