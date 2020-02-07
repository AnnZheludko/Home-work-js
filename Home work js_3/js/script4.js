document.write('<br\/>------- Задание № 4 -------<br\/>');

let arr4=['10', '20', '30', '50', '235', '3000'];

for(let i=0; i<arr4.length; i++) {
    if(arr4[i].startsWith('1') || 
       arr4[i].startsWith('2') || 
       arr4[i].startsWith('5'))  {
        document.write(arr4[i]+' ');
    }  
}

console.log(arr4);

