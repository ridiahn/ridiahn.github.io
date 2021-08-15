/* _variables.scss -> $medium: 768px;*/
let bp = 768;
let rightSide = document.getElementsByClassName("sidebar__right")[0];
let _page = document.getElementsByClassName("page")[0];
let pageHeader = document.getElementsByClassName("page__inner-wrap")[0].getElementsByTagName("header")[0];
var screenWidth = window.innerWidth;


window.onload = function(){
  postioningToc();
}

window.onresize = function(){
  postioningToc();
};

function postioningToc(){
  if( screenWidth <= bp ){
    /*tablet screen*/
    pageHeader.append(rightSide);
  } else {
    /*desktop screen*/
    _page.after(rightSide);
  }
}
