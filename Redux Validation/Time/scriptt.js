var i = setInterval(globe , 1000)

var time = document.getElementById("globe")

function globe(){
    var date = new Date();
    var a =   "Day" +  date.getDate() ;
    var b = date.getHours();
    var c = date.getMinutes()
    var d = date.getSeconds();

    var zone = "am";
    if(b >=12)zone = "pm";

    if(b > 12)b= b-12;

    if(b < 10)b = "0" + b;
    if(c < 10)c = "0" + c;
    if(d < 10)d = "0" + d;

    // time.innerHTML =  a ;
    time.innerHTML = a + "  :"  + b + ":" + c + ":" + d + " " + zone;
}