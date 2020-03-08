document.write('------- Задание № 1 -------<br>');

function student_info() {
    let name=prompt('Ваше имя?', );
    let second_name=prompt('Ваше отчество?', );
    let surname=prompt('Ваша фамилия?', );
    let group=prompt('Ваша группа?', );

    let str1='';
    let str2='* Домашняя работа: «Функции»';
    let str3='* Выполнил: студент гр. '+group;
    let str4='* '+surname+' '+name+' '+second_name;
    let str5='';

    let len2=str2.length;
    let len3=str3.length;
    let len4=str4.length;

    let long_str=Math.max(len2,len3,len4);

    str1=str5='*'.repeat(long_str+2);

    if(str2!=long_str) {str2=str2+(' '.repeat(long_str-len2+1)+'*');}
    if(str2==long_str) {str2=str2+1+'*';}

    if(str3!=long_str) {str3=str3+(' '.repeat(long_str-len3+1)+'*');}
    if(str3==long_str) {str3=str3+1+'*';}

    if(str4!=long_str) {str4=str4+(' '.repeat(long_str-len4+1)+'*');}
    if(str4==long_str) {str4=str4+1+'*';}

    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);
    console.log(str5);   
}

student_info();


