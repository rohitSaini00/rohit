
  
   function globe() {
    var date = new Date();
    // console.log(date);
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    

    //adding am/pm
    var ap = "am";
    if (h >= 12) ap = "pm";

    //converting 24hrs to 12hrs
    if (h > 12) h = h - 12;

    //adding zero if single digit
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.querySelector("#globe").innerHTML =
      h + ":" + m + ":" + s + " " + ap;
  }

    var i = setInterval(globe, 1000);
    



  //  var i = setInterval(globe,1000)
  // function globe (){
  //   var d = new Date();
  //   var time = d.toLocaleTimeStrin();
  //   let day = d.getDay();
  //   document.getElementById("globe").innerHTML= time + "   " +  day;
  // }
  
  
  
    


// var a = new Date(18-12-2021);
// document.getElementById("globe").innerHTML = a