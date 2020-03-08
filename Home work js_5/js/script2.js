document.write('<br>------- Задание № 2 -------<br>');

function triangle() {
    h=prompt('Введите высоту триугольника', );
    
    s='^';
    d='&nbsp';

    for(let i=1; i<=h; i++) {
        document.write('<br>');
        document.write(d.repeat(h-i)+s.repeat(i+i-1));         
    }
}
triangle();


document.write('<br>');


function triangle_invert() {

    for(let i=h; i>=1; i--) {
        document.write('<br>');
        document.write(d.repeat(h-i)+s.repeat(i+i-1));  //не могу понять, почему первая строка такая длинная
       
    }
}
triangle_invert();








       
