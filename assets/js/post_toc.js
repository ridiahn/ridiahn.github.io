/* _variables.scss -> $wide-medium: 980px;*/
let bp = 980;
let rightSide = document.getElementsByClassName("sidebar__right")[0];
let pageHeader = document.getElementsByClassName("page")[0].getElementsByTagName("header")[0];

function postioningToc(){
  var screenWidth = window.innerWidth;
  if( screenWidth <= bp ){
    /*tablet screen*/
    pageHeader.append(rightSide);
  } else {
    /*desktop screen*/
    pageHeader.after(rightSide);
  }
}postioningToc();

window.onresize = function(){
  postioningToc();
};