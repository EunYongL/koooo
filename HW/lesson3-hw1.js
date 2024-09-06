let i = prompt('나이를 입력하세요');
i = parseFloat(i);
if(i<=10){
    console.log('child');
} else if(10<i && i<18){
    console.log('teenager');
} else{
    console.log('adult');
}