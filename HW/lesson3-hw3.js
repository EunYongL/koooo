let day = prompt ('요일을 입력하세요');
day = day.toLowerCase()
switch(day){
    case 'monday':
    case 'tuesday':
        console.log ('weekday');
        break;
    case 'saturday':
        console.log ('weekend')
        break;
    default:
        console.log ('Invalid')
}