window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var centerName = document.getElementById("centerName");
  var centerNameBounding = centerName.getBoundingClientRect();
  if (centerNameBounding.top < 10) {
    document.getElementById("headerName").style.visibility = "visible";
    document.getElementById("centerName").style.visibility = "hidden";
  } else {
    document.getElementById("headerName").style.visibility = "hidden";
    document.getElementById("centerName").style.visibility = "visible";
  }
}
function loaded(){
  if (window.innerWidth < 1250) {
    document.getElementById("codeBlocks").style.visibility = "hidden";
  }
}
