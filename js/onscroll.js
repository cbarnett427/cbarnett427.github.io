// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
// boxShadow text as string into a variable
var classattrib = "box-shadowinset 1px 3px 5px 3px rgba(12,12,12,20);";
// var nodeList = document.getElementsByClassName('nav-link')
// document.getElementById("navbar").style.cssText = classattrib;

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "#ffffff";
    document.getElementById("navbar").style.boxShadow = "1px 3px 5px 3px #0c0c0c33";
    // document.getElementById("logo").style.color = "#ffffff";
    // var els = document.getElementsByClassName('nav-link');
    // for (var i = 0; i < els.length; i++) {
    //   els[i].style.color = '#ffffff';
    // }
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow = "none";
    // document.getElementById("logo").style.color = "#363636";
    // var els = document.getElementsByClassName('nav-link');
    // for (var i = 0; i < els.length; i++) {
    //   els[i].style.color = '#363636';
    // }
  }
}