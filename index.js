window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > (19*window.innerHeight)/40 || document.documentElement.scrollTop > (6*window.innerHeight)/13) {
    document.getElementById("headerName").style.visibility = "visible";
//     document.getElementById("about").style.visibility = "visible";
//     document.getElementById("contact").style.visibility = "visible";
    document.getElementById("centerName").style.visibility = "hidden";
  } else {
    document.getElementById("headerName").style.visibility = "hidden";
//     document.getElementById("about").style.visibility = "hidden";
//     document.getElementById("contact").style.visibility = "hidden";
    document.getElementById("centerName").style.visibility = "visible";
  }
}

function loaded(){
  if (window.innerWidth < 1000) {
    document.getElementById("codeBlocks").style.visibility = "hidden";
//     document.getElementById("about").style.visibility = "hidden";
//     document.getElementById("contact").style.visibility = "hidden";
  }
}
