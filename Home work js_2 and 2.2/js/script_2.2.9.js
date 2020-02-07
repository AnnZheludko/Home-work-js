document.write('Задание № 2.2.9<br\/>');

let name=(prompt('Ваше имя', ''));
let login=(prompt('Введите логин', ''));
let pass=(prompt('Введите пароль', ''));

if (login=='admin' && pass=='nimda') {
    document.write('Добро пожаловать, '+name+'! Вы успешно вошли на сайт.<br\/>');
}
else {
    document.write(name+', вы неверно ввели логин или пароль!<br\/>');
}