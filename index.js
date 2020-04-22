window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 455 || document.documentElement.scrollTop > 455) {
    document.getElementById("headerName").style.visibility = "visible";
    document.getElementById("centerName").style.visibility = "hidden";
  } else {
    document.getElementById("headerName").style.visibility = "hidden";
    document.getElementById("centerName").style.visibility = "visible";
  }
}
