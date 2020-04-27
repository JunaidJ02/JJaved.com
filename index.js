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
