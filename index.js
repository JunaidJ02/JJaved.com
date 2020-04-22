window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 455 || document.documentElement.scrollTop > 50) {
    document.getElementById("name").style.fontSize = "1.2rem";
    document.getElementById("name").style.visibility = "visible";
    document.getElementById("name1").style.visibility = "hidden";
  } else {
    document.getElementById("name").style.fontSize = "1.8rem";
    document.getElementById("name").style.visibility = "hidden";
    document.getElementById("name1").style.visibility = "visible";
  }
}
