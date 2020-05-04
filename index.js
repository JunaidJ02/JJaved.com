function scrollFunction() {
  var centerName = document.getElementById("centerName");
  var centerNameBounding = centerName.getBoundingClientRect();
  if (centerNameBounding.top < 4) {
    document.getElementById("headerName").style.visibility = "visible";
    document.getElementById("centerName").style.visibility = "hidden";
  } else {
    document.getElementById("headerName").style.visibility = "hidden";
    document.getElementById("centerName").style.visibility = "visible";
  }
}

function loaded(){
  document.getElementById("codeBlocks").style.visibility = "visible";
  if (window.innerWidth < 1250) {
    document.getElementById("codeBlocks").remove();
  }
}

function changing() {
  var button = document.getElementById("contactButton");
  button.innerHTML = "Contact Me!"
}

function onClickButton() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  var button = document.getElementById("contactButton");
  if (name.value == "" || email.value == "") {
    button.innerHTML = "Fill in all items";
  } else {
    button.innerHTML = "Sent!";
  }
}
