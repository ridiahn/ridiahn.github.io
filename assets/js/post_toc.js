/* _variables.scss -> $medium: 768px;*/
var bp = 768;
var rightSide = document.getElementsByClassName("sidebar__right")[0];
var _page = document.getElementsByClassName("page")[0];
var pageHeader = document.getElementsByClassName("page__inner-wrap")[0].getElementsByTagName("header")[0];

window.onload = function(){
  postioningToc();
}

window.onresize = function(){
  postioningToc();
};

function postioningToc(){
  var screenWidth = window.innerWidth;
  if( screenWidth <= bp ){
    /*tablet screen*/
    pageHeader.append(rightSide);
  } else {
    /*desktop screen*/
    _page.after(rightSide);
  }
}