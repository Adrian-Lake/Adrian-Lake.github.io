var menuHTML = "<a href='./index.html'><div class='ml hr'><p>Home</p></div></a><a href='./contact.html'><div class='ml'><p>Contact</p></div></a>"
var footerHTML = "2018 A. Lake"

function go(link){
  console.log(link);
  // document.location.href = link;

}

function init(){

  for(e of document.getElementsByClassName('menu')){
    e.innerHTML = menuHTML;
  }

  for(e of document.getElementsByClassName('menu')){
    e.innerHTML = menuHTML;
  }

  for(e of document.getElementsByClassName('footer')){
    e.innerHTML = footerHTML;
  }

}

invertState = false;
function invert() {
  if (invertState) {
    document.body.style.filter = "invert(0%)";
    document.body.style['background-color'] = "#fff";
    invertState = false;
  } else {
    document.body.style.filter = "invert(100%)";
    document.body.style['background-color'] = "#000";
    invertState = true;
  }
}
