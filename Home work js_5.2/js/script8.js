document.write('<br>------- Задание № 8 -------<br>');

function fibonachi(){
  let a=1;    //n=2
  let b=1;    //n=3
  let arr=[0,1];
  
  for(let i=3; b<=1000-a; i++){
    let c=a+b;  //n=4 
    a=b;
    b=c;

    arr.push(b);
  }
  document.write(arr); 
}
fibonachi();






