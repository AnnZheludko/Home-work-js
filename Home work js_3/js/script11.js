document.write('<br\/>------- Задание № 11 -------<br\/>');

let h=prompt('Укажите высоту треугольника', );
let s='^';
//let d='&nbsp';
let d='-';  //для наглядности

for(let i=1; i<=h; i++) {
    document.write('<br\/>');
            document.write(d.repeat(h-i)+s.repeat(i+i-1));         
}



        // ----^
        // ---^^^
        // --^^^^^
        // -^^^^^^^
        // ^^^^^^^^^

