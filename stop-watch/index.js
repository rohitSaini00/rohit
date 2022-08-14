var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

//Start function
function start(){
    timer = true;
    stopWatch();
}
function stop(){
    timer = false;

}
function reset(){
    timer = false;
    hr= 0;
    min= 0;
    sec= 0;
    count= 0;
    document.querySelector('#sec').innerHTML = '00' ;
    document.querySelector('#min').innerHTML = '00';
    document.querySelector('#hr').innerHTML =  '00';
    document.querySelector('#count').innerHTML =  '00';

}

function stopWatch(){
    if (timer == true) {
        count = count+1;
        if (count == 100) {
            sec = sec+1;
            count = 0;
        }
        
        if (sec ==60) {
             min = min+1;
             sec= 0;
            
        }
        if (min == 60) {
            hr = hr+1;
            min = 0;
            sec = 0;
            
        }
        document.querySelector('#sec').innerHTML = sec;
        document.querySelector('#min').innerHTML = min;
        document.querySelector('#hr').innerHTML = hr;
        document.querySelector('#count').innerHTML = count;
        setTimeout('stopWatch()',10);
        
    }
  

}