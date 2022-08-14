function singnup() {
  document.getElementById("main-Sign-form").style.display = "block";
}

function hide() {
  document.getElementById("main-Sign-form").style.display = "none";
}

// onbular code
function onbular(ele) {
  // console.log(ele.value)

  if (ele.value == "") {
    document.getElementById(ele.name).innerHTML = "Plzz Fill" + " " + ele.name;
  } else {
    document.getElementById(ele.name).innerHTML = "";
  }
  return false;
}

// Password length cheker code
var pwqa = document.querySelector("#password");

function pwchecker(ele) {
  if (ele.value.length <= 5) {
    document.querySelector("#password").innerHTML = "Password is very Week";
    pwqa.style.color = "red";
  } else if (ele.value.length > 5 && ele.value.length <= 8) {
    document.querySelector("#password").innerHTML = "Password is  Week";
    pwqa.style.color = "blue";
  } else {
    document.querySelector("#password").innerHTML = "Password is  Storng";
    pwqa.style.color = "green";
  }
  return false;
}

// Singn Up Form Cheker Code
// Mobile no code checker
let pattern = /^[6-9]{1}[0-9]{9}$/;
var mobileclr = document.querySelector("#mobile-text");

function mobileblur(eme) {
  // console.log(eme.value)
  var mobile = eme.value;

  if (eme.value == "") {
    document.querySelector("#mobile-text").innerHTML = "Plzz Fill Mobile No";
    mobileclr.style.color = "red";
  } else if (mobile.match(pattern)) {
    document.querySelector("#mobile-text").innerHTML = "Valid Number";
    mobileclr.style.color = "green";
  } else {
    document.querySelector("#mobile-text").innerHTML = "Not Valid Number";
    mobileclr.style.color = "blue";
  }
}

// email code cheker

var mailformat =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function emailblur(eme) {
  emailValue = eme.value;
  EmailColor = document.querySelector("#email-text");

  if (emailValue == "") {
    document.querySelector("#email-text").innerHTML = "Plzz Fill Email";
    EmailColor.style.color = "red";
  } else if (emailValue.match(mailformat)) {
    document.querySelector("#email-text").innerHTML = "Valid Email";
    EmailColor.style.color = "green";
  } else {
    document.querySelector("#email-text").innerHTML = "invalid  Email";
    EmailColor.style.color = "blue";
  }
}

// name checking code cheker

var nameCheker = /[^0-9]$/;

function namebular(eme) {
  // console.log(eme.value);
  NameValue = eme.value;
  NameColor = document.querySelector("#name-text");

  if (NameValue == "") {
    document.querySelector("#name-text").innerHTML = "Plzz Fill Name";
    NameColor.style.color = "red";
  } else if (NameValue.match(nameCheker)) {
    document.querySelector("#name-text").innerHTML = "Valid Name";
    NameColor.style.color = "green";
  } else {
    document.querySelector("#name-text").innerHTML = "Invaild Name";
    NameColor.style.color = "blue";
  }
}

// city cheker code
var cityCheker = /[^0-9]$/;

function citybular(eme) {
  // console.log(eme.value);
  cityValue = eme.value;
  cityColor = document.querySelector("#city-text");

  if (cityValue == "") {
    document.querySelector("#city-text").innerHTML = "Plzz Fill City";
    cityColor.style.color = "red";
  } else if (cityValue.match(cityCheker)) {
    document.querySelector("#city-text").innerHTML = "Valid City";
    cityColor.style.color = "green";
  } else {
    document.querySelector("#city-text").innerHTML = "invaild City";
    cityColor.style.color = "blue";
  }
}

// Username cheker code
var userName = /^[A-z_\-\.0-9]*$/;
function userblur(emem) {
  userValue = emem.value;
  userColor = document.querySelector("#user-text");
  
  // console.log()
   if (userValue === "") {
    document.querySelector("#user-text").innerHTML = "Plzz Fill Username";
    userColor.style.color = "red";
   }    

  else if(userValue.length < 5)
  {
  document.querySelector("#user-text").innerHTML = "Plzz Fill Min 5 Char for Username";
  userColor.style.color = "red";
}
 else if (userValue.match(userName)) {
    document.querySelector("#user-text").innerHTML = "Valid Username";
    userColor.style.color = "green";
  } else {
    document.querySelector("#user-text").innerHTML = "invalid Username";
    userColor.style.color = "blue";
  }
}

// Password length Cheker Code

function pwchecker2(ele) {
  pw1 = ele.value;
  pw2 = document.querySelector("#pasword-text1");

  if (pw1 == "") {
    document.querySelector("#pasword-text1").innerHTML =
    "Plzz Fill Password";
    pw2.style.color = "red";
  } else if (pw1.length <= 5) {
    document.querySelector("#pasword-text1").innerHTML =
      "Password is very Week";
    pw2.style.color = "red";
  } else if (pw1.length > 5 && pw1.length <= 8) {
    document.querySelector("#pasword-text1").innerHTML = "Password is  Week";
    pw2.style.color = "blue";
  } else {
    document.querySelector("#pasword-text1").innerHTML = "Password is  Storng";
    pw2.style.color = "green";
  }
  return false;
}



// Confirm Password Code Cheker
function repassword(ele){
  passwordText = document.querySelector("#pasword-text2");
respw = ele.value;
if(respw == ""){
  document.querySelector("#pasword-text2").innerHTML = "Plzz Enter Confirm ;Password";
  passwordText.style.color = "red";
}
else if(pw1 != respw){
  document.querySelector("#pasword-text2").innerHTML = "Password did not Match";
  passwordText.style.color = "red";
}
else if(pw1 === respw){
  document.querySelector("#pasword-text2").innerHTML = "Password Match";
  passwordText.style.color = "green";
}
}