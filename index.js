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

  if (document.getElementById("main").scrollTop > 200) {
    console.log("transitioning");
    document.getElementById("aboutMePicture").className = "slideUp";
  }
}

function loaded(){
  console.log("loaded");
  document.getElementById("codeBlocks").style.visibility = "visible";
  if (window.innerWidth < 1250) {
    document.getElementById("codeBlocks").remove();
    document.getElementById("aboutMePicture").remove()
    var aboutMeInfo = document.getElementById("aboutMeSection");
    centerElement(aboutMeInfo);

  }
}

function centerElement(el) {
  el.style.left = "50%";
  el.style.top = "50%";
  el.style.transform = "translate(-50%,-50%)";
}
