function scrollFunction() {
  var centerName = document.getElementById("centerName");
  var centerNameBounding = centerName.getBoundingClientRect();
  if (centerNameBounding.top < 5) {
    console.log()
    document.getElementById("headerName").style.visibility = "visible";
    document.getElementById("centerName").style.visibility = "hidden";
  } else {
    document.getElementById("headerName").style.visibility = "hidden";
    document.getElementById("centerName").style.visibility = "visible";
  }
}

function loaded(){
  document.getElementById("header").style.height = document.getElementById("headerName").style.height;
  if (window.innerWidth < 1250) {
    document.getElementById("codeBlocks").style.visibility = "hidden";
  }
}
